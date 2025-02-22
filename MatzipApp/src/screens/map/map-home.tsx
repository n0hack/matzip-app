import { SafeAreaView, StyleSheet } from 'react-native';
import { useAuth } from '../../hooks/queries/useAuth';
import MapView from 'react-native-maps';

export default function MapHomeScreen() {
  const { logoutMutation } = useAuth();

  const handleLogout = () => {
    logoutMutation.mutate({});
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MapView
        style={styles.conatiner}
        provider="google"
        showsUserLocation
        followsUserLocation
        showsMyLocationButton={true}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
});
