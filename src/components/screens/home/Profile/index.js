import {connect} from 'react-redux';
import component from './component';

import {showNetworkIndicator, showToast} from 'actions';

import {
  fetchLogout,
  fetchUserAcceptEmail,
  fetchSetFirstName,
  fetchSetSecondName,
} from 'actions/user';

function mapStateToProps(state) {
  return {
    user: state.user,
    account: state.account,
    access_token: state.user.access_token,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchLogout: () => dispatch(fetchLogout()),
    setFirstName: (data) => dispatch(fetchSetFirstName(data)),
    setSecondName: (data) => dispatch(fetchSetSecondName(data)),
    fetchUserAcceptEmail: (data) => dispatch(fetchUserAcceptEmail(data)),
    showNI: (data) => dispatch(showNetworkIndicator(data)),
    showToast: (data) => dispatch(showToast(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(component);
