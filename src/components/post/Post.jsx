import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPost } from "../actions/posts";
import { Button, Row } from "react-bootstrap";

const Post = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [post, setPost] = useState({});

  useEffect(() => {
    getPost(id, setPost);
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
