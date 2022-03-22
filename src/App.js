import React from "react";
// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import MyHeader from "./components/MyHeader/MyHeader";
import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";
// Context
import UserProvider from "./Context";
// Styles
import { GlobalStyle } from "./GlobalStyle";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <Router>
      <UserProvider>
        <MyHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/:movieId" element={<Movie />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <GlobalStyle />
      </UserProvider>
    </Router>
  );
};

export default App;
