/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Header from 'components/Header';
import Icon from 'react-native-vector-icons/FontAwesome';

/* Redux */
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import AuthActions from 'store/ducks/auth';

import styles from './styles';

class Account extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    signOut: PropTypes.func.isRequired,
    auth: PropTypes.shape({
      user: PropTypes.shape({
        user: PropTypes.shape({
          name: PropTypes.string,
        }),
      }),
    }),
  }

  static defaultProps = {
    auth: {
      user: {
        user: { name: '' },
      },
    },
  }

  state = {
    password: '',
    confirmPassword: '',
  }

  navigateBack = () => {
    const { dispatch } = this.props;
    return dispatch(NavigationActions.back());
  }

  update = () => {
  }

  logout = () => {
    const { signOut } = this.props;
    return signOut();
  }

  render() {
    const { user } = this.props.auth.user;
    return (
      <View style={styles.container}>
        <Header
          propsLeft={{
            iconName: 'chevron-left',
            onPress: this.navigateBack,
            style: styles.headerLeft,
          }}
          title="Minha Conta"
        />

        <View style={styles.content}>
          <View style={styles.containerInput}>
            <Icon style={styles.icon} name="user" size={20} />
            <TextInput
              placeholder="Nome do usuário"
              style={styles.input}
              value={user ? user.name : ''}
              editable={false}
            />
          </View>

          <View style={styles.separator} />

          <View style={styles.containerInput}>
            <Icon style={styles.icon} name="lock" size={20} />
            <TextInput
              placeholder="Quer alterar sua senha?"
              style={styles.input}
              placeholderTextColor="#ccc"
              onChangeText={text => this.setState({ password: text })}
            />
          </View>
          <View style={styles.containerInput}>
            <Icon style={styles.icon} name="lock" size={20} />
            <TextInput
              placeholder="Confirme a senha digitada"
              style={styles.input}
              placeholderTextColor="#ccc"
              onChangeText={text => this.setState({ confirmPassword: text })}
            />
          </View>

          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.button}
            onPress={this.update}
          >
            <Text style={styles.text}>Alterar informações</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.6}
            style={[styles.button, styles.buttonLogout]}
            onPress={this.logout}
          >
            <Text style={styles.text}>Sair</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(AuthActions.authSignOut()),
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
