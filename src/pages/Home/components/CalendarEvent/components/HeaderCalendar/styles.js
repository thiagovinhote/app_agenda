import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from 'styles';

const styles = StyleSheet.create({
  containerHeader: {
    paddingHorizontal: metrics.smallMargin,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: metrics.navBarHeight,
    // backgroundColor: colors.success,
  },

  title: {
    color: colors.dark,
    fontSize: fonts.big,
    fontWeight: 'bold',
  },

  button: {
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    color: colors.grayLighter,
    fontSize: 35,
  },

  week: {
    paddingTop: metrics.tinyMargin,
    paddingBottom: metrics.tinyMargin,
    paddingHorizontal: metrics.smallMargin,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  dayHeader: {
    color: colors.dark,
    fontWeight: 'bold',
    marginTop: 2,
    marginBottom: 7,
    width: 32,
    textAlign: 'center',
  },

  borderBottom: {
    marginHorizontal: metrics.smallMargin,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.grayLighter,
    opacity: 0.5,
  },
});

export default styles;
