/* Core */
import React from 'react';

/* Presentational */
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

const Identify = () => (
  <View style={[styles.container, styles.content]} >
    <Text style={styles.title}>SCHEDULER</Text>

    <View style={styles.containerInput}>
      <TextInput
        placeholder="Seu número de telefone"
        style={styles.input}
        placeholderTextColor="#ccc"
      />
    </View>

    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>Entrar</Text>
    </TouchableOpacity>
  </View>
);

export default Identify;
