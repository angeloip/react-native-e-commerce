import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import BottomTabNavigation from './src/navigation/BottomTabNavigation';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require('./assets/fonts/Poppins-Regular.ttf'),
    bold: require('./assets/fonts/Poppins-Bold.ttf'),
    semiBold: require('./assets/fonts/Poppins-SemiBold.ttf'),
    medium: require('./assets/fonts/Poppins-Medium.ttf'),
    light: require('./assets/fonts/Poppins-Light.ttf'),
    extraBold: require('./assets/fonts/Poppins-ExtraBold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  } 



  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Botton Navigation" component={BottomTabNavigation} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle:{
    fontFamily: 'regular',
    fontSize: 20,
    color: 'red'
  }
});
