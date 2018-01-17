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

class Identify extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  navigateLogin = () => {
    const { dispatch } = this.props;
    return dispatch(NavigationActions.navigate({
      routeName: 'Register',
    }));
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

        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.button}
          onPress={this.navigateLogin}
        >
          <Text style={styles.text}>Entrar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(null, mapDispatchToProps)(Identify);
