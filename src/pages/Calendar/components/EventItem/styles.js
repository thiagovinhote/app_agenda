import { StyleSheet } from 'react-native';
import { metrics, colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: metrics.miniMargin,
  },

  infoContainer: {
    flex: 1,
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

  buttonRight: {
    marginLeft: metrics.miniMargin,
    backgroundColor: colors.danger,
  },

  buttonLeft: {
    marginRight: metrics.miniMargin,
    backgroundColor: colors.info,
  },
});

export default styles;
