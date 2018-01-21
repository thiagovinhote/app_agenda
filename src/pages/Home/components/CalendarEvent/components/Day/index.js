import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

import styleConstructor from './styles';

class Day extends Component {
  static propTypes = {
    state: PropTypes.oneOf(['disabled', 'today', 'selected', '']).isRequired,
    marking: PropTypes.shape(),
    onPress: PropTypes.func.isRequired,
    date: PropTypes.shape(),
    children: PropTypes.number.isRequired,
    selected: PropTypes.bool,
  };

  static defaultProps = {
    marking: {},
    date: {},
    selected: false,
  }

  constructor(props) {
    super(props);
    this.style = styleConstructor();
  }

  shouldComponentUpdate(nextProps) {
    const changed = ['state', 'children', 'marking', 'onPress'].reduce((prev, next) => {
      if (prev) {
        return prev;
      } else if (nextProps[next] !== this.props[next]) {
        return next;
      }
      return prev;
    }, false);
    if (changed === 'marking') {
      let markingChanged = false;
      if (this.props.marking && nextProps.marking) {
        markingChanged = (!(
          this.props.marking.marked === nextProps.marking.marked
          && this.props.marking.selected === nextProps.marking.selected
          && this.props.marking.dotColor === nextProps.marking.dotColor
          && this.props.marking.disabled === nextProps.marking.disabled));
      } else {
        markingChanged = true;
      }
      return markingChanged;
    }
    return !!changed;
  }

  onDayPress = () => {
    this.props.onPress(this.props.date);
  }

  render() {
    const containerStyle = [this.style.base];
    const textStyle = [this.style.text];
    const dotStyle = [this.style.dot];

    let marking = this.props.marking || {};
    if (marking && marking.constructor === Array && marking.length) {
      marking = {
        marking: true,
      };
    }
    let dot;
    if (marking.marked) {
      dotStyle.push(this.style.visibleDot);
      if (marking.dotColor) {
        dotStyle.push({ backgroundColor: marking.dotColor });
      }
      dot = (<View style={dotStyle} />);
    }

    if (marking.selected) {
      containerStyle.push(this.style.selected);
      dotStyle.push(this.style.selectedDot);
      textStyle.push(this.style.selectedText);
    } else if (typeof marking.disabled !== 'undefined' ? marking.disabled : this.props.state === 'disabled') {
      textStyle.push(this.style.disabledText);
    } else if (this.props.state === 'today') {
      containerStyle.push(this.style.today);
      textStyle.push(this.style.todayText);
    } else if (this.props.state === 'selected') {
      containerStyle.push(this.style.selected);
      textStyle.push(this.style.selectedText);
    }

    return (
      <TouchableOpacity
        style={containerStyle}
        onPress={this.onDayPress}
        disabled={
          typeof marking.disabled !== 'undefined'
            ? marking.disabled
            : this.props.state === 'disabled'
        }
      >
        <Text style={textStyle}>{String(this.props.children)}</Text>
        {dot}
      </TouchableOpacity>
    );
  }
}

export default Day;
