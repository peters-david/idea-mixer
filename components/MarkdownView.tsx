import { CustomTheme, useCustomTheme } from "@/theme/custom-theme";
import { Paths } from "expo-file-system";
import { Image } from "react-native";
import Markdown, { ASTNode, RenderRules } from "react-native-markdown-display";

type Props = {
    uid: string,
    content: string,
}

export default function MarkdownView(props: Props) {
    const theme = useCustomTheme();
    const styles = makeStyles(theme);

    const rules: RenderRules = {
        image: (node: ASTNode, children, parent, styles, index) => {
            const attributes = node.attributes || {};
            let src = attributes.src;
            if (!src) return null;
            if (!src.startsWith("http")) {
                src = Paths.join(Paths.document, "data", props.uid, src);
            }
            return (
                <Image key={`${src}-${index}`} source={{ uri: src }} style={{ width: "100%", minHeight: 200, resizeMode: "cover", borderRadius: 20 }} />
            );
        },
    };

    return (
        <Markdown style={styles.markdown} rules={rules}>
            {props.content}
        </Markdown>
    );
}

const makeStyles = (theme: CustomTheme) => {
    return {
        markdown: {
            body: {
                color: theme.colors.text,
                fontSize: 18,
            }
        },
    };
}