import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from 'styles';

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.success,
  },

  body: {
    flex: 1,
  },

  container: {
    height: metrics.navBarHeight + metrics.statusBarHeight,
    flexDirection: 'row',
    position: 'absolute',
    width: metrics.screenWidth,
    top: 0,
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },

  success: {
    backgroundColor: colors.success,
  },

  danger: {
    backgroundColor: colors.danger,
  },

  icon: {
    color: colors.white,
  },

  text: {
    paddingHorizontal: 10,
    color: colors.white,
    fontWeight: 'bold',
    fontSize: fonts.medium,
  },
});

export default styles;
