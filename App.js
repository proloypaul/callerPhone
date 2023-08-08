import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text} from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home';
import CallWindow from './src/screens/callWindow';
import Recent from './src/screens/recent';
import Favourite from './src/screens/favourite';


export default function App() {

  const [loaded] = useFonts({
    Antonio: require('./assets/fonts/Antonio-Regular.ttf'),
    Spartan: require('./assets/fonts/Spartan-Regular.ttf'),
    SpartanBold: require('./assets/fonts/Spartan-Bold.ttf'),
  })

  if (!loaded) {
    return <Text>Text Font Loading....</Text>
  }

  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="CallWindow" component={CallWindow} />
          <Stack.Screen name="Recent" component={Recent} />
          <Stack.Screen name="Favourite" component={Favourite} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffuf',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
  },
});
