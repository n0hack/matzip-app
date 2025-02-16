import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from './src/navigations/root/root-navigator';

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
