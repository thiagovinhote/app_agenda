import { StyleSheet, Platform } from 'react-native';
import { metrics, colors } from 'styles';

export default function styleConstructor() {
  return StyleSheet.create({
    base: {
      width: 32,
      height: 32,
      // margin: metrics.tinyMargin,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 14,
      fontWeight: '400',
      color: colors.white,
      backgroundColor: colors.clear,
      letterSpacing: 1.5,
    },
    alignedText: {
      marginTop: Platform.OS === 'android' ? 4 : 6,
    },
    selected: {
      backgroundColor: colors.success,
      borderRadius: 16,
    },
    todayText: {
      color: colors.white,
    },
    today: {
      backgroundColor: colors.regular,
      borderRadius: 16,
    },
    selectedText: {
      color: colors.white,
    },
    disabledText: {
      color: colors.regular,
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
