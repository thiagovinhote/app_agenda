/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, ScrollView } from 'react-native';
import Header from 'components/Header';
import EventList from 'pages/Home/components/EventList';
import NewEvent from 'pages/Home/components/NewEvent';
import CalendarEvent from 'pages/Home/components/CalendarEvent';

import { connect } from 'react-redux';
import EventActions from 'store/ducks/events';
import { NavigationActions } from 'react-navigation';

import styles from './styles';

class Home extends Component {
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
    expandedCalendar: true,
  }

  onPressDay = (day) => {
    const { eventRequest } = this.props;
    // return eventRequest(day);
  }

  onScroll = (event) => {
    const { y } = event.nativeEvent.contentOffset;
    // console.tron.log(event.nativeEvent);
    if (y > 0) {
      this.setState({
        expandedCalendar: false,
      });
    } else if (y < -50) {
      this.setState({
        expandedCalendar: true,
      });
    }
  }

  onCurrent = (day) => {
    this.onPressDay(day);
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
            style: styles.headerRight,
          }}
        />

        <CalendarEvent
          onCurrent={this.onCurrent}
          expanded={this.state.expandedCalendar}
        />

        <ScrollView
          onScrollEndDrag={this.onScroll}
          showsVerticalScrollIndicator={false}
        >
          <EventList
            style={styles.listContent}
            events={this.props.event.events}
            loading={this.props.event.loading}
          />
        </ScrollView>

        <NewEvent
          animationType="fade"
          visible={this.state.modalVisible}
          close={this.closeModal}
          transparent
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  event: state.event,
});

const mapDispatchToProps = dispatch => ({
  eventRequest: date => dispatch(EventActions.eventRequest(date)),
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
