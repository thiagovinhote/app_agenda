/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

class Notification extends Component {
  static propTypes = {
    message: PropTypes.string,
    loading: PropTypes.bool,
    show: PropTypes.bool,
    success: PropTypes.bool,
    danger: PropTypes.bool,
  }

  static defaultProps = {
    message: '',
    show: false,
    success: false,
    danger: false,
    loading: false,
  }

  touch = () => {
    this.show = false;
  }

  renderMessage = () => {
    const { success, danger } = this.props;
    return (
      <View
        style={[
          styles.container,
          success ? styles.success : {},
          danger ? styles.danger : {},
        ]}
        onTouchEnd={this.touch}
      >
        { success &&
          <Icon style={styles.icon} name="check-circle" size={20} />}
        { danger &&
          <Icon style={styles.icon} name="times-circle" size={20} /> }
        <Text style={styles.text}>{this.props.message}</Text>
      </View>
    );
  }

  renderLoading = () => (
    <View style={styles.container} onTouchEnd={this.touch}>
      <ActivityIndicator size="small" color="#FFF" />
    </View>
  );

  renderElement = () => (
    this.props.loading
      ? this.renderLoading()
      : this.renderMessage()
  );

  render() {
    return this.props.show
      ? this.renderElement()
      : null;
  }
}

export default Notification;
