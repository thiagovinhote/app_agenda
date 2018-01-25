import { StyleSheet, Platform } from 'react-native';
import { general, metrics, colors } from 'styles';

export default function styleConstructor() {
  return StyleSheet.create({
    base: {
      width: 36,
      height: 36,
      // margin: metrics.tinyMargin,
      alignItems: 'center',
      justifyContent: 'center',
    },

    text: {
      fontSize: 14,
      fontWeight: '400',
      color: colors.dark,
      backgroundColor: colors.clear,
      letterSpacing: 1.5,
    },

    alignedText: {
      marginTop: Platform.OS === 'android' ? 4 : 6,
    },

    selected: {
      backgroundColor: colors.purpleLighter,
      borderRadius: 18,
      ...general.shadow,
      shadowRadius: 4,
    },

    todayText: {
      color: colors.white,
    },

    today: {
      backgroundColor: colors.pinkLighter,
      borderRadius: 18,
    },

    selectedText: {
      color: colors.white,
    },

    disabledText: {
      color: colors.grayLighter,
    },

    dot: {
      width: 4,
      height: 4,
      marginTop: 1,
      borderRadius: 2,
      opacity: 0,
    },

    visibleDot: {
      opacity: 1,
      backgroundColor: colors.info,
    },

    selectedDot: {
      backgroundColor: colors.darker,
    },

  });
}
