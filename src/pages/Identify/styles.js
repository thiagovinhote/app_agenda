import { StyleSheet } from 'react-native';
import { general, metrics, colors, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  content: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: metrics.baseMargin,
  },

  title: {
    color: colors.greenLighter,
    fontSize: fonts.bigger,
    fontWeight: '900',
    letterSpacing: 3,
  },

  containerInput: {
    marginTop: 64,
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

  text: {
    color: colors.white,
    fontSize: fonts.medium,
    fontWeight: 'bold',
  },
});

export default styles;
