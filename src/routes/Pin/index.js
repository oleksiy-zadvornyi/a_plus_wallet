import {connect} from 'react-redux';
import component from './component';

import {showToast} from 'actions';
import {reducePin, reduceUseTouchId, reduceUsePin} from 'actions/user';

function mapDispatchToProps(dispatch) {
  return {
    reducePin: (data) => dispatch(reducePin(data)),
    reduceUseTouchId: (data) => dispatch(reduceUseTouchId(data)),
    reduceUsePin: (data) => dispatch(reduceUsePin(data)),
    showToast: (data) => dispatch(showToast(data)),
  };
}

export default connect(null, mapDispatchToProps)(component);
