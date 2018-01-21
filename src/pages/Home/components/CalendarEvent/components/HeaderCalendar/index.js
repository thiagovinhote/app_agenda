/* Core */
import React from 'react';
import PropTypes from 'prop-types';
import { weekDayNames } from 'utils/dateutils';

/* Presentational */
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import styles from './styles';

const HeaderCalendar = props => (
  <View>
    <View style={styles.containerHeader}>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.6}
        onPress={() => props.monthRelease(-1)}
      >
        <Icon style={styles.icon} name="chevron-left" size={25} />
      </TouchableOpacity>

      <Text style={styles.title}>
        {props.month.toString(props.monthFormat ? props.monthFormat : 'MMMM yyyy')}
      </Text>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.6}
        onPress={() => props.monthRelease(1)}
      >
        <Icon style={styles.icon} name="chevron-right" size={25} />
      </TouchableOpacity>
    </View>

    <View style={styles.week}>
      {weekDayNames().map(day => (
        <Text key={day} style={styles.dayHeader} numberOfLines={1}>{day}</Text>
      ))}
    </View>
  </View>
);

HeaderCalendar.propTypes = {
  monthRelease: PropTypes.func.isRequired,
  monthFormat: PropTypes.string,
  month: PropTypes.shape().isRequired,
};

HeaderCalendar.defaultProps = {
  monthFormat: '',
};

export default HeaderCalendar;
