/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text } from 'react-native';
import ButtonAction from './components/ButtonAction';

import styles from './styles';

class EventItem extends Component {
  static propTypes = {
    event: PropTypes.shape({
      title: PropTypes.string,
      dateHour: PropTypes.string,
      place: PropTypes.string,
    }).isRequired,
  };

  state = {
    buttonLeft: false,
    buttonRight: false,
  }

  formateDate = dateString => new Date(dateString).getHours();
  render() {
    const { event } = this.props;
    return (
      <View style={styles.container}>
        { this.state.buttonLeft &&
          <ButtonAction
            style={styles.buttonLeft}
            iconName="share"
            onPress={() => {}}
          /> }
        <View style={styles.infoContainer}>
          <View style={styles.topContainer}>
            <Text style={styles.title}>{ event.title }</Text>
            <Text style={styles.hour}>{ `${this.formateDate(event.createAt)}h` }</Text>
          </View>
          <Text style={styles.subtitle}>{ event.place }</Text>
        </View>
        { this.state.buttonRight &&
          <ButtonAction
            style={styles.buttonRight}
            iconName="trash"
            onPress={() => {}}
          /> }
      </View>
    );
  }
}

export default EventItem;
