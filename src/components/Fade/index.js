/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Animated } from 'react-native';


class Fade extends Component {
  static propTypes = {
    visible: PropTypes.bool,
    style: View.propTypes.style,
    children: PropTypes.node.isRequired,
  }

  static defaultProps = {
    visible: false,
    style: {},
  }

  constructor(props) {
    super(props);
    this.state = {
      visible: props.visible,
    };
  }

  componentWillMount() {
    this._visibility = new Animated.ValueXY({ x: 0, y: this.props.visible ? 0 : -62 });
    this._opacity = new Animated.Value(this.props.visible ? 1 : 0);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.visible) {
      this.setState({ visible: true });
    }
    Animated.parallel([
      Animated.spring(this._visibility.y, {
        toValue: nextProps.visible ? 0 : -62,
        duration: 300,
        bounciness: 10,
      }),
      Animated.timing(this._opacity, {
        toValue: nextProps.visible ? 1 : 0,
        duration: 300,
      }),
    ]).start(() => {
      this.setState({ visible: nextProps.visible });
    });
  }

  render() {
    const { visible, style, children, ...rest } = this.props;

    const containerStyle = {
      opacity: this._opacity.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
      }),
      transform: [
        {
          translateY: this._visibility.y,
        },
      ],
    };

    const combinedStyle = [containerStyle, style];
    return (
      <Animated.View style={this.state.visible ? combinedStyle : containerStyle} {...rest}>
        {this.state.visible ? children : null}
      </Animated.View>
    );
  }
}

export default Fade;
