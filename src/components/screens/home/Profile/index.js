import {connect} from 'react-redux';
import component from './component';

import {
  fetchLogout,
  fetchUserAcceptEmail,
  fetchSetFirstName,
  fetchSetSecondName,
} from 'actions/user';

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchLogout: () => dispatch(fetchLogout()),
    setFirstName: (data) => dispatch(fetchSetFirstName(data)),
    setSecondName: (data) => dispatch(fetchSetSecondName(data)),
    fetchUserAcceptEmail: (data) => dispatch(fetchUserAcceptEmail(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(component);
