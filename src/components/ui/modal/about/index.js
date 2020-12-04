import {connect} from 'react-redux';
import component from './component';

function mapStateToProps(state) {
  return {
    account: state.account,
  };
}

export default connect(mapStateToProps, null)(component);
