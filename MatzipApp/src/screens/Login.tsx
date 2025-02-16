import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';

type LoginScreenProps = {};

export default function LoginScreen({}: LoginScreenProps) {
  return (
    <SafeAreaView>
      <View style={styles.conatiner}>
        <Text>로그인 스크린</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  conatiner: {},
});
