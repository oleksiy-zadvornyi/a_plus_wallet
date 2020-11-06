import {connect} from 'react-redux';
import component from './component';

import {showToast} from 'actions';
import {fetchLogin} from 'actions/user';

function mapDispatchToProps(dispatch) {
  return {
    fetchLogin: (data) => dispatch(fetchLogin(data)),
    showToast: (data) => dispatch(showToast(data)),
  };
}

export default connect(null, mapDispatchToProps)(component);
