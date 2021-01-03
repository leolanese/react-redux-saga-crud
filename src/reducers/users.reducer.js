import { Types } from "../actions/users.action";

// setting initial state
const INITIAL_STATE = {
  items: [],
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    // success
    case Types.GET_USERS_SUCCESS: {
      return {
        ...state,
        items: action.payload.items,
      };
    }
    // error
    case Types.USERS_ERROR: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    // default
    default: {
      return state;
    }
  }
}
