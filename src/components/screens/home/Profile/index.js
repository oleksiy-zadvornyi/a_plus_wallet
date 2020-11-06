import {connect} from 'react-redux';
import component from './component';

import {fetchLogout} from 'actions/user';

function mapDispatchToProps(dispatch) {
  return {
    fetchLogout: () => dispatch(fetchLogout()),
  };
}

export default connect(null, mapDispatchToProps)(component);
