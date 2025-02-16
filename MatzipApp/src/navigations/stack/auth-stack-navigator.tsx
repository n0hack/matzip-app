import {createStackNavigator} from '@react-navigation/stack';
import AuthHomeScreen from '../../screens/auth-home';
import LoginScreen from '../../screens/login';
import {authNavigations} from '../../constants';

export type AuthStackParamList = {
  [authNavigations.AUTH_HOME]: undefined;
  [authNavigations.LOGIN]: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

export function AuthStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={authNavigations.AUTH_HOME}
        component={AuthHomeScreen}
        options={{title: '홈 화면'}}
      />
      <Stack.Screen
        name={authNavigations.LOGIN}
        component={LoginScreen}
        options={{title: '로그인 화면'}}
      />
    </Stack.Navigator>
  );
}
