const toggleDarkThemeReducer = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_DARKTHEME":
      return !state;

    default:
      return false;
  }
};

export default toggleDarkThemeReducer;
