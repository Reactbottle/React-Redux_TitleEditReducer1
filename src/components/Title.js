import React, { useState, useReducer } from "react";

import {
  initialTitleState,
  titleReducer,
  TOGGLE_EDITING,
  SET_TITLE
} from "../reducers/titleReducer";

/*
  what is a reducer?
  1. reducer is a function that takes 2 arguments: (state={}, action={})
  2. reducer will then, based on the action, create a new state from existing state
  3. if the reducer is not interested in the action, it returns the existing state
  4. reducer will return the new state

  define action:
  1. object that has a required `type` key
  2. object that has an optional `payload` key (doesn't need to be called payload)
*/

const Title = (props) => {
  const [newTitleText, setNewTitleText] = useState();
  const [state, dispatch] = useReducer(titleReducer, initialTitleState);
  // const [editing, setEditing] = useState(false);
  // const [title, setTitle] = useState("My Title");

  // console.log(`bk: Title.js: state: `, state);

  const handleChanges = (e) => {
    setNewTitleText(e.target.value);
  };

  return (
    <div>
      {!state.editing ? (
        <h1>
          {state.title}{" "}
          <i
            className="far fa-edit"
            onClick={() => {
              // setEditing(!state.editing);
              dispatch({ type: TOGGLE_EDITING });
            }}
          />
        </h1>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={newTitleText}
            onChange={handleChanges}
          />
          <button
            onClick={() => {
              dispatch({
                type: SET_TITLE,
                payload: newTitleText
              });
              // dispatch({
              //   type: "TOGGLE_EDITING"
              // });
              // setTitle(newTitleText);
              // setEditing(false);
              // setNewTitleText("");
            }}
          >
            Update title
          </button>
        </div>
      )}
    </div>
  );
};

export default Title;
