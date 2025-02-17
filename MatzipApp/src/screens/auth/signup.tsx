import { SafeAreaView, StyleSheet, View } from 'react-native';
import { InputField } from '../../components/input-field';
import { useForm } from '../../hooks/useForm';
import { CustomButton } from '../../components/custom-button';
import { validateSignup } from '../../utils';

type SignupScreenProps = {};

export default function SignupScreen({}: SignupScreenProps) {
  const signup = useForm({
    initialValues: {
      email: '',
      password: '',
      passwordConfirm: '',
    },
    validate: validateSignup,
  });

  const handleSubmit = () => {
    console.log(signup.values);
  };

  return (
    <SafeAreaView style={styles.conatiner}>
      <View style={styles.inputConatiner}>
        <InputField
          placeholder="이메일"
          error={signup.errors.email}
          inputMode="email"
          touched={signup.touched.email}
          {...signup.getTextInputProps('email')}
        />
        <InputField
          placeholder="비밀번호"
          error={signup.errors.password}
          secureTextEntry
          touched={signup.touched.password}
          {...signup.getTextInputProps('password')}
        />
        <InputField
          placeholder="비밀번호 확인"
          error={signup.errors.passwordConfirm}
          secureTextEntry
          touched={signup.touched.passwordConfirm}
          {...signup.getTextInputProps('passwordConfirm')}
        />
      </View>
      <CustomButton
        label="회원가입"
        variant="filled"
        size="large"
        onPress={handleSubmit}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  conatiner: { flex: 1, margin: 30 },
  inputConatiner: { gap: 20, marginBottom: 30 },
});
