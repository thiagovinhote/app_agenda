/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

/* Redux */
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import AuthActions from 'store/ducks/auth';

import styles from './styles';

class Login extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      state: PropTypes.shape({
        params: PropTypes.shape({
          phone: PropTypes.string,
        }),
      }),
    }).isRequired,
    auth: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.bool,
    }).isRequired,
    authAuthenticate: PropTypes.func.isRequired,
  }

  state = {
    password: '',
  }

  navigateBack = () => {
    const { dispatch } = this.props;
    return dispatch(NavigationActions.back());
  }

  authenticate = () => {
    const { password } = this.state;
    const { phone } = this.props.navigation.state.params;
    const { authAuthenticate } = this.props;

    return authAuthenticate({ password, phone });
  }

  render() {
    const { phone } = this.props.navigation.state.params;
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
            value={phone}
            editable={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Icon style={styles.icon} name="lock" size={20} />
          <TextInput
            placeholder="Sua senha secreta"
            secureTextEntry
            style={styles.input}
            placeholderTextColor="#ccc"
            onChangeText={text => this.setState({ password: text })}
          />
        </View>

        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.button}
          onPress={this.authenticate}
        >
          <Text style={styles.text}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.buttonNeat}
          onPress={this.navigateBack}
        >
          <Text style={styles.textNeat}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  authAuthenticate: data => dispatch(AuthActions.authAuthenticateRequest(data)),
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
