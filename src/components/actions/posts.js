import axios from "axios";
import { setIsFetching, setPosts } from "../../reducers/postsReducer";

const BASE_URI = "https://jsonplaceholder.typicode.com";
const POSTS_URI = `${BASE_URI}/posts`;

export const getPosts = () => {
  return async (dispatch) => {
    dispatch(setIsFetching(true));
    const response = await axios.get(POSTS_URI);
    dispatch(setPosts(normalizePosts(response.data)));
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
