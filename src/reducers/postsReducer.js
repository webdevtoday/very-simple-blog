const SET_IS_FETCHING = "SET_IS_FETCHING";
const SET_POSTS = "SET_POSTS";
const SET_ERROR = "SET_ERROR";

export default function postsReducer(
  state = {
    items: [],
    isFetching: true,
    error: "",
  },
  action
) {
  switch (action.type) {
    case SET_IS_FETCHING:
      return { ...state, isFetching: action.payload };
    case SET_POSTS:
      return { ...state, items: action.payload, isFetching: false };
    case SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export const setIsFetching = (flag) => ({
  type: SET_IS_FETCHING,
  payload: flag,
});
export const setPosts = (posts) => ({ type: SET_POSTS, payload: posts });
export const setError = (error) => ({ type: SET_ERROR, payload: error });
