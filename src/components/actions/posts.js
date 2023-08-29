import axios from "axios";
import { setError, setIsFetching, setPosts } from "../../reducers/postsReducer";

const BASE_URI = "https://jsonplaceholder.typicode.com";
const POSTS_URI = `${BASE_URI}/posts`;

export const getPosts = () => {
  return async (dispatch) => {
    try {
      dispatch(setIsFetching(true));
      const response = await axios.get(POSTS_URI);
      dispatch(setPosts(normalizePosts(response.data)));
    } catch (e) {
      dispatch(setError(e.message));
      dispatch(setIsFetching(false));
    }
  };
};

export const getPost = async (id, setPost) => {
  const response = await axios.get(`${POSTS_URI}/${id}`);
  setPost(normalizePost(response.data));
};

function normalizePost(post) {
  return {
    id: post.id,
    title: post.title,
    content: post.body,
  };
}

function normalizePosts(posts) {
  return posts.map((post) => normalizePost(post));
}
