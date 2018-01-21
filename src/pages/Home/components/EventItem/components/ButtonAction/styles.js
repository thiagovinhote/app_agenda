import { StyleSheet } from 'react-native';
import { metrics, colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    width: 80,
    borderRadius: metrics.baseRadius,
  },

  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    color: colors.white,
  },
});

export default styles;
