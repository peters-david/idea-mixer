import { APP_DIRECTORY } from "@/constants/app-directory";
import { Directory, File } from "expo-file-system";


const GITHUB_OWNER = "peters-david";
const REPO_NAME = "idea-mixer-template";

export async function addSeedData() {
    ensure_folder(APP_DIRECTORY);
    downloadGitRecursive("", APP_DIRECTORY);
}

export async function downloadGitRecursive(repoPath: string, localPath: string) {
    const git_template_url = `https://api.github.com/repos/${GITHUB_OWNER}/${REPO_NAME}/contents/${repoPath}?ref=main`;
    const response = await fetch(git_template_url);
    const items = await response.json();
    for (const item of items) {
        const itemPath = localPath + item.name;
        if (item.type === "dir") {
            new Directory(itemPath).create({ idempotent: true, intermediates: true });
            await downloadGitRecursive(item.path, itemPath + "/");
        } else if (item.type === "file") {
            await File.downloadFileAsync(item.download_url, new File(itemPath), { idempotent: true });
            console.log("downloaded file");
            console.log(itemPath);
        }
    }
}

function delete_folder(path: string) {
    new Directory(path).delete();
}

function ensure_folder(path: string) {
    const directory = new Directory(path);
    if (!directory.exists) {
        directory.create({ idempotent: true, overwrite: false, intermediates: true });
    }
}