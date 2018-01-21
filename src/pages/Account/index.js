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

import styles from './styles';

class Account extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
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
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          propsLeft={{
            iconName: 'chevron-left',
            onPress: this.navigateBack,
          }}
        />
        <View style={styles.section}>
          <Text style={styles.titleSection}>Minha Conta</Text>
        </View>

        <View style={styles.content}>
          <View style={styles.containerInput}>
            <Icon style={styles.icon} name="user" size={20} />
            <TextInput
              placeholder="Seu número de telefone"
              style={styles.input}
              value="Thiago Vinhote"
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

export default connect()(Account);
