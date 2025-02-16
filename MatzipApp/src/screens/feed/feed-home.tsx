import {StyleSheet, Text, View} from 'react-native';

type FeedHomeScreenProps = {};

export default function FeedHomeScreen({}: FeedHomeScreenProps) {
  return (
    <View style={styles.conatiner}>
      <Text>FeedHomeScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {},
});
