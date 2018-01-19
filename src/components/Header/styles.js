import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    paddingTop: metrics.statusBarHeight,
    paddingHorizontal: metrics.baseMargin,
    height: metrics.statusBarHeight + metrics.navBarHeight,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.background,
  },

  title: {
    color: colors.white,
    fontSize: fonts.medium,
    fontWeight: '900',
    letterSpacing: 1,
  },

  button: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    color: colors.white,
  },
});

export default styles;
