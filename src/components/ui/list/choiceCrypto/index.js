import {connect} from 'react-redux';
import component from './component';

function mapStateToProps(state) {
  return {
    cryptoWallets: state.cryptoWallets,
  };
}

export default connect(mapStateToProps, null)(component);
