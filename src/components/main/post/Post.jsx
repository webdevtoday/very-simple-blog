import React from "react";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Post = ({ post }) => (
  <Card>
    <Card.Body>
      <Card.Title>
        <NavLink to={`/articles/${post.id}`}>{post.title}</NavLink>
      </Card.Title>
    </Card.Body>
  </Card>
);

export default Post;
