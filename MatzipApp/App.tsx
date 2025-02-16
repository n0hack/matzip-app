import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';
import AuthHomeScreen from './src/screens/AuthHome';
import {AuthStackNavigator} from './src/navigations/auth-stack-navigator';

export default function App() {
  return (
    <NavigationContainer>
      <AuthStackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  conatiner: {},
});
