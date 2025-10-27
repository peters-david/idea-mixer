import { Poppins_200ExtraLight, Poppins_400Regular, Poppins_700Bold, useFonts } from '@expo-google-fonts/poppins';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { PaperProvider } from "react-native-paper";
import 'react-native-reanimated';

import { CustomThemeProvider } from '@/theme/custom-theme';
import { theme } from '@/theme/paper-theme';

export { ErrorBoundary } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Poppins_200ExtraLight,
    Poppins_400Regular,
    Poppins_700Bold,
  });

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
        <Stack screenOptions={{ headerShown: false, animation: "none" }}>
          <Stack.Screen name="index"/>
          <Stack.Screen name="view"/>
          <Stack.Screen name="edit"/>
        </Stack>
      </CustomThemeProvider>
    </PaperProvider>
  );
}