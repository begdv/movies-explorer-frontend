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

import {moviesDef} from "../../utils/const";

function App() {
  const [isMenuPopupOpen, setIsMenuPopupOpen] = React.useState(false);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [showCards, setShowCards] = React.useState(4);
  const [movies, setMovies] = React.useState([]);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setMovies(moviesDef);
      setIsLoaded(true);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  });
  const handleCardLike = (likedCard) => {
    setMovies(
      movies.map(
        moviesCard => {
          if(likedCard.id === moviesCard.id){
            moviesCard.liked = (!moviesCard.liked) ? true : false;
          }
          return moviesCard;
        }
      )
    );
  }
  const handleMenuPopup = () => {
    setIsMenuPopupOpen(true);
  }
  const handleClickCardsMore = () => {
    setShowCards(showCards + 4);
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
            <Movies
              movies={movies}
              isLoaded={isLoaded}
              showCards={showCards}
              onCardLike={handleCardLike}
              onMenuPopup={handleMenuPopup}
              onCardsMore={handleClickCardsMore}
            />
          }
        />
        <Route
          path="saved-movies"
          element={
            <SavedMovies
              isLoaded={isLoaded}
              onMenuPopup={handleMenuPopup}
            />
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
