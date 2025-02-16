import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';

type AuthHomeScreenProps = {};

export default function AuthHomeScreen({navigation}: AuthHomeScreenProps) {
  return (
    <SafeAreaView>
      <View style={styles.conatiner}>
        <Button
          title="로그인 화면으로 이동"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  conatiner: {},
});
