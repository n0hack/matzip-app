import Geolocation from '@react-native-community/geolocation';
import { useEffect, useState } from 'react';
import { LatLng } from 'react-native-maps';
import { useAppState } from './useAppState';

export function useUserLocation() {
  const [userLocation, setUserLocation] = useState<LatLng>({
    latitude: 0,
    longitude: 0,
  });
  const [isLocationError, setIsLocationError] = useState(false);
  const { isComeback } = useAppState();

  useEffect(() => {
    Geolocation.getCurrentPosition(
      info => {
        setUserLocation({
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
        });
        setIsLocationError(false);
      },
      () => {
        setIsLocationError(true);
      },
      { enableHighAccuracy: true },
    );
  }, [isComeback]);

  return {
    userLocation,
    isLocationError,
  };
}
