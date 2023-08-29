import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPost } from "../actions/posts";
import { Button, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setError } from "../../reducers/postsReducer";

const Post = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();

  const [post, setPost] = useState({});

  useEffect(() => {
    getPost(id, setPost).catch((e) => {
      dispatch(setError(e.message));
      navigate("/");
    });
  }, []);

  return (
    <Row>
      <Button onClick={() => navigate(-1)} variant="primary">
        Back
      </Button>
      <p>{post.content}</p>
    </Row>
  );
};

export default Post;
