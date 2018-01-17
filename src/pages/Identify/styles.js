import { StyleSheet } from 'react-native';
import { general, metrics, colors, fonts } from 'styles';

const styles = StyleSheet.create({
  ...general,

  content: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: metrics.baseMargin,
  },

  title: {
    color: colors.white,
    fontSize: fonts.bigger,
    fontWeight: '900',
  },

  containerInput: {
    marginTop: 64,
    alignSelf: 'stretch',
    backgroundColor: colors.greenDark,
    borderRadius: metrics.baseRadius,
  },

  input: {
    padding: metrics.mediumMargin,
    color: colors.white,
    fontSize: fonts.base,
  },

  button: {
    marginTop: 15,
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
});

export default styles;
