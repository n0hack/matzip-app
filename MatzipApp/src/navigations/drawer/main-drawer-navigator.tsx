import {createDrawerNavigator} from '@react-navigation/drawer';
import MapHomeScreen from '../../screens/map-home';

const Drawer = createDrawerNavigator();

export function MainDrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MapHome" component={MapHomeScreen} />
    </Drawer.Navigator>
  );
}
