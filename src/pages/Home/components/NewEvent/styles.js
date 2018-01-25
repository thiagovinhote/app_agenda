import { StyleSheet } from 'react-native';
import { general, metrics, colors, fonts } from 'styles';

const styles = StyleSheet.create({
  ...general,

  content: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: metrics.baseMargin,
    paddingHorizontal: metrics.baseMargin,
    backgroundColor: colors.backgroundTraparent,
  },

  scroll: {
    paddingHorizontal: metrics.baseMargin,
    alignSelf: 'stretch',
  },

  box: {
    borderRadius: metrics.baseRadius,
    alignSelf: 'stretch',
    backgroundColor: colors.white,
  },

  title: {
    alignSelf: 'center',
    marginVertical: 50,
    color: colors.regular,
    fontSize: fonts.bMedium,
    fontWeight: 'bold',
    marginBottom: metrics.bigMargin,
  },

  containerInput: {
    marginBottom: metrics.miniMargin,
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
    marginTop: metrics.tinyMargin,
    padding: metrics.mediumMargin,
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: colors.green,
    borderRadius: metrics.baseRadius,
  },

  text: {
    color: colors.white,
    fontSize: fonts.medium,
    fontWeight: 'bold',
  },

  buttonNeat: {
    alignSelf: 'center',
    padding: metrics.mediumMargin,
    marginBottom: metrics.bigMargin,
  },

  textNeat: {
    color: colors.regular,
  },
});

export default styles;
