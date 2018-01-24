/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


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
  }

  checkPhone = () => {
    const { phone } = this.state;
    if (phone.length === 0) return false;

    const { authPhone } = this.props;
    return authPhone(phone);
  }

  render() {
    const { auth } = this.props;
    return (
      <View style={[styles.container, styles.content]} >
        <Text style={styles.title}>SCHEDULER</Text>

        <View style={styles.containerInput}>
          <Icon style={styles.icon} name="phone" size={20} />
          <TextInput
            placeholder="Seu número de telefone"
            style={styles.input}
            placeholderTextColor="#ccc"
            onChangeText={text => this.setState({ phone: text })}
            underlineColorAndroid="transparent"
          />
        </View>

        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.button}
          onPress={this.checkPhone}
          disabled={auth.loading}
        >
          { auth.loading
            ? <ActivityIndicator size="small" color="#FFF" />
            : <Text style={styles.text}>Entrar</Text> }
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
