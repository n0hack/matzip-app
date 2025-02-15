import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.conatiner}>
        <Text>App</Text>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  conatiner: {},
});
