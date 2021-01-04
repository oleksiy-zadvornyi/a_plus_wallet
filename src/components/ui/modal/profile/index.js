import {connect} from 'react-redux';
import component from './component';

import {showNetworkIndicator, showToast} from 'actions';

function mapStateToProps(state) {
  return {
    account: state.account,
    access_token: state.user.access_token,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showNI: (data) => dispatch(showNetworkIndicator(data)),
    showToast: (data) => dispatch(showToast(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(component);
