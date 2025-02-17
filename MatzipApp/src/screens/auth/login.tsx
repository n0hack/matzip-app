import {SafeAreaView, StyleSheet, View} from 'react-native';
import {InputField} from '../../components/input-field';
import {useState} from 'react';

type LoginScreenProps = {};

export default function LoginScreen({}: LoginScreenProps) {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  const handleChangeValues = (key: keyof typeof values) => (text: string) => {
    setValues({...values, [key]: text});
  };

  const handleBlur = (key: keyof typeof values) => () => {
    setTouched({
      ...touched,
      [key]: true,
    });
  };

  return (
    <SafeAreaView style={styles.conatiner}>
      <View style={styles.inputContainer}>
        <InputField
          placeholder="이메일"
          error="이메일을 입력하세요"
          inputMode="email"
          value={values.email}
          onChangeText={handleChangeValues('email')}
          onBlur={handleBlur('email')}
          touched={touched.email}
        />
        <InputField
          placeholder="비밀번호"
          error="비밀번호를 입력하세요"
          secureTextEntry
          value={values.password}
          onChangeText={handleChangeValues('password')}
          onBlur={handleBlur('password')}
          touched={touched.password}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    margin: 30,
  },
  inputContainer: {
    gap: 20,
  },
});
