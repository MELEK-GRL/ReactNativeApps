import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TextStyle, TextProps, StyleProp} from 'react-native';
import {FONTS} from '../../theme/Fonts/Typography';
import {CustomTheme} from '../../theme/LightTheme';

interface TProps extends TextProps {
  children?: React.ReactNode;
  color?: string;
  font?: TextStyle;
  maxLine?: number;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  style?: StyleProp<TextStyle>;
  size?: number;
}

const T: React.FC<TProps> = ({
  children,
  color,
  font,
  maxLine = 1,
  textAlign = 'left',
  style,
  size,
  ...rest
}) => {
  const theme = useTheme();
  const colors = (theme as CustomTheme).colors;

  const textColor = color || colors.neutral900;
  const textFont = font || FONTS.bodyRegular;
  const fontSize = size || undefined;

  const styles = StyleSheet.create({
    textColor: {
      color: textColor,
      textAlign: textAlign,
      fontSize: fontSize,
    },
  });

  const childrenText =
    typeof children === 'string' ? children.trim() : children;

  return (
    <Text
      style={[textFont, styles.textColor, style]}
      numberOfLines={maxLine !== 0 ? maxLine : undefined}
      {...rest}>
      {childrenText}
    </Text>
  );
};

export default T;
