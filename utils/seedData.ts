/**
 * This file contains functions to download git repositories recursively.
 * They are used for downloading template data.
 */

import { APP_DIRECTORY } from "@/constants/app-directory";
import { Directory, File, Paths } from "expo-file-system";

const GITHUB_OWNER = "peters-david";
const REPO_NAME = "idea-mixer-template";

export const addSeedData = async (): Promise<void> => {
    ensureFolder(APP_DIRECTORY);
    await downloadGitRecursive("", APP_DIRECTORY);
}

export const downloadGitRecursive = async (repoPath: string, localPath: string): Promise<void> => {
    const git_template_url = `https://api.github.com/repos/${GITHUB_OWNER}/${REPO_NAME}/contents/${repoPath}?ref=main`;
    const response = await fetch(git_template_url);
    const items = await response.json();
    for (const item of items) {
        const itemPath = Paths.join(localPath, item.name);
        if (item.type === "dir") {
            new Directory(itemPath).create({ idempotent: true, intermediates: true });
            await downloadGitRecursive(item.path, itemPath + "/");
        } else if (item.type === "file") {
            await File.downloadFileAsync(item.download_url, new File(itemPath), { idempotent: true });
        }
    }
}

export const ensureFolder = (path: string): void => {
    const directory = new Directory(path);
    if (!directory.exists) {
        directory.create({ idempotent: true, overwrite: false, intermediates: true });
    }
}