import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";

import CurrentUserContext from '../../contexts/CurrentUserContext';
import Header from "../common/Header/Header";
import Footer from "../common/Footer/Footer";
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

import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = React.useState(null);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
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
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header isLoggedIn={isLoggedIn} onMenuPopup={handleMenuPopup} />
                <Main onMenuPopup={handleMenuPopup}/>
                <Footer/>
              </>
            }
          />
          <Route
            path="movies"
            element={
              !isLoggedIn ? <Navigate to="/" /> :
              <>
                <Header isLoggedIn={isLoggedIn} onMenuPopup={handleMenuPopup} />
                <Movies
                  isLoggedIn={isLoggedIn}
                  movies={movies}
                  isLoaded={isLoaded}
                  showCards={showCards}
                  onCardLike={handleCardLike}
                  onMenuPopup={handleMenuPopup}
                  onCardsMore={handleClickCardsMore}
                />
                <Footer/>
              </>
            }
          />
          <Route
            path="saved-movies"
            element={
              !isLoggedIn ? <Navigate to="/" /> :
              <>
                <Header isLoggedIn={isLoggedIn} onMenuPopup={handleMenuPopup} />
                <SavedMovies
                  isLoggedIn={isLoggedIn}
                  movies={movies}
                  isLoaded={isLoaded}
                  showCards={showSavedCards}
                  onCardDelete={handleCardDelete}
                  onMenuPopup={handleMenuPopup}
                  onCardsMore={handleClickSaveCardsMore}
                />
                <Footer/>
              </>
            }
          />
          <Route
            path="profile"
            element={
              !isLoggedIn ? <Navigate to="/" /> :
                <>
                  <Header isLoggedIn={isLoggedIn} onMenuPopup={handleMenuPopup} />
                  <Profile onMenuPopup={handleMenuPopup}/>
                </>
            }
          />
          <Route
            path="signup"
            element={
              isLoggedIn ? <Navigate to="/" /> :
                <>
                  <Header/>
                  <Register />
                </>
            }
          />
          <Route
            path="signin"
            element={
              isLoggedIn ? <Navigate to="/" /> :
                <>
                  <Header/>
                  <Login />
                </>
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
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
