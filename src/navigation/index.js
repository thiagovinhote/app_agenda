import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import { setAuthorization } from 'services/api';

import Routes from './routes';

class Navigator extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.shape({
      index: PropTypes.number,
      routes: PropTypes.array,
    }).isRequired,
    auth: PropTypes.shape().isRequired,
  };

  componentWillMount() {
    const { token } = this.props.auth.user;
    setAuthorization(token);
  }

  render() {
    const { dispatch, nav } = this.props;
    return (
      <Routes
        navigation={addNavigationHelpers({
          dispatch,
          state: nav,
        })}
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
  auth: state.auth,
});

export default connect(mapStateToProps)(Navigator);
