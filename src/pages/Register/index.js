/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

/* Redux */
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import styles from './styles';

class Register extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  navigateBack = () => {
    const { dispatch } = this.props;
    return dispatch(NavigationActions.back());
  }

  render() {
    return (
      <View style={[styles.container, styles.content]} >
        <Text style={styles.title}>SCHEDULER</Text>

        <View style={styles.containerInput}>
          <Icon style={styles.icon} name="phone" size={20} />
          <TextInput
            placeholder="Seu número de telefone"
            style={styles.input}
            placeholderTextColor="#ccc"
          />
        </View>
        <View style={styles.containerInput}>
          <Icon style={styles.icon} name="user" size={20} />
          <TextInput
            placeholder="Nome completo"
            style={styles.input}
            placeholderTextColor="#ccc"
          />
        </View>
        <View style={styles.containerInput}>
          <Icon style={styles.icon} name="lock" size={20} />
          <TextInput
            placeholder="Sua senha secreta"
            secureTextEntry
            style={styles.input}
            placeholderTextColor="#ccc"
          />
        </View>

        <TouchableOpacity activeOpacity={0.6} style={styles.button}>
          <Text style={styles.text}>Criar conta grátis</Text>
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

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(null, mapDispatchToProps)(Register);
