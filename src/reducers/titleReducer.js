export const TOGGLE_EDITING = "TOGLE_EDITING";
export const SET_TITLE = "SET_TITLE";

export const initialTitleState = {
  title: "title from reducer!",
  editing: false
};

export const titleReducer = (state, action) => {
  console.log(`bk: titleReducer.js: state,action: `, state, action);
  // if (action.type === "TOGGLE_EDITING") {
  //   return {
  //     ...state,
  //     editing: !state.editing
  //   };
  // } else if (action.type === "SET_TITLE") {
  //   return {
  //     ...state,
  //     title: action.payload,
  //     editing: false
  //   };
  // }
  // return state;
  switch (action.type) {
    case TOGGLE_EDITING:
      return {
        ...state,
        editing: !state.editing
      };
    case SET_TITLE:
      return {
        ...state,
        title: action.payload,
        editing: false
      };
    default:
      return state;
  }
};
