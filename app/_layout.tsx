import { Poppins_200ExtraLight, useFonts } from '@expo-google-fonts/poppins';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { PaperProvider } from "react-native-paper";
import 'react-native-reanimated';

import { CustomThemeProvider } from '@/theme/custom-theme';
import { theme } from '@/theme/paper-theme';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary
} from 'expo-router';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Poppins_200ExtraLight
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}


function RootLayoutNav() {
  return (
    <PaperProvider theme={theme}>
      <CustomThemeProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index"/>
          <Stack.Screen name="view"/>
          <Stack.Screen name="edit"/>
          {/*<Stack.Screen name="entry" options={{ something: "something" }}/> or user router file name [id].tsx*/}
        </Stack>
      </CustomThemeProvider>
    </PaperProvider>
  );
}