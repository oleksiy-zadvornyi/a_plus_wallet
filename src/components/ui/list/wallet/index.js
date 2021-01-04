import {connect} from 'react-redux';
import component from './component';

function mapStateToProps(state) {
  return {
    account: state.account,
    emptyAccount: state.settings.emptyAccount,
  };
}

export default connect(mapStateToProps, null)(component);
