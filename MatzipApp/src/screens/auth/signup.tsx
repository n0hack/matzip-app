import { SafeAreaView, StyleSheet, TextInput, View } from 'react-native';
import { InputField } from '@/components/input-field';
import { useForm } from '@/hooks/useForm';
import { CustomButton } from '@/components/custom-button';
import { validateSignup } from '@/utils';
import { useRef } from 'react';
import { useAuth } from '@/hooks/queries/useAuth';

type SignupScreenProps = {};

export default function SignupScreen({}: SignupScreenProps) {
  const passwordRef = useRef<TextInput>(null);
  const passwordConfirmRef = useRef<TextInput>(null);
  const { signupMutation, loginMutation } = useAuth();

  const signup = useForm({
    initialValues: {
      email: '',
      password: '',
      passwordConfirm: '',
    },
    validate: validateSignup,
  });

  const handleSubmit = () => {
    console.log(signup.values, '머임?');
    const { email, password } = signup.values;
    signupMutation.mutate(signup.values, {
      onSuccess: () => {
        console.log('signup success');
        loginMutation.mutate({ email, password });
      },
      onError: () => {
        console.log('ㅇ러');
      },
    });
  };

  return (
    <SafeAreaView style={styles.conatiner}>
      <View style={styles.inputConatiner}>
        <InputField
          placeholder="이메일"
          error={signup.errors.email}
          inputMode="email"
          touched={signup.touched.email}
          returnKeyType="next"
          submitBehavior="submit"
          onSubmitEditing={() => passwordRef.current?.focus()}
          {...signup.getTextInputProps('email')}
        />
        <InputField
          ref={passwordRef}
          placeholder="비밀번호"
          error={signup.errors.password}
          secureTextEntry
          touched={signup.touched.password}
          returnKeyType="next"
          submitBehavior="submit"
          textContentType="oneTimeCode"
          onSubmitEditing={() => passwordConfirmRef.current?.focus()}
          {...signup.getTextInputProps('password')}
        />
        <InputField
          ref={passwordConfirmRef}
          placeholder="비밀번호 확인"
          error={signup.errors.passwordConfirm}
          secureTextEntry
          touched={signup.touched.passwordConfirm}
          textContentType="oneTimeCode"
          onSubmitEditing={handleSubmit}
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
