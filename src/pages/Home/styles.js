import { StyleSheet } from 'react-native';
import { general, metrics, colors } from 'styles';

const styles = StyleSheet.create({
  ...general,

  headerLeft: {
    backgroundColor: colors.orangeLighter,
  },

  headerRight: {
    backgroundColor: colors.greenLighter,
  },
});

export default styles;
