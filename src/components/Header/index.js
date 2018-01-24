/* Core */
import React from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const Header = ({ title, propsLeft, propsRight }) => (
  <View style={styles.container}>
    <View>
      { propsLeft &&
        <TouchableOpacity
          style={[styles.button, styles.left, propsLeft.style]}
          activeOpacity={0.6}
          onPress={propsLeft.onPress}
        >
          <View style={styles.contentButton}>
            <Icon style={styles.icon} name={propsLeft.iconName} size={20} />
          </View>
        </TouchableOpacity>
      }
    </View>

    <Text style={styles.title}>{ title }</Text>

    <View>
      { propsRight &&
        <TouchableOpacity
          style={[styles.button, styles.right, propsRight.style]}
          activeOpacity={0.6}
          onPress={propsRight.onPress}
        >
          <View style={styles.contentButton}>
            <Icon style={styles.icon} name={propsRight.iconName} size={20} />
          </View>
        </TouchableOpacity>}
    </View>
  </View>
);

Header.propTypes = {
  title: PropTypes.string,
  propsLeft: PropTypes.shape({
    style: View.propTypes.style,
    onPress: PropTypes.func,
  }),
  propsRight: PropTypes.shape({
    style: View.propTypes.style,
    onPress: PropTypes.func,
  }),
};

Header.defaultProps = {
  title: 'SCHEDULER',
  propsLeft: {},
  propsRight: {},
};

export default Header;
