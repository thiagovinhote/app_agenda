import { StyleSheet } from 'react-native';
import { general, colors } from 'styles';

const styles = StyleSheet.create({
  ...general,

  headerLeft: {
    backgroundColor: colors.greenLight,
    borderRadius: 30 / 2,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
