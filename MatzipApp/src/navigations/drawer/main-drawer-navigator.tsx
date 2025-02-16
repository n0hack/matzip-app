import {createDrawerNavigator} from '@react-navigation/drawer';
import MapHomeScreen from '../../screens/map/map-home';
import FeedHomeScreen from '../../screens/feed/feed-home';
import CalendarHomeScreen from '../../screens/calendar/calendar-home';

const Drawer = createDrawerNavigator();

export function MainDrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MapHome" component={MapHomeScreen} />
      <Drawer.Screen name="FeedHome" component={FeedHomeScreen} />
      <Drawer.Screen name="CalendarHome" component={CalendarHomeScreen} />
    </Drawer.Navigator>
  );
}
