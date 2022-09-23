import React from 'react';
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Main from "../pages/Main/Main";
import Movies from "../pages/Movies/Movies";
import SavedMovies from "../pages/SavedMovies/SavedMovies";
import Profile from "../pages/Profile/Profile";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import MenuPopup from "../popups/MenuPopup/MenuPopup";

function App() {
  const [isMenuPopupOpen, setIsMenuPopupOpen] = React.useState(false);
  const handleMenuPopup = () => {
    setIsMenuPopupOpen(true);
  }
  const closePopups = () => {
    setIsMenuPopupOpen(false);
  }
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Main onMenuPopup={handleMenuPopup}/>
          }
        />
        <Route
          path="movies"
          element={
            <Movies onMenuPopup={handleMenuPopup}/>
          }
        />
        <Route
          path="saved-movies"
          element={
            <SavedMovies onMenuPopup={handleMenuPopup}/>
          }
        />
        <Route
          path="profile"
          element={
            <Profile onMenuPopup={handleMenuPopup}/>
          }
        />
        <Route
          path="signin"
          element={
            <Login />
          }
        />
        <Route
          path="signup"
          element={
            <Register />
          } />
        <Route
          path="*"
          element={
            <NotFound />
          }
        />
      </Routes>
      <MenuPopup
        isOpen={isMenuPopupOpen}
        onClose={closePopups}
      />
    </div>
  );
}

export default App;
