type UserInfomation = {
  email: string;
  password: string;
};

export function validateLogin(values: UserInfomation) {
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
