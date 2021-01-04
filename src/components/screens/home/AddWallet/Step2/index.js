import {connect} from 'react-redux';
import component from './component';

import {showToast} from 'actions';
import {fetchPostAccountCreate} from 'actions/account';

function mapStateToProps(state) {
  return state.user;
}

function mapDispatchToProps(dispatch) {
  return {
    postAccountCreate: (data) => dispatch(fetchPostAccountCreate(data)),
    showToast: (data) => dispatch(showToast(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(component);
