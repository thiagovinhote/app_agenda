/* Core */
import React from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const ButtonAction = ({ iconName, onPress, style }) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.6}
    style={[
      styles.button,
      styles.danger,
      style,
    ]}
  >
    <Icon style={styles.icon} name={iconName} size={20} />
  </TouchableOpacity>
);

ButtonAction.propTypes = {
  iconName: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  style: View.propTypes.style,
};

ButtonAction.defaultProps = {
  style: {},
};

export default ButtonAction;
