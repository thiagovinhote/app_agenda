import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'absolute',
    width: metrics.screenWidth,
    top: 0,
    padding: 22,
    justifyContent: 'center',
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
