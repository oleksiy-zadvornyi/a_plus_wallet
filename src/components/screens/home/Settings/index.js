import {connect} from 'react-redux';
import component from './component';

import {reduceEmptyAccount} from 'actions/settings';

function mapStateToProps(state) {
  return state.settings;
}

function mapDispatchToProps(dispatch) {
  return {
    reduceEmptyAccount: (data) => dispatch(reduceEmptyAccount(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(component);
