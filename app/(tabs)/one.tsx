import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';

export default function TabOneScreen() {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: theme.colors.primary,
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator}/>
    </View>
  );
}

