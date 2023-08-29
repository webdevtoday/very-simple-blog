import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Main from "./main/Main";
import Post from "./post/Post";

const App = () => (
  <BrowserRouter>
    <Container>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/articles/:id" element={<Post />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Container>
  </BrowserRouter>
);

export default App;
