import {connect} from 'react-redux';
import component from './component';

import {showToast} from 'actions';

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showToast: (data) => dispatch(showToast(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(component);
