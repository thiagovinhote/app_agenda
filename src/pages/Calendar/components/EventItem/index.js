/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text, PanResponder, Animated } from 'react-native';
import ButtonAction from 'pages/Calendar/components/EventItem/components/ButtonAction';

/* Redux */
import { connect } from 'react-redux';
import EventActions from 'store/ducks/events';

import styles from './styles';

export class EventItem extends Component {
  static propTypes = {
    event: PropTypes.shape({
      title: PropTypes.string,
      dateHour: PropTypes.string,
      place: PropTypes.string,
    }).isRequired,
    eventDeleteRequest: PropTypes.func.isRequired,
  };

  state = {
    buttonLeft: false,
    buttonRight: false,
    offset: new Animated.ValueXY({ x: 0, y: 0 }),
  }

  componentWillMount() {
    this.panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderTerminationRequest: () => false,

      onPanResponderMove: Animated.event([null, {
        dx: this.state.offset.x,
      }]),

      onPanResponderGrant: () => {
        this.hiddenButtons();
      },

      onPanResponderRelease: () => {
        const { _value } = this.state.offset.x;
        if (_value < -150 || _value > 150) {
          if (_value < -150) {
            this.setState({ buttonRight: true });
          } else if (_value > 150) {
            this.setState({ buttonLeft: true });
          }
        }

        Animated.spring(this.state.offset.x, {
          toValue: 0,
          bounciness: 10,
        }).start();
      },

      onPanResponderTerminate: () => {
        Animated.spring(this.state.offset.x, {
          toValue: 0,
          bounciness: 10,
        }).start();
      },
    });
  }

  hiddenButtons = () => this.setState({ buttonLeft: false, buttonRight: false });

  formateDate = dateString => new Date(dateString).getHours();

  actionLeft = () => {

  }

  actionRight = () => {
    const { eventDeleteRequest, event: { _id } } = this.props;
    return eventDeleteRequest(_id);
  }

  render() {
    const { event } = this.props;
    return (
      <Animated.View
        {...this.panResponder.panHandlers}
        style={[
          styles.container,
          {
            transform: [
              ...this.state.offset.getTranslateTransform(),
            ],
          },
        ]}
      >
        { this.state.buttonLeft &&
          <ButtonAction
            style={styles.buttonLeft}
            iconName="share"
            onPress={this.actionLeft}
          /> }
        <View
          onTouchStart={this.hiddenButtons}
          style={styles.infoContainer}
        >
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
            onPress={this.actionRight}
          /> }
      </Animated.View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  eventDeleteRequest: _id => dispatch(EventActions.eventDeleteRequest(_id)),
});

export default connect(null, mapDispatchToProps)(EventItem);
