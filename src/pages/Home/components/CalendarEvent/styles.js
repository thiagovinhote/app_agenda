import { StyleSheet } from 'react-native';
import { general, metrics, colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderBottomLeftRadius: metrics.baseRadius,
    borderBottomRightRadius: metrics.baseRadius,
    ...general.shadow,
    shadowOffset: { width: 0, height: 3 },
    zIndex: 1,
  },

  content: {
    paddingVertical: metrics.miniMargin,
    paddingHorizontal: metrics.smallMargin,
    // backgroundColor: colors.danger,
  },

  week: {
    paddingVertical: metrics.tinyMargin,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default styles;
