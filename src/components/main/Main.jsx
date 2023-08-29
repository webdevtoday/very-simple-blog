import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions/posts";
import Post from "./post/Post";
import { Row } from "react-bootstrap";
import Loader from "../loader/Loader";
import ErrorAlert from "../erroralert/ErrorAlert";

const Main = () => {
  const dispatch = useDispatch();

  const isFetching = useSelector((state) => state.posts.isFetching);
  const posts = useSelector((state) => state.posts.items);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <Row className="g-4">
      {error && <ErrorAlert message={error} />}

      {!isFetching ? (
        posts.map((post) => <Post key={post.id} post={post} />)
      ) : (
        <Loader />
      )}
    </Row>
  );
};

export default Main;
