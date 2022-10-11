import React from 'react';
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import CurrentUserContext from '../../contexts/CurrentUserContext';
import {mainApi} from '../../api/MainApi';
import {moviesApi} from '../../api/MoviesApi';
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
import InfoPopup from "../popups/InfoPopup/InfoPopup";

import {getInitialShowCardsCount, setResizeShowCardsCount, setAppendShowCardsCount} from "../../utils/utils";

import "./App.css";

function App() {
  const [isConnected, setIsConnected] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState(null);
  const [isMenuPopupOpen, setIsMenuPopupOpen] = React.useState(false);
  const [typeInfo, setTypeInfo] = React.useState('');
  const [infoMessage, setInfoMessage] = React.useState('');
  const [isInfoPopupOpen, setIsInfoPopupOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [showCards, setShowCards] = React.useState(0);
  const [showSavedCards, setShowSavedCards] = React.useState(0);
  const [movies, setMovies] = React.useState([]);
  const navigate = useNavigate();
  React.useEffect(() => {
    mainApi.verifyToken()
      .then((user) => {
        setIsLoggedIn(true);
      })
      .catch((err) => {
        setIsLoggedIn(false);
      })
      .finally(() => {
        setIsConnected(true);
    }); ;
  }, []);
  React.useEffect(() => {
    if(isConnected) {
      if(isLoggedIn) {
        loadUserData();
      } else {
        clearUserData();
      }
    }
  }, [isConnected, isLoggedIn])
  const loadUserData = () => {
    mainApi.getProfile()
      .then(user => {
        setCurrentUser(user);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  const clearUserData = () => {
    localStorage.setItem('token', '');
    setCurrentUser(null);
  }
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
  function handleLogin(data) {
    mainApi.login(data).then((res) => {
      if (res.token){
        setInfoMessage('');
        localStorage.setItem('token', res.token);
        navigate("/movies");
        setIsLoggedIn(true);
      }
    }).catch((err) => {
      setInfoMessage(err.message);
    });
  }
  function handleLogout() {
      setIsLoggedIn(false);
  }
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
              isConnected && !isLoggedIn ? <Navigate to="/" /> :
              <>
                <Header isLoggedIn={true} onMenuPopup={handleMenuPopup} />
                <Movies
                  movies={movies}
                  isLoading={isLoading}
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
              isConnected && !isLoggedIn ? <Navigate to="/" /> :
              <>
                <Header isLoggedIn={true} onMenuPopup={handleMenuPopup} />
                <SavedMovies
                  movies={movies}
                  isLoading={isLoading}
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
              isConnected && !isLoggedIn ? <Navigate to="/" /> :
                <>
                  <Header isLoggedIn={true} onMenuPopup={handleMenuPopup} />
                  { currentUser && <Profile
                    onMenuPopup={handleMenuPopup}
                    onLogout={handleLogout}
                    />
                  }
                </>
            }
          />
          <Route
            path="signup"
            element={
              isConnected && isLoggedIn ? <Navigate to="/movies" /> :
                <>
                  <Header/>
                  <Register />
                </>
            }
          />
          <Route
            path="signin"
            element={
              isConnected && isLoggedIn ? <Navigate to="/movies" /> :
                <>
                  <Header/>
                  <Login
                    onLogin={handleLogin}
                    infoMessage={infoMessage}
                  />
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
        <InfoPopup
          isOpen={isInfoPopupOpen}
          typeInfo={typeInfo}
          infoMessage={infoMessage}
          onClose={closePopups}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
