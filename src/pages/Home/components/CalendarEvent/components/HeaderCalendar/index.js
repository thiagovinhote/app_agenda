/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { weekDayNames } from 'utils/dateutils';

/* Presentational */
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import styles from './styles';

class HeaderCalendar extends Component {
  static propTypes = {
    monthRelease: PropTypes.func.isRequired,
    dayRelease: PropTypes.func.isRequired,
    monthFormat: PropTypes.string,
    month: PropTypes.shape().isRequired,
    mini: PropTypes.bool,
  };

  static defaultProps = {
    monthFormat: 'MMMM yyyy',
    mini: false,
  };

  arrowLeft = () => {
    const next = this.props.mini ? this.props.dayRelease : this.props.monthRelease;
    next(-1);
  }

  arrowRight = () => {
    const next = this.props.mini ? this.props.dayRelease : this.props.monthRelease;
    next(1);
  }

  render() {
    const { month, mini, monthFormat } = this.props;
    const format = !mini ? monthFormat : 'dddd, dd De MMM';
    return (
      <View>
        <View style={styles.containerHeader}>

          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.6}
            onPress={this.arrowLeft}
          >
            <Icon style={styles.icon} name="chevron-left" size={25} />
          </TouchableOpacity>

          <Text style={styles.title}>
            {month.toString(format)}
          </Text>

          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.6}
            onPress={this.arrowRight}
          >
            <Icon style={styles.icon} name="chevron-right" size={25} />
          </TouchableOpacity>
        </View>

        { !mini &&
          <View style={styles.week}>
            {weekDayNames().map(day => (
              <Text key={day} style={styles.dayHeader} numberOfLines={1}>{day}</Text>
            ))}
          </View>
        }
      </View>
    );
  }
}

export default HeaderCalendar;
