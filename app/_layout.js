import { Stack } from 'expo-router';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync(); // this makes the spash sscreen to remain visible untill hide sync is called. 

const Layout = () => {
    const [fontsLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'), // Loading the fonte from the assets file
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    })

    const onLayoutRootView = useCallback(async () => {
      if(fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }, [fontsLoaded])

       if(!fontsLoaded) return null;

    return <Stack onLayout={onLayoutRootView}/>;
}

export default Layout;