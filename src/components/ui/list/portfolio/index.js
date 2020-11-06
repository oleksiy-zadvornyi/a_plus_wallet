import {connect} from 'react-redux';
import component from './component';

function mapStateToProps(state) {
  return {
    transactions: state.transactions,
  };
}

export default connect(mapStateToProps, null)(component);
