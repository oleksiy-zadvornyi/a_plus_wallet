import { combineReducers } from "redux";

import toast from "./toast";
import networkIndicator from "./networkIndicator";

export default combineReducers({
  toast,
  networkIndicator,
});
