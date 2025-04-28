import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Books from "./pages/Books";
import Publish from "./pages/Publish";

import "./App.css";

function App() {
  return React.createElement(
    Router,
    null,
    React.createElement(
      "div",
      { className: "App" },
      React.createElement(
        Routes,
        null,
        React.createElement(Route, {
          path: "/",
          element: React.createElement(Home),
        }),
        React.createElement(Route, {
          path: "/about",
          element: React.createElement(About),
        }),
        React.createElement(Route, {
          path: "/contact",
          element: React.createElement(Contact),
        }),
        React.createElement(Route, {
          path: "/books",
          element: React.createElement(Books),
        }),
        React.createElement(Route, {
          path: "/publish",
          element: React.createElement(Publish),
        })
      )
    )
  );
}

export default App;
