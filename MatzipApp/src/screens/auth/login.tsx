import { SafeAreaView, StyleSheet, View } from 'react-native';
import { InputField } from '../../components/input-field';
import { CustomButton } from '../../components/custom-button';
import { useForm } from '../../hooks/useForm';
import { validateLogin } from '../../utils';

type LoginScreenProps = {};

export default function LoginScreen({}: LoginScreenProps) {
  const login = useForm({
    initialValues: { email: '', password: '' },
    validate: validateLogin,
  });

  const handleSubmit = () => {
    console.log(login.values);
  };

  return (
    <SafeAreaView style={styles.conatiner}>
      <View style={styles.inputContainer}>
        <InputField
          placeholder="이메일"
          error={login.errors.email}
          inputMode="email"
          touched={login.touched.email}
          {...login.getTextInputProps('email')}
        />
        <InputField
          placeholder="비밀번호"
          error={login.errors.password}
          secureTextEntry
          touched={login.touched.password}
          {...login.getTextInputProps('password')}
        />
      </View>
      <CustomButton
        label="로그인"
        variant="filled"
        size="large"
        onPress={handleSubmit}
      />
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
    marginBottom: 30,
  },
});
