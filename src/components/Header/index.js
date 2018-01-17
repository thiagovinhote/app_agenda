/* Core */
import React from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const Header = props => (
  <View style={styles.container}>
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.6}
      onPress={() => {}}
    >
      <Icon style={styles.icon} name="chevron-left" size={20} />
    </TouchableOpacity>

    <Text style={styles.title}>{ props.title }</Text>

    <TouchableOpacity
      style={styles.button}
    />
  </View>
);

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: 'SCHEDULER',
};

export default Header;
