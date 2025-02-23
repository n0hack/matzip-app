import { createDrawerNavigator } from '@react-navigation/drawer';
import FeedHomeScreen from '../../screens/feed/feed-home';
import CalendarHomeScreen from '../../screens/calendar/calendar-home';
import {
  MapStackNavigator,
  MapStackParamList,
} from '../stack/map-stack-navigator';
import { colors, mainNavigations } from '@/constants';
import { NavigatorScreenParams, RouteProp } from '@react-navigation/native';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import { Dimensions } from 'react-native';
import { CustomDrawerContent } from './custom-drawer-content';
export type MainDrawerParamList = {
  [mainNavigations.HOME]: NavigatorScreenParams<MapStackParamList>;
  [mainNavigations.FEED]: undefined;
  [mainNavigations.CALENDAR]: undefined;
};

const Drawer = createDrawerNavigator<MainDrawerParamList>();

function DrawerIcons({
  route,
  focused,
}: {
  route: RouteProp<MainDrawerParamList, keyof MainDrawerParamList>;
  focused: boolean;
}) {
  let iconName: any = '';

  switch (route.name) {
    case mainNavigations.HOME:
      iconName = 'location-on';
      break;
    case mainNavigations.FEED:
      iconName = 'book';
      break;
    case mainNavigations.CALENDAR:
      iconName = 'event-note';
      break;
  }

  return (
    <MaterialIcons
      name={iconName}
      size={18}
      color={focused ? colors.BLACK : colors.GRAY_500}
    />
  );
}

export function MainDrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawerContent}
      screenOptions={({ route }) => ({
        drawerType: 'front',
        headerShown: false,
        drawerIcon: ({ focused }) => DrawerIcons({ route, focused }),
        drawerStyle: {
          width: Dimensions.get('screen').width * 0.6,
          backgroundColor: colors.WHITE,
        },
        drawerActiveTintColor: colors.BLACK,
        drawerInactiveTintColor: colors.GRAY_500,
        drawerActiveBackgroundColor: colors.PINK_200,
        drawerInactiveBackgroundColor: colors.GRAY_100,
        drawerLabelStyle: {
          fontWeight: 600,
        },
      })}>
      <Drawer.Screen
        name={mainNavigations.HOME}
        component={MapStackNavigator}
        options={{ title: '홈', swipeEnabled: false }}
      />
      <Drawer.Screen
        name={mainNavigations.FEED}
        component={FeedHomeScreen}
        options={{ title: '피드' }}
      />
      <Drawer.Screen
        name={mainNavigations.CALENDAR}
        component={CalendarHomeScreen}
        options={{ title: '캘린더' }}
      />
    </Drawer.Navigator>
  );
}
