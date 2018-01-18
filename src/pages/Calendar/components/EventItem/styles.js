import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    marginBottom: metrics.miniMargin,
    borderRadius: metrics.baseRadius,
    padding: metrics.baseMargin,
    backgroundColor: colors.white,
  },

  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: metrics.tinyMargin,
  },

  title: {
    fontWeight: 'bold',
    color: colors.dark,
  },

  hour: {
    color: colors.regular,
  },

  subtitle: {
    color: colors.regular,
  },
});

export default styles;
