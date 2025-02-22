import { createStackNavigator } from '@react-navigation/stack';
import { mapNavigations } from '../../constants';
import MapHomeScreen from '@/screens/map/map-home';

export type MapStackParamList = {
  [mapNavigations.MAP_HOME]: undefined;
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
    </Stack.Navigator>
  );
}
