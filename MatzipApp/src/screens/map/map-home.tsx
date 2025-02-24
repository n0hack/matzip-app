import React, { useEffect, useRef, useState } from 'react';
import {
  Alert,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useAuth } from '../../hooks/queries/useAuth';
import MapView, {
  Callout,
  LatLng,
  LongPressEvent,
  Marker,
} from 'react-native-maps';
import { alerts, colors, mapNavigations } from '@/constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  CompositeNavigationProp,
  useNavigation,
} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MapStackParamList } from '@/navigations/stack/map-stack-navigator';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { MainDrawerParamList } from '@/navigations/drawer/main-drawer-navigator';
import { useUserLocation } from '@/hooks/useUserLocation';
import { usePermission } from '@/hooks/usePermission';
import IonIcons from '@react-native-vector-icons/ionicons';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import { mapStyle } from '@/style/mapStyle';
import { CustomMarker } from '@/components/custom-marker';

type Navigation = CompositeNavigationProp<
  StackNavigationProp<MapStackParamList>,
  DrawerNavigationProp<MainDrawerParamList>
>;

export default function MapHomeScreen() {
  const inset = useSafeAreaInsets();
  const navigation = useNavigation<Navigation>();
  const { isLocationError, userLocation } = useUserLocation();
  const [selectLocation, setSelectLocation] = useState<LatLng | null>(null);
  usePermission('LOCATION');

  const mapRef = useRef<MapView>(null);

  const handlePresUserLocation = () => {
    if (isLocationError) {
      return;
    }
    mapRef.current?.animateToRegion({
      // latitude: userLocation.latitude,
      // longitude: userLocation.longitude,
      latitude: 37.5516032365118,
      longitude: 126.98989626020192,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  };

  const handlePressAddPost = () => {
    if (!selectLocation) {
      return Alert.alert(
        alerts.NOT_SELECTED_LOCATION.TITLE,
        alerts.NOT_SELECTED_LOCATION.DESCRIPTION,
      );
    }

    navigation.navigate(mapNavigations.ADD_POST, { location: selectLocation });
    setSelectLocation(null);
  };

  const handleLongPressMapView = (e: LongPressEvent) => {
    setSelectLocation(e.nativeEvent.coordinate);
  };

  return (
    <>
      <MapView
        ref={mapRef}
        style={styles.conatiner}
        provider="google"
        showsUserLocation
        followsUserLocation
        showsMyLocationButton={false}
        googleMapId="dab31a8a797ce984"
        onLongPress={handleLongPressMapView}>
        <CustomMarker
          coordinate={{
            latitude: 37.5516032365118,
            longitude: 126.98989626020192,
          }}
          color="BLUE"
          score={3}
        />
      </MapView>
      <Pressable
        style={[styles.drawerButton, { top: inset.top || 20 }]}
        onPress={() => navigation.openDrawer()}>
        <IonIcons name="menu" color={colors.WHITE} size={25} />
      </Pressable>
      <View style={styles.buttonList}>
        <Pressable style={styles.mapButton} onPress={handlePressAddPost}>
          <MaterialIcons name="add" color={colors.WHITE} size={25} />
        </Pressable>
        <Pressable style={styles.mapButton} onPress={handlePresUserLocation}>
          <MaterialIcons name="my-location" color={colors.WHITE} size={25} />
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  drawerButton: {
    position: 'absolute',
    top: 20,
    left: 0,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: colors.PINK_700,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    // shadowColor: colors.BLACK,
    // shadowOffset: { width: 1, height: 1 },
    // shadowOpacity: 0.5,
    // elevation: 4,
    filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.5))',
    boxShadow: Platform.OS === 'ios' ? '0 0 10px rgba(0, 0, 0, 0.5)' : '',
  },
  buttonList: {
    position: 'absolute',
    bottom: 30,
    right: 15,
  },
  mapButton: {
    backgroundColor: colors.PINK_700,
    marginVertical: 5,
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.5))',
    boxShadow: Platform.OS === 'ios' ? '0 0 10px rgba(0, 0, 0, 0.5)' : '',
  },
});
