import { CustomTheme, useCustomTheme } from "@/constants/custom-theme";
import { Image } from "react-native";
import Markdown, { ASTNode, RenderRules } from "react-native-markdown-display";

export default function MarkdownView() {
    const theme = useCustomTheme();
    const styles = makeStyles(theme);

    const t = `**Lorem ipsum** dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                [3d models](https://www.printables.com/tag/planter)
                ![Pots](https://cdn.pixabay.com/photo/2017/03/27/14/33/ancient-2179091_1280.jpg)`;
    

    const rules: RenderRules = {
        image: (node: ASTNode, children, parent, styles, index) => {
            const attributes = node.attributes || {};
            const src = attributes.src;
            if (!src) return null;
            return (
                <Image key={`${src}-${index}`} source={{ uri: src }} style={{ width: "100%", minHeight: 200, resizeMode: "cover", borderRadius: 20 }} />
            );
        },
    };

    return (
        <Markdown style={styles.markdown} rules={rules}>
            {t}
        </Markdown>
    );
}

const makeStyles = (theme: CustomTheme) => {
    return {
        markdown: {
            body: {
                color: theme.colors.text,
            }
        },
    };
}