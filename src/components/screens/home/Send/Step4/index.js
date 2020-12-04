import {connect} from 'react-redux';
import component from './component';

import {showNetworkIndicator} from 'store/actions';

function mapStateToProps(state) {
  return {
    access_token: state.user.access_token,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showNI: (data) => dispatch(showNetworkIndicator(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(component);
