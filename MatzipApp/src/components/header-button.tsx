import { colors } from '@/constants';
import { ReactNode } from 'react';
import { Pressable, PressableProps, StyleSheet, Text } from 'react-native';

interface HeaderButtonProps extends PressableProps {
  labelText?: string;
  icon?: ReactNode;
  hasError?: boolean;
}

export function HeaderButton({
  labelText,
  icon,
  hasError = false,
  ...rest
}: HeaderButtonProps) {
  return (
    <Pressable disabled={hasError} style={styles.conatiner} {...rest}>
      {!labelText && icon}
      {!icon && labelText && (
        <Text style={[styles.text, hasError && styles.textError]}>
          {labelText}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: 500,
    color: colors.PINK_700,
  },
  textError: {
    color: colors.GRAY_200,
  },
});
