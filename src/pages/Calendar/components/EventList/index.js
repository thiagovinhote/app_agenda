/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, FlatList } from 'react-native';
import EventItem from '../EventItem';

import styles from './styles';

class EventList extends Component {
  static propTypes = {
    events: PropTypes.arrayOf(EventItem.propTypes.event).isRequired,
  }

  renderItem = ({ item }) => (
    <EventItem event={item} />
  );

  render() {
    const { events } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.content}
          data={events}
          keyExtractor={i => i._id}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

export default EventList;
