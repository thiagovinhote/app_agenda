/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Fade from 'components/Fade';

/* Redux */
import { connect } from 'react-redux';
import NotificationActions from 'store/ducks/notification';

import styles from './styles';

class Banner extends Component {
  static propTypes = {
    notification: PropTypes.shape({
      message: PropTypes.string,
      model: PropTypes.string,
      show: PropTypes.bool,
    }).isRequired,
    children: PropTypes.node,
    notificationHidden: PropTypes.func.isRequired,
  }

  static defaultProps = {
    children: {},
  }

  touch = () => {
    const { notificationHidden } = this.props;
    return notificationHidden();
  }

  render() {
    const { show, message, model } = this.props.notification;
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.body}>

          {this.props.children}

          <Fade visible={show} style={styles.container}>
            <View
              style={[
                styles.container,
                styles[model],
              ]}
              onTouchEnd={this.touch}
            >
              { model === 'success' &&
                <Icon style={styles.icon} name="check-circle" size={20} />}
              { model === 'danger' &&
                <Icon style={styles.icon} name="times-circle" size={20} /> }
              <Text style={styles.text}>{message}</Text>
            </View>
          </Fade>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  notification: state.notification,
});

const mapDispatchToProps = dispatch => ({
  notificationHidden: () => dispatch(NotificationActions.notificationHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
