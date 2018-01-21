import { StyleSheet } from 'react-native';
import { general, metrics, colors, fonts } from 'styles';

const styles = StyleSheet.create({
  ...general,

  content: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: metrics.baseMargin,
    backgroundColor: colors.backgroundTraparent,
  },

  box: {
    borderRadius: metrics.baseRadius,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: metrics.baseMargin,
    backgroundColor: colors.white,
  },

  title: {
    marginVertical: 50,
    color: colors.background,
    fontSize: fonts.bMedium,
    fontWeight: 'bold',
    marginBottom: metrics.bigMargin,
  },

  containerInput: {
    marginBottom: metrics.miniMargin,
    flexDirection: 'row',
    backgroundColor: colors.light,
    alignSelf: 'stretch',
    borderRadius: metrics.baseRadius,
    padding: metrics.mediumMargin,
  },

  icon: {
    color: colors.regular,
    paddingRight: metrics.smallMargin,
  },

  input: {
    flex: 2,
    color: colors.background,
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
    padding: metrics.mediumMargin,
    marginBottom: metrics.bigMargin,
  },

  textNeat: {
    color: colors.regular,
  },
});

export default styles;
