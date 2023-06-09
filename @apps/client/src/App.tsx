import { ThemeProvider } from '@emotion/react';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import 'react-native-gesture-handler';

import { NavigationProviderWithAnalytics } from '@/common/container';
import { useDarkMode } from '@/common/hooks/useDarkMode';
import { getTheme } from '@/common/styles';

import { useAuth } from './features/auth';
import { LoadingContainer } from './features/ui';
import { BottomNavigator } from './navigators';
import { AuthScreen } from './screens';

void SplashScreen.preventAutoHideAsync();

export default function App() {
  const { isLoading, isDark } = useDarkMode();
  const { isInit, isAuth } = useAuth();

  useEffect(() => {
    if (!isLoading && isInit) {
      void SplashScreen.hideAsync();
    }
  }, [isLoading, isInit]);

  return (
    <NavigationProviderWithAnalytics>
      <ThemeProvider theme={getTheme({ isDark })}>
        {isAuth ? <BottomNavigator /> : <AuthScreen />}
        <LoadingContainer />
      </ThemeProvider>
    </NavigationProviderWithAnalytics>
  );
}
