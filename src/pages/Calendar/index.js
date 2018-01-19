/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View } from 'react-native';
import Header from 'components/Header';
import EventList from 'pages/Calendar/components/EventList';
import NewEvent from 'pages/Calendar/components/NewEvent';

import { connect } from 'react-redux';
import EventActions from 'store/ducks/events';
import { NavigationActions } from 'react-navigation';

import styles from './styles';

class Calendar extends Component {
  static propTypes = {
    eventRequest: PropTypes.func.isRequired,
    event: PropTypes.shape({
      loading: PropTypes.bool,
      events: EventList.propTypes.events,
    }).isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  state = {
    modalVisible: false,
  }

  componentDidMount() {
    const { eventRequest } = this.props;
    return eventRequest();
  }

  actionLeft = () => {
    this.setState({ modalVisible: true });
  }

  actionRight = () => {
    const { dispatch } = this.props;
    return dispatch(NavigationActions.navigate({
      routeName: 'Account',
    }));
  }

  closeModal = () => this.setState({ modalVisible: false })

  render() {
    return (
      <View style={styles.container}>
        <Header
          propsLeft={{
            iconName: 'plus',
            onPress: this.actionLeft,
            style: styles.headerLeft,
          }}
          propsRight={{
            iconName: 'user',
            onPress: this.actionRight,
          }}
        />
        <NewEvent
          animationType="fade"
          visible={this.state.modalVisible}
          close={this.closeModal}
          transparent
        />
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

const mapDispatchToProps = dispatch => ({
  eventRequest: () => dispatch(EventActions.eventRequest()),
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
