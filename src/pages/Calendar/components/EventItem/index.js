/* Core */
import React from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text } from 'react-native';

import styles from './styles';

const EventItem = ({ event }) => (
  <View style={styles.container}>
    <View style={styles.topContainer}>
      <Text style={styles.title}>{ event.title }</Text>
      <Text style={styles.hour}>{ event.dateHour }</Text>
    </View>
    <Text style={styles.subtitle}>{ event.place }</Text>
  </View>
);

EventItem.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string,
    dateHour: PropTypes.string,
    place: PropTypes.string,
  }).isRequired,
};

export default EventItem;
