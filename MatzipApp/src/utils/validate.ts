type UserInformation = {
  email: string;
  password: string;
};

function validateUser(values: UserInformation) {
  const error = {
    email: '',
    password: '',
  };

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    error.email = '올바른 이메일 형식이 아닙니다.';
  }

  if (!(values.password.length >= 8 && values.password.length < 20)) {
    error.password = '비밀번호는 8~20자 사이로 입력해 주세요.';
  }

  if (!values.email) {
    error.email = '이메일을 입력해 주세요.';
  }

  if (!values.password) {
    error.password = '비밀번호를 입력해 주세요.';
  }

  return error;
}

export function validateLogin(values: UserInformation) {
  return validateUser(values);
}

export function validateSignup(
  values: UserInformation & { passwordConfirm: string },
) {
  const error = validateUser(values);
  const signupErrors = { ...error, passwordConfirm: '' };

  if (values.password !== values.passwordConfirm) {
    signupErrors.passwordConfirm = '비밀번호가 일치하지 않습니다.';
  }

  return signupErrors;
}

export function validateAddPost(values: { title: string }) {
  const errors = {
    title: '',
    description: '',
  };

  if (values.title.trim() === '') {
    errors.title = '제목은 1~30자 이내로 입력해 주세요.';
  }

  return errors;
}
