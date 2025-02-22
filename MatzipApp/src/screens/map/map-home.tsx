import React, { useEffect, useRef, useState } from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { useAuth } from '../../hooks/queries/useAuth';
import MapView, { LatLng } from 'react-native-maps';
import { colors } from '@/constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  CompositeNavigationProp,
  useNavigation,
} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MapStackParamList } from '@/navigations/stack/map-stack-navigator';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { MainDrawerParamList } from '@/navigations/drawer/main-drawer-navigator';
import GeoLocation from '@react-native-community/geolocation';
import { useUserLocation } from '@/hooks/useUserLocation';

type Navigation = CompositeNavigationProp<
  StackNavigationProp<MapStackParamList>,
  DrawerNavigationProp<MainDrawerParamList>
>;

export default function MapHomeScreen() {
  const inset = useSafeAreaInsets();
  const { logoutMutation } = useAuth();
  const navigation = useNavigation<Navigation>();
  const { isLocationError, userLocation } = useUserLocation();

  const mapRef = useRef<MapView>(null);

  const handleLogout = () => {
    logoutMutation.mutate({});
  };

  const handlePresUserLocation = () => {
    if (isLocationError) {
      return;
    }
    mapRef.current?.animateToRegion({
      latitude: userLocation.latitude,
      longitude: userLocation.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
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
      />
      <Pressable
        style={[styles.drawerButton, { top: inset.top || 20 }]}
        onPress={() => navigation.openDrawer()}>
        <Text>서랍</Text>
      </Pressable>
      <View style={styles.buttonList}>
        <Pressable style={styles.mapButton} onPress={handlePresUserLocation}>
          <Text>내 위치</Text>
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
