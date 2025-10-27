import { CustomTheme, useCustomTheme } from "@/theme/custom-theme";
import { Paths } from "expo-file-system";
import { useState } from "react";
import { Image, Pressable } from "react-native";
import Markdown, { ASTNode, RenderRules } from "react-native-markdown-display";
import { Modal, Portal } from "react-native-paper";

type Props = {
    uid: string,
    content: string,
}

const MarkdownView = (props: Props) => {
    const theme = useCustomTheme();
    const styles = makeStyles(theme);

    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [modalImageSource, setModalImageSource] = useState<string>();

    const rules: RenderRules = {
        image: (node: ASTNode, children, parent, styles, index) => {
            const attributes = node.attributes || {};
            let src = attributes.src;
            if (!src) return null;
            if (!src.startsWith("http")) {
                src = Paths.join(Paths.document, "data", props.uid, src);
            }
            return (
                <Pressable key={`${src}-${index}`} onPress={() => { setModalImageSource(src); setModalVisible(true) }} style={{ width: "100%" }}>
                    <Image source={{ uri: src }} style={{ width: "100%", minHeight: 200, resizeMode: "cover", borderRadius: 20 }}/>
                </Pressable>
            );
        },
    };

    return (
        <>
            <Markdown style={styles.markdown} rules={rules}>
                {props.content}
            </Markdown>
            {
                modalVisible &&
                <Portal>
                    <Modal visible={modalVisible} onDismiss={() => setModalVisible(false)} style={{ width: "100%", height: "100%", backgroundColor: "black" }}>
                        <Image source={{ uri: modalImageSource }} style={{ width: "100%", height: "100%", resizeMode: "contain" }}/>
                        <Pressable onPress={() => setModalVisible(false)} style={{ position: "absolute", top: 0, right: 0, }}><Image source={require("../assets/images/delete.png")}/></Pressable>
                    </Modal>
                </Portal>
            }
        </>
    );
}

const makeStyles = (theme: CustomTheme) => {
    return {
        markdown: {
            body: {
                fontFamily: theme.font.family,
                color: theme.colors.text,
                fontSize: theme.font.size.s4,
                marginHorizontal: 4,
                padding: 0,
            }
        },
        close: {
            position: "absolute",
            top: 0,
            right: 0,
        },
    };
}

export default MarkdownView;