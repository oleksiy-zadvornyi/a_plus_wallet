import {connect} from 'react-redux';
import component from './component';

import {reduceLocale} from 'actions/settings';

function mapDispatchToProps(dispatch) {
  return {
    setLocale: (data) => dispatch(reduceLocale(data)),
  };
}

export default connect(null, mapDispatchToProps)(component);
