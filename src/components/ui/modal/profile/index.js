import {connect} from 'react-redux';
import component from './component';

import {showToast, showNetworkIndicator} from 'actions';

function mapStateToProps(state) {
  return {
    account: state.account,
    access_token: state.user.access_token,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showToast: (data) => dispatch(showToast(data)),
    showNI: (data) => dispatch(showNetworkIndicator(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(component);
