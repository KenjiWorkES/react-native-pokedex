import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
} from '@expo-google-fonts/montserrat';
import { theme } from './themes/theme';

import { LoginScreen } from './screens/LoginScreen';
import { SignUpScreen } from './screens/SignUpScreen';
import { PokedexScreen } from './screens/PokedexScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Pokedex" component={PokedexScreen} />
    </Drawer.Navigator>
  );
};

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: theme.colors.whiteIce },
      }}
    >
      <Stack.Screen name="Home" component={DrawerNavigation} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignIn" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default function App() {
  let [fontsLoaded] = useFonts({
    regular: Montserrat_400Regular,
    medium: Montserrat_500Medium,
    semiBold: Montserrat_600SemiBold,
    bold: Montserrat_700Bold,
    extraBold: Montserrat_800ExtraBold,
    black: Montserrat_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </>
  );
}
