/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View } from 'react-native';
import Header from 'components/Header';
import EventList from 'pages/Calendar/components/EventList';

import { connect } from 'react-redux';
import EventActions from 'store/ducks/events';

import styles from './styles';

class Calendar extends Component {
  static propTypes = {
    eventRequest: PropTypes.func.isRequired,
    event: PropTypes.shape({
      loading: PropTypes.bool,
      events: EventList.propTypes.events,
    }).isRequired,
  }

  componentDidMount() {
    const { eventRequest } = this.props;
    return eventRequest();
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <EventList
          events={this.props.event.events}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  event: state.event,
});

const mapDispatchToProps = dispatc => ({
  eventRequest: () => dispatc(EventActions.eventRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
