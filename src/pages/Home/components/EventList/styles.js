import { StyleSheet } from 'react-native';
import { metrics, fonts, colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: metrics.baseMargin,
  },

  content: {
    // paddingHorizontal: metrics.baseMargin,
  },

  textEmpty: {
    textAlign: 'center',
    fontSize: fonts.medium,
    color: colors.success,
  },
});

export default styles;
