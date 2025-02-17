import {useEffect, useState} from 'react';

type UseFormProps<T> = {
  initialValues: T;
  validate: (values: T) => Record<keyof T, string>;
};

export function useForm<T>({initialValues, validate}: UseFormProps<T>) {
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState<Record<keyof T, boolean>>(
    {} as Record<keyof T, boolean>,
  );
  const [errors, setErrors] = useState<Record<keyof T, string>>(
    {} as Record<keyof T, string>,
  );

  const handleChangeValues = (key: keyof T) => (text: string) => {
    setValues({...values, [key]: text});
  };

  const handleBlur = (key: keyof T) => () => {
    setTouched({
      ...touched,
      [key]: true,
    });
  };

  const getTextInputProps = (key: keyof T) => {
    const value = values[key];
    const onChangeText = handleChangeValues(key);
    const onBlur = handleBlur(key);

    return {value, onChangeText, onBlur};
  };

  useEffect(() => {
    const newErrors = validate(values);
    setErrors(newErrors);
  }, [validate, values]);

  return {values, touched, errors, getTextInputProps};
}
