import {connect} from 'react-redux';
import component from './component';

import {showToast} from 'actions';
import {fetchSignup} from 'actions/user';

function mapDispatchToProps(dispatch) {
  return {
    fetchSignup: (data) => dispatch(fetchSignup(data)),
    showToast: (data) => dispatch(showToast(data)),
  };
}

export default connect(null, mapDispatchToProps)(component);
