import { connect } from "react-redux";
import component from "./component";

import { showToast } from "@actions";

function mapDispatchToProps(dispatch) {
  return {
    showToast: (data) => dispatch(showToast(data)),
  };
}

export default connect(null, mapDispatchToProps)(component);
