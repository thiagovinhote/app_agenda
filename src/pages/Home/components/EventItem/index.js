/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text, PanResponder, Animated, Share } from 'react-native';
import ButtonAction from 'pages/Home/components/EventItem/components/ButtonAction';

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
    style: View.propTypes.style,
  };

  static defaultProps = {
    style: {},
  }

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

  formateDate = (dateString) => {
    const date = new Date(dateString);
    const hours = date.getHours();
    let minutes = date.getMinutes();

    minutes = minutes < 10 ? `0${minutes}` : minutes;

    const format = `${hours}:${minutes}`;
    return format;
  }

  actionLeft = async () => {
    const { event } = this.props;
    const message = `${event.place}! ${event.dateHour}`;

    const res = await Share.share({
      title: event.title,
      message,
    }, {
      dialogTitle: 'Compartilhar evento',
    });
    return res;
  }

  actionRight = () => {
    const { eventDeleteRequest, event: { _id } } = this.props;
    return eventDeleteRequest(_id);
  }

  render() {
    const { event, style } = this.props;
    return (
      <Animated.View
        {...this.panResponder.panHandlers}
        style={[
          styles.container,
          style,
          {
            transform: [
              ...this.state.offset.getTranslateTransform(),
            ],
          },
        ]}
      >
        { this.state.buttonLeft &&
          <View style={styles.buttons}>
            <ButtonAction
              style={styles.buttonRight}
              iconName="close"
              onPress={this.actionRight}
            />
            <ButtonAction
              style={styles.buttonLeft}
              iconName="share"
              onPress={this.actionLeft}
            />
          </View>
        }
        <View
          style={styles.infoContainer}
        >
          <View style={styles.detailContainer}>
            <Text style={styles.title}>{ event.title }</Text>
            <Text style={styles.subtitle}>{ event.place }</Text>
          </View>
          <View style={styles.containerHour}>
            <Text style={styles.hour}>{ `${this.formateDate(event.dateHour)}` }</Text>
          </View>
        </View>
      </Animated.View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  eventDeleteRequest: _id => dispatch(EventActions.eventDeleteRequest(_id)),
});

export default connect(null, mapDispatchToProps)(EventItem);
