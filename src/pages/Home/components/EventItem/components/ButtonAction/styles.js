import { StyleSheet } from 'react-native';
import { general, metrics, colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: colors.white,
    ...general.shadow,
    shadowOpacity: 0.3,
  },

  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    color: colors.regular,
  },
});

export default styles;
