import { SafeAreaView, StyleSheet, TextInput, View } from 'react-native';
import { InputField } from '../../components/input-field';
import { CustomButton } from '../../components/custom-button';
import { useForm } from '../../hooks/useForm';
import { validateLogin } from '../../utils';
import { useRef } from 'react';
import { useAuth } from '../../hooks/queries/useAuth';

type LoginScreenProps = {};

export default function LoginScreen({}: LoginScreenProps) {
  const passwordRef = useRef<TextInput>(null);
  const { loginMutation } = useAuth();
  const login = useForm({
    initialValues: { email: '', password: '' },
    validate: validateLogin,
  });

  const handleSubmit = () => {
    console.log(login.values);
    loginMutation.mutate(login.values);
  };

  return (
    <SafeAreaView style={styles.conatiner}>
      <View style={styles.inputContainer}>
        <InputField
          placeholder="이메일"
          error={login.errors.email}
          inputMode="email"
          touched={login.touched.email}
          returnKeyType="next"
          submitBehavior="submit"
          onSubmitEditing={() => passwordRef.current?.focus()}
          {...login.getTextInputProps('email')}
        />
        <InputField
          ref={passwordRef}
          placeholder="비밀번호"
          error={login.errors.password}
          secureTextEntry
          touched={login.touched.password}
          submitBehavior="submit"
          returnKeyType="join"
          onSubmitEditing={handleSubmit}
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
