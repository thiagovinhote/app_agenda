import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from 'styles';

const height = metrics.statusBarHeight + metrics.navBarHeight;

const styles = StyleSheet.create({
  container: {
    // paddingTop: metrics.statusBarHeight,
    // paddingHorizontal: metrics.baseMargin,
    height,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.background,
    overflow: 'hidden',
  },

  title: {
    color: colors.white,
    fontSize: fonts.medium,
    fontWeight: '900',
    letterSpacing: 1,
  },

  contentButton: {
    width: 70,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    width: height,
    height,
    borderRadius: height / 2,
    overflow: 'hidden',
  },

  left: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    top: height / -3.8,
    left: height / -3.5,
  },

  right: {
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    top: height / -3.8,
    right: height / -3.5,
  },

  icon: {
    color: colors.white,
  },
});

export default styles;
