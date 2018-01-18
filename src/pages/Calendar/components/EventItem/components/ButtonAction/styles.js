import { StyleSheet } from 'react-native';
import { metrics, colors } from 'styles';

const styles = StyleSheet.create({
  button: {
    padding: metrics.bigMargin,
    borderRadius: metrics.baseRadius,
    justifyContent: 'center',
    backgroundColor: colors.regular,
  },

  icon: {
    color: colors.white,
  },
});

export default styles;
