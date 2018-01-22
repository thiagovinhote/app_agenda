import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { SafeAreaView } from 'react-native';

import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import { setAuthorization } from 'services/api';

import Routes from './routes';
import styles from './styles';

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
      <SafeAreaView style={styles.container}>
        <Routes
          navigation={addNavigationHelpers({
            dispatch,
            state: nav,
          })}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
  auth: state.auth,
});

export default connect(mapStateToProps)(Navigator);
