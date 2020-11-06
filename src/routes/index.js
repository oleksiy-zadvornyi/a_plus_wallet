import React from 'react';
import {connect} from 'react-redux';

import Auth from './Auth';
import Home from './Home';

const Route = ({access_token}) => {
  if (access_token) {
    return <Home />;
  }
  return <Auth />;
};

function mapStateToProps(state) {
  return {
    access_token: state.user.access_token,
  };
}

export default connect(mapStateToProps, null)(Route);
