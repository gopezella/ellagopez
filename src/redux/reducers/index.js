import { combineReducers } from "redux";

import toggleDarkThemeReducer from "./toggleDarkThemeReducer";

const rootReducer = combineReducers({
  toggleDarkTheme: toggleDarkThemeReducer,
});

export default rootReducer;
