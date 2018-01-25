import { StyleSheet } from 'react-native';
import { general, metrics, colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: metrics.miniMargin,
    paddingHorizontal: metrics.smallMargin,
    paddingVertical: metrics.tinyMargin,
  },

  infoContainer: {
    flexDirection: 'row',
    borderRadius: metrics.baseRadius,
    padding: metrics.smallMargin,
    backgroundColor: colors.white,
    alignItems: 'center',
    width: '100%',
    ...general.shadow,
  },

  detailContainer: {
    flex: 1,
  },

  title: {
    fontWeight: 'bold',
    color: colors.dark,
    marginBottom: metrics.tinyMargin,
  },

  containerHour: {
    width: 62,
    marginLeft: metrics.tinyMargin,
    paddingVertical: metrics.tinyMargin,
    alignItems: 'center',
    backgroundColor: colors.yellowLighter,
    borderRadius: 35 / 2,
  },

  hour: {
    fontWeight: 'bold',
    color: colors.white,
  },

  subtitle: {
    color: colors.regular,
  },

  buttons: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  button: {
    marginRight: metrics.miniMargin,
  },
});

export default styles;
