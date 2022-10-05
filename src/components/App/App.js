import React from 'react';
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "../common/Header/Header";
import Main from "../pages/Main/Main";
import Movies from "../pages/Movies/Movies";
import SavedMovies from "../pages/SavedMovies/SavedMovies";
import Profile from "../pages/Profile/Profile";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import MenuPopup from "../popups/MenuPopup/MenuPopup";

import {moviesDef} from "../../utils/const";
import {getInitialShowCardsCount, setResizeShowCardsCount, setAppendShowCardsCount} from "../../utils/utils";

function App() {
  const [isMenuPopupOpen, setIsMenuPopupOpen] = React.useState(false);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [showCards, setShowCards] = React.useState(0);
  const [showSavedCards, setShowSavedCards] = React.useState(0);
  const [movies, setMovies] = React.useState([]);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowCards(getInitialShowCardsCount(window.innerWidth));
      setShowSavedCards(getInitialShowCardsCount(window.innerWidth));
      setMovies(moviesDef);
      setIsLoaded(true);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  },[]);
  React.useEffect(() => {
    var resizeTimeout;
    const handleResize = () => {
      if ( !resizeTimeout ) {
        resizeTimeout = setTimeout(function() {
          resizeTimeout = null;
          setShowCards(setResizeShowCardsCount(showCards, window.innerWidth));
          setShowSavedCards(getInitialShowCardsCount(showSavedCards, window.innerWidth));
         }, 500);
      }
    }
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [showCards, showSavedCards])
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
  const handleCardDelete = (deletedCard) => {
    setMovies(
      movies.map(
        moviesCard => {
          if(deletedCard.id === moviesCard.id){
            moviesCard.liked = false;
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
    setShowCards(showCards + setAppendShowCardsCount(window.innerWidth));
  }
  const handleClickSaveCardsMore = () => {
    setShowSavedCards(showSavedCards + setAppendShowCardsCount(window.innerWidth));
  }
  const closePopups = () => {
    setIsMenuPopupOpen(false);
  }
  return (
    <div className="App">
      <Header
        isLoggedIn={false}
        onMenuPopup={handleMenuPopup}
      />
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
              movies={movies}
              isLoaded={isLoaded}
              showCards={showSavedCards}
              onCardDelete={handleCardDelete}
              onMenuPopup={handleMenuPopup}
              onCardsMore={handleClickSaveCardsMore}
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
          path="signup"
          element={
            <Register />
          }
        />
        <Route
          path="signin"
          element={
            <Login />
          }
        />
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
