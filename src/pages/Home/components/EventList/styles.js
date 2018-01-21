import { StyleSheet } from 'react-native';
import { metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    paddingHorizontal: metrics.baseMargin,
  },

  firstItem: {
    marginTop: metrics.miniMargin,
  },
});

export default styles;
