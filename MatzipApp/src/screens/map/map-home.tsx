import { Button, StyleSheet, Text, View } from 'react-native';
import { useAuth } from '../../hooks/queries/useAuth';

type MapHomeScreenProps = {};

export default function MapHomeScreen({}: MapHomeScreenProps) {
  const { logoutMutation } = useAuth();

  return (
    <View style={styles.conatiner}>
      <Text>MapHomeScreen</Text>
      <Button title="로그아웃" onPress={() => logoutMutation.mutate({})} />
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {},
});
