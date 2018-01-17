/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Notification from 'components/Notification';

/* Redux */
import { connect } from 'react-redux';
import AuthActions from 'store/ducks/auth';

import styles from './styles';

class Identify extends Component {
  static propTypes = {
    authPhone: PropTypes.func.isRequired,
    auth: PropTypes.shape({
      loading: PropTypes.bool,
      success: PropTypes.bool,
      error: PropTypes.bool,
    }).isRequired,
  }

  state = {
    phone: '',
    show: false,
  }

  checkPhone = () => {
    const { authPhone } = this.props;
    const { phone } = this.state;
    this.setState({ show: true });

    return authPhone(phone);
  }

  render() {
    const { auth } = this.props;
    return (
      <View style={[styles.container, styles.content]} >
        <Notification
          show={this.state.show}
          loading={auth.loading}
        />

        <Text style={styles.title}>SCHEDULER</Text>

        <View style={styles.containerInput}>
          <Icon style={styles.icon} name="phone" size={20} />
          <TextInput
            placeholder="Seu número de telefone"
            style={styles.input}
            placeholderTextColor="#ccc"
            onChangeText={text => this.setState({ phone: text })}
          />
        </View>

        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.button}
          onPress={this.checkPhone}
        >
          <Text style={styles.text}>Entrar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  authPhone: phone => dispatch(AuthActions.authPhoneRequest(phone)),
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Identify);
