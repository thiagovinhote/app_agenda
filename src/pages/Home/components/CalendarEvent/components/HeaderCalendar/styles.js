import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from 'styles';

const styles = StyleSheet.create({
  containerHeader: {
    paddingHorizontal: metrics.bigMargin,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: metrics.navBarHeight,
    // backgroundColor: colors.success,
  },

  title: {
    color: colors.white,
    fontSize: fonts.bMedium,
    fontWeight: 'bold',
  },

  button: {
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    color: colors.white,
  },

  week: {
    paddingTop: metrics.tinyMargin,
    paddingHorizontal: metrics.bigMargin,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  dayHeader: {
    color: colors.white,
    fontWeight: 'bold',
    marginTop: 2,
    marginBottom: 7,
    width: 32,
    textAlign: 'center',
  },
});

export default styles;
