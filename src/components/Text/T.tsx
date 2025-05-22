import {useTheme} from '@react-navigation/native';
import React, {ReactNode} from 'react';
import {StyleSheet, Text, TextStyle, TextProps} from 'react-native';
import {FONTS} from '../../theme/Fonts/Typography';
import {CustomTheme} from '../../theme/LightTheme';

interface NewTProps extends TextProps {
  children: ReactNode;
  color?: string;
  font?: TextStyle;
  maxLine?: number;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
}

const NewT: React.FC<NewTProps> = ({
  children,
  color,
  font,
  maxLine = 1,
  textAlign = 'left',
  ...rest
}) => {
  const theme = useTheme();
  const colors = (theme as CustomTheme).colors;

  const textColor = color || colors.neutral900;
  const textFont = font || FONTS.bodyRegular;

  const styles = StyleSheet.create({
    textColor: {
      color: textColor,
      textAlign: textAlign,
    },
  });

  const childrenText =
    typeof children === 'string' ? children.trim() : children;

  return (
    <Text
      style={[textFont, styles.textColor]}
      numberOfLines={maxLine !== 0 ? maxLine : undefined}
      {...rest}>
      {childrenText}
    </Text>
  );
};

export default NewT;
