import {StyleSheet, Text, View} from 'react-native';

type CalendarHomeScreenProps = {};

export default function CalendarHomeScreen({}: CalendarHomeScreenProps) {
  return (
    <View style={styles.conatiner}>
      <Text>CalendarHomeScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {},
});
