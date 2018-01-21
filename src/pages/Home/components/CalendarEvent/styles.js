import { StyleSheet } from 'react-native';
import { metrics, colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darker,
  },

  content: {
    paddingVertical: metrics.miniMargin,
    paddingHorizontal: metrics.bigMargin,
    // backgroundColor: colors.danger,
  },

  week: {
    paddingVertical: metrics.tinyMargin,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default styles;
