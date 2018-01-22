/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

/* Redux */
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import AuthActions from 'store/ducks/auth';

import styles from './styles';

class Register extends Component {
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
    }).isRequired,
    authRegisterRequest: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    const { phone } = props.navigation.state.params;

    this.state = {
      user: {
        phone,
        name: '',
        password: '',
      },
    };
  }

  navigateBack = () => {
    const { dispatch } = this.props;
    return dispatch(NavigationActions.back());
  }

  register = () => {
    const { user } = this.state;
    if (user.name.length === 0 || user.password.length === 0) return false;

    const { authRegisterRequest } = this.props;
    return authRegisterRequest(user);
  }

  render() {
    const { phone } = this.state.user;
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
          <Icon style={styles.icon} name="user" size={20} />
          <TextInput
            placeholder="Nome completo"
            style={styles.input}
            placeholderTextColor="#ccc"
            onChangeText={(name) => { this.state.user.name = name }}
          />
        </View>
        <View style={styles.containerInput}>
          <Icon style={styles.icon} name="lock" size={20} />
          <TextInput
            placeholder="Sua senha secreta"
            secureTextEntry
            style={styles.input}
            placeholderTextColor="#ccc"
            onChangeText={(password) => { this.state.user.password = password }}
          />
        </View>

        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.button}
          onPress={this.register}
        >
          { this.props.auth.loading
            ? <ActivityIndicator size="small" color="#FFF" />
            : <Text style={styles.text}>Criar conta grátis</Text> }
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.buttonNeat}
          onPress={this.navigateBack}
        >
          <Text style={styles.textNeat}>Já tenho conta</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  authRegisterRequest: user => dispatch(AuthActions.authRegisterRequest(user)),
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
