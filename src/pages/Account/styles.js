import { StyleSheet } from 'react-native';
import { general, metrics, colors, fonts } from 'styles';

const styles = StyleSheet.create({
  ...general,

  section: {
    backgroundColor: colors.darker,
    padding: metrics.bigMargin,
    alignItems: 'center',
  },

  titleSection: {
    color: colors.white,
    fontSize: fonts.bMedium,
    fontWeight: 'bold',
  },

  separator: {
    marginTop: metrics.miniMargin,
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.grayLighter,
    opacity: 0.5,
  },

  content: {
    paddingHorizontal: metrics.baseMargin,
    padding: metrics.miniMargin,
  },

  containerInput: {
    marginTop: metrics.miniMargin,
    flexDirection: 'row',
    backgroundColor: colors.purpleLighter,
    alignSelf: 'stretch',
    alignItems: 'center',
    borderRadius: metrics.baseRadius,
    padding: metrics.mediumMargin,
  },

  icon: {
    color: colors.white,
  },

  input: {
    flex: 2,
    paddingLeft: metrics.smallMargin,
    color: colors.white,
  },

  button: {
    marginTop: metrics.smallMargin,
    padding: metrics.mediumMargin,
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: colors.green,
    borderRadius: metrics.baseRadius,
  },

  buttonLogout: {
    backgroundColor: colors.pinkLighter,
  },

  text: {
    color: colors.white,
    fontSize: fonts.medium,
    fontWeight: 'bold',
  },

  headerLeft: {
    backgroundColor: colors.success,
  },
});

export default styles;
