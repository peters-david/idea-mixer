import { CustomTheme, useCustomTheme } from "@/constants/custom-theme";
import { Image } from "react-native";
import Markdown, { ASTNode, RenderRules } from "react-native-markdown-display";

export default function MarkdownView() {
    const theme = useCustomTheme();
    const styles = makeStyles(theme);

    const t = `**Lorem ipsum** dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                [Link](https://google.com)
                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                ![A cute cat](https://www.baltana.com/files/wallpapers-2/Cute-Cat-Images-07756.jpg "cat")`;
    
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

const rules: RenderRules = {
  image: (node: ASTNode, children: any, parent: any, styles: any, index) => {
    const attributes = node.attributes || {};
    const src = attributes.src;
    if (!src) return null;
    return (
      <Image key={`${src}-${index}`} source={{ uri: src }} style={{ minWidth: 400, minHeight: 200, resizeMode:"contain" }}/>
    );
  },
};