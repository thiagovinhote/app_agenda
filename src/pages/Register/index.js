/* Core */
import React from 'react';

/* Presentational */
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const Register = () => (
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
        style={styles.input}
        placeholderTextColor="#ccc"
      />
    </View>

    <TouchableOpacity activeOpacity={0.6} style={styles.button}>
      <Text style={styles.text}>Criar conta grátis</Text>
    </TouchableOpacity>

    <TouchableOpacity activeOpacity={0.6} style={styles.buttonNeat}>
      <Text style={styles.textNeat}>Já tenho conta</Text>
    </TouchableOpacity>
  </View>
);

export default Register;
