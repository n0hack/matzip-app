import { createStackNavigator } from '@react-navigation/stack';
import { mapNavigations } from '../../constants';
import MapHomeScreen from '@/screens/map/map-home';
import AddPostScreen from '@/screens/map/add-post';
import { LatLng } from 'react-native-maps';

export type MapStackParamList = {
  [mapNavigations.MAP_HOME]: undefined;
  [mapNavigations.ADD_POST]: { location: LatLng };
};

const Stack = createStackNavigator<MapStackParamList>();

export function MapStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white',
        },
        headerStyle: {
          backgroundColor: 'white',
          shadowColor: 'gray',
        },
        headerTitleStyle: {
          fontSize: 15,
        },
        headerTintColor: 'black',
      }}>
      <Stack.Screen
        name={mapNavigations.MAP_HOME}
        component={MapHomeScreen}
        options={{
          headerShown: false,
          headerTitle: ' ',
        }}
      />
      <Stack.Screen
        name={mapNavigations.ADD_POST}
        component={AddPostScreen}
        options={{
          headerTitle: '장소 추가',
        }}
      />
    </Stack.Navigator>
  );
}
