const SET_IS_FETCHING = "SET_IS_FETCHING";
const SET_POSTS = "SET_POSTS";

export default function postsReducer(
  state = {
    items: [],
    isFetching: true,
  },
  action
) {
  switch (action.type) {
    case SET_IS_FETCHING:
      return { ...state, isFetching: action.payload };
    case SET_POSTS:
      return { ...state, items: action.payload, isFetching: false };
    default:
      return state;
  }
}

export const setIsFetching = (flag) => ({
  type: SET_IS_FETCHING,
  payload: flag,
});
export const setPosts = (posts) => ({ type: SET_POSTS, payload: posts });
