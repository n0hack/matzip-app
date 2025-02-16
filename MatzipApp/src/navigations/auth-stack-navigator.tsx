import {createStackNavigator} from '@react-navigation/stack';
import AuthHomeScreen from '../screens/AuthHome';
import LoginScreen from '../screens/Login';

const Stack = createStackNavigator({
  screens: {
    AuthHome: AuthHomeScreen,
    Login: LoginScreen,
  },
});

export function AuthStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="AuthHome">
      <Stack.Screen name="AuthHome" component={AuthHomeScreen} />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{title: '로그인 화면'}}
      />
    </Stack.Navigator>
  );
}
