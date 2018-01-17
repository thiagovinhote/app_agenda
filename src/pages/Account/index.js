/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Header from 'components/Header';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

class Account extends Component {
  state = {
    password: '',
    confirmPassword: '',
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
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
            onPress={this.checkPhone}
          >
            <Text style={styles.text}>Alterar informações</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Account;
