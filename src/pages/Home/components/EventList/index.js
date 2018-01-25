/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, FlatList, Text, ActivityIndicator } from 'react-native';
import EventItemComponent, { EventItem } from '../EventItem';

import styles from './styles';

class EventList extends Component {
  static propTypes = {
    events: PropTypes.arrayOf(EventItem.propTypes.event).isRequired,
    loading: PropTypes.bool.isRequired,
  }

  renderItem = ({ item }) => (
    <EventItemComponent
      event={item}
    />
  );

  renderList = () => (
    <FlatList
      showsVerticalScrollIndicator={false}
      style={styles.content}
      data={this.props.events}
      keyExtractor={i => i._id}
      renderItem={this.renderItem}
    />
  );

  renderContent = () => (
    this.props.events.length === 0
      ? this.renderEmpty()
      : this.renderList()
  );

  renderEmpty = () => (
    <Text style={styles.textEmpty}>Sem eventos para este dia</Text>
  )

  render() {
    return (
      <View style={styles.container}>
        {
          !this.props.loading
            ? this.renderContent()
            : <ActivityIndicator size="small" color="#49C7A7" />
        }
      </View>
    );
  }
}

export default EventList;
