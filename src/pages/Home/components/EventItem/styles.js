import { StyleSheet } from 'react-native';
import { metrics, colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    marginBottom: metrics.miniMargin,
    paddingHorizontal: metrics.smallMargin,
  },

  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: metrics.baseRadius,
    padding: metrics.mediumMargin,
    backgroundColor: colors.white,
    alignItems: 'center',
  },

  detailContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
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

  buttonRight: {
    marginRight: metrics.miniMargin,
    backgroundColor: colors.danger,
  },

  buttonLeft: {
    marginRight: metrics.miniMargin,
    backgroundColor: colors.info,
  },
});

export default styles;
