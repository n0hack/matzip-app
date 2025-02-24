import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import { colors } from '../constants';
import { forwardRef, ReactNode, useRef } from 'react';
import { mergeRefs } from '../utils';

interface InputFieldProps extends TextInputProps {
  disabled?: boolean;
  error?: string;
  touched?: boolean;
  icon?: ReactNode;
}

const devicedHeight = Dimensions.get('screen').height;

export const InputField = forwardRef<TextInput, InputFieldProps>(
  ({ error, disabled = false, touched = false, icon = null, ...rest }, ref) => {
    const innerRef = useRef<TextInput>(null);

    const handlePressInput = () => {
      innerRef.current?.focus();
    };

    return (
      <Pressable onPress={handlePressInput}>
        <View
          style={[
            styles.conatiner,
            disabled && styles.disabled,
            rest.multiline && styles.multiline,
            touched && Boolean(error) && styles.inputError,
          ]}>
          <View style={Boolean(icon) && styles.innerContainer}>
            {icon}
            <TextInput
              ref={ref ? mergeRefs(innerRef, ref) : innerRef}
              editable={!disabled}
              placeholderTextColor={colors.GRAY_500}
              style={[styles.input, disabled && styles.disabled]}
              autoCapitalize="none"
              spellCheck={false}
              autoCorrect={false}
              {...rest}
            />
          </View>
          {touched && Boolean(error) && (
            <Text style={styles.error}>{error}</Text>
          )}
        </View>
      </Pressable>
    );
  },
);

const styles = StyleSheet.create({
  conatiner: {
    borderWidth: 1,
    borderColor: colors.GRAY_200,
    padding: devicedHeight > 700 ? 15 : 10,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  multiline: {
    paddingBottom: devicedHeight > 700 ? 45 : 30,
  },
  input: {
    fontSize: 16,
    color: colors.BLACK,
    padding: 0,
  },
  disabled: {
    backgroundColor: colors.GRAY_200,
    color: colors.GRAY_700,
  },
  inputError: {
    borderWidth: 1,
    borderColor: colors.RED_300,
  },
  error: {
    color: colors.RED_500,
    fontSize: 12,
    paddingTop: 5,
  },
});
