import fonts from './Fonts';
import { Dimensions, TextStyle } from 'react-native';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const horizontalScale = (size: number) => (width / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) =>
    size + (horizontalScale(size) - size) * factor;

const h14px = verticalScale(14);
const h18px = verticalScale(18);
const h20px = verticalScale(20);
const h24px = verticalScale(24);

const fs12px = moderateScale(12);
const fs14px = moderateScale(14);
const fs16px = moderateScale(16);
const fs18px = moderateScale(18);
const fs20px = moderateScale(20);

function calculationLetterSpacing(tempSize: number, tempPercentage: number): number {
    return (tempSize * tempPercentage) / 100;
}

type FontStyle = TextStyle;

export const FONTS: Record<string, FontStyle> = {
    headerRobotoBold: {
        fontFamily: fonts.robotoBold,
        fontSize: fs18px,
        fontWeight: '500',
        lineHeight: h24px,
        letterSpacing: calculationLetterSpacing(fs20px, -0.45),
    },

    titleRegular: {
        fontFamily: fonts.robotoRegular,
        fontSize: fs20px,
        fontWeight: '400',
        lineHeight: h24px,
        letterSpacing: calculationLetterSpacing(fs20px, -0.45),
    },
    titleMedium: {
        fontFamily: fonts.robotoMedium,
        fontSize: fs20px,
        fontWeight: '500',
        lineHeight: h24px,
        letterSpacing: calculationLetterSpacing(fs20px, -0.45),
    },
    titleSemibold: {
        fontFamily: fonts.robotoBold,
        fontSize: fs20px,
        fontWeight: '600',
        lineHeight: h24px,
        letterSpacing: calculationLetterSpacing(fs20px, -0.45),
    },
    titleBold: {
        fontFamily: fonts.robotoBold,
        fontSize: fs20px,
        fontWeight: '700',
        lineHeight: h24px,
        letterSpacing: calculationLetterSpacing(fs20px, -0.45),
    },

    labelRegular: {
        fontFamily: fonts.robotoRegular,
        fontSize: fs16px,
        fontWeight: '400',
        lineHeight: h20px,
        letterSpacing: calculationLetterSpacing(fs16px, -0.31),
    },
    labelMedium: {
        fontFamily: fonts.robotoMedium,
        fontSize: fs16px,
        fontWeight: '500',
        lineHeight: h20px,
        letterSpacing: calculationLetterSpacing(fs16px, -0.31),
    },
    labelSemibold: {
        fontFamily: fonts.robotoBold,
        fontSize: fs16px,
        fontWeight: '600',
        lineHeight: h20px,
        letterSpacing: calculationLetterSpacing(fs16px, -0.31),
    },
    labelBold: {
        fontFamily: fonts.robotoBold,
        fontSize: fs16px,
        fontWeight: '700',
        lineHeight: h20px,
        letterSpacing: calculationLetterSpacing(fs16px, -0.31),
    },

    bodyRegular: {
        fontFamily: fonts.robotoRegular,
        fontSize: fs14px,
        fontWeight: '400',
        lineHeight: h18px,
        letterSpacing: calculationLetterSpacing(fs14px, -0.15),
    },
    bodyMedium: {
        fontFamily: fonts.robotoMedium,
        fontSize: fs14px,
        fontWeight: '500',
        lineHeight: h18px,
        letterSpacing: calculationLetterSpacing(fs14px, -0.15),
    },
    bodySemibold: {
        fontFamily: fonts.robotoBold,
        fontSize: fs14px,
        fontWeight: '600',
        lineHeight: h18px,
        letterSpacing: calculationLetterSpacing(fs14px, -0.15),
    },
    bodyBold: {
        fontFamily: fonts.robotoBold,
        fontSize: fs14px,
        fontWeight: '700',
        lineHeight: h18px,
        letterSpacing: calculationLetterSpacing(fs14px, -0.15),
    },

    smallRegular: {
        fontFamily: fonts.robotoRegular,
        fontSize: fs12px,
        fontWeight: '400',
        lineHeight: h14px,
        letterSpacing: calculationLetterSpacing(fs12px, 0),
    },
    smallMedium: {
        fontFamily: fonts.robotoMedium,
        fontSize: fs12px,
        fontWeight: '500',
        lineHeight: h14px,
        letterSpacing: calculationLetterSpacing(fs12px, 0),
    },
    smallSemibold: {
        fontFamily: fonts.robotoBold,
        fontSize: fs12px,
        fontWeight: '600',
        lineHeight: h14px,
        letterSpacing: calculationLetterSpacing(fs12px, 0),
    },
    smallBold: {
        fontFamily: fonts.robotoBold,
        fontSize: fs12px,
        fontWeight: '700',
        lineHeight: h14px,
        letterSpacing: calculationLetterSpacing(fs12px, 0),
    },
};
