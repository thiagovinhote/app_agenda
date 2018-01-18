/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { TouchableOpacity, Animated, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

class ButtonAction extends Component {
  static propTypes = {
    iconName: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    style: View.propTypes.style,
  };

  static defaultProps = {
    style: {},
  };

  state = {
    offset: new Animated.ValueXY({ x: -50, y: 0 }),
  }

  componentDidMount() {
    Animated.spring(this.state.offset.x, {
      toValue: 0,
      speed: 5,
      bounciness: 10,
    }).start();
  }

  render() {
    const { onPress, iconName, style } = this.props;
    return (
      <Animated.View
        style={[
          {
            transform: [
              { translateX: this.state.offset.x },
            ],
          },
        ]}
      >
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
      </Animated.View>
    );
  }
}

export default ButtonAction;
