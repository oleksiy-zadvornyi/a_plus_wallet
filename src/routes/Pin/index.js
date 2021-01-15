import {connect} from 'react-redux';
import component from './component';

import {reducePin, reduceUseTouchId, reduceUsePin} from 'actions/user';

function mapDispatchToProps(dispatch) {
  return {
    reducePin: (data) => dispatch(reducePin(data)),
    reduceUseTouchId: (data) => dispatch(reduceUseTouchId(data)),
    reduceUsePin: (data) => dispatch(reduceUsePin(data)),
  };
}

export default connect(null, mapDispatchToProps)(component);
