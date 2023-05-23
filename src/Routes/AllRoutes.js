import React from "react";
import { Route, Routes } from "react-router-dom";
import Gallery from "./Gallery";
import LandingPage from "./LandingPage";
import Posts from "./Posts";
import Profile from "./Profile";
import ProfileHomePage from "./ProfileHomePage";
import ToDo from "./ToDo";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        {/* Route for the landing page */}
        <Route path="/" element={<LandingPage />} />

        {/* Route for the user's profile homepage */}
        <Route path="/profile/:userId" element={<ProfileHomePage />} />

        {/* Route for the user's profile */}
        <Route path="/profile/:userId" element={<Profile />} />

        {/* Route for the user's posts */}
        <Route path="/profile/posts" element={<Posts />} />

        {/* Route for the user's gallery */}
        <Route path="/profile/gallery" element={<Gallery />} />

        {/* Route for the user's to-do list */}
        <Route path="/profile/todo" element={<ToDo />} />

        {/* Route for any other URL */}
        <Route
          path="*"
          element={
            <img
              style={{ margin: "auto" }}
              src="https://i.pinimg.com/originals/11/dc/96/11dc96d2e4daca3ea8ff6aa41299b5e1.gif"
              alt=""
            />
          }
        />
      </Routes>
    </div>
  );
};

export default AllRoutes;
