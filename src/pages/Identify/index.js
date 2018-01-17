/* Core */
import React from 'react';

/* Presentational */
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const Identify = () => (
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

    <TouchableOpacity activeOpacity={0.6} style={styles.button}>
      <Text style={styles.text}>Entrar</Text>
    </TouchableOpacity>
  </View>
);

export default Identify;
