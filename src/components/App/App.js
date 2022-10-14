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

import {DEFAULT_FILTER_MOVIE, LOAD_MOVIES_ERROR, NOMOREPARTIES_URL} from '../../utils/const';
import {getMovieFilter} from '../../utils/utils';

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
  const [showCards, setShowCards] = React.useState(getInitialShowCardsCount(window.innerWidth));
  const [movies, setMovies] = React.useState([]);
  const [filterMovie, setFilterMovie] = React.useState(DEFAULT_FILTER_MOVIE);
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [filterSavedMovie, setFilterSavedMovie] = React.useState(DEFAULT_FILTER_MOVIE);
  const [savedMovies, setSavedMovies] = React.useState([]);


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
        const storageFilterMovie = localStorage.getItem('filterMovie');
        setFilterMovie(storageFilterMovie ? JSON.parse(storageFilterMovie) : DEFAULT_FILTER_MOVIE);
        const storageMovies = localStorage.getItem('movies');
        setMovies(storageMovies ? JSON.parse(storageMovies) : []);
        const storageFilterSavedMovie = localStorage.getItem('filterSavedMovie');
        setFilterSavedMovie(storageFilterSavedMovie ? JSON.parse(storageFilterSavedMovie) : DEFAULT_FILTER_MOVIE);
        mainApi.getProfile()
          .then(user => {
            setCurrentUser(user);
            mainApi.getSavedMovies()
              .then(movies => {
                setSavedMovies(movies);
              })
              .catch((err) => {
                return Promise.reject(err);
              });
            })
          .catch((err) => {
            setInfoMessage(err.message);
          });
      } else {
        localStorage.setItem('token', '');
        localStorage.setItem('filterMovie', DEFAULT_FILTER_MOVIE);
        setCurrentUser(null);
        setMovies([]);
        localStorage.setItem('filterSavedMovie',DEFAULT_FILTER_MOVIE);
        setCurrentUser(null);
      }
    }
  }, [isConnected, isLoggedIn])
  React.useEffect(() => {
    var resizeTimeout;
    const handleResize = () => {
      if ( !resizeTimeout ) {
        resizeTimeout = setTimeout(function() {
          resizeTimeout = null;
          setShowCards(setResizeShowCardsCount(showCards, window.innerWidth));
         }, 500);
      }
    }
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [showCards]);
  React.useEffect(() => {
    if(isLoggedIn) {
      setFilteredMovies(movies.reduce((result, movie) => {
        if(getMovieFilter(movie, filterMovie)){
          result.push({
            id : movie.id,
            country : movie.country,
            director : movie.director,
            year: movie.year,
            description :movie.description,
            thumbnail : movie.image.formats.thumbnail.url && (NOMOREPARTIES_URL + movie.image.formats.thumbnail.url),
            nameRU: movie.nameRU ? movie.nameRU : '',
            nameEN: movie.nameEN ? movie.nameEN : '',
            trailerLink : movie.trailerLink ? movie.trailerLink : '',
            image : movie.image.url && movie.image.url ? (NOMOREPARTIES_URL + movie.image.url) : '',
            duration : movie.duration ? movie.duration : '',
            saved: savedMovies.some((movieSaved) => movieSaved.movieId === movie.id),
          })
        }
        return result;
      }, []));
    }
  }, [isLoggedIn, movies, savedMovies, filterMovie]);
  const handleLogin = (data) => {
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
  const handleLogout = () => {
      setIsLoggedIn(false);
  }
  const handleMovieSave = (movieSaved) => {
    mainApi.saveMovie({
        country: movieSaved.country,
        director: movieSaved.director,
        duration: movieSaved.duration,
        year: movieSaved.year,
        description: movieSaved.description,
        image: movieSaved.image,
        trailerLink: movieSaved.trailerLink,
        thumbnail: movieSaved.thumbnail,
        movieId: movieSaved.id,
        nameRU: movieSaved.nameRU,
        nameEN: movieSaved.nameEN,
      })
      .then((movie) => {
        setSavedMovies([movie, ...savedMovies]);
        setInfoMessage('');
      })
      .catch((err) => {
        setInfoMessage(err.message);
    })
  }
  const handleMovieDelete = (movieDeleted) => {
    const movieDeletedId = (movieDeleted._id) ? movieDeleted._id :
      savedMovies.find((movieSaved) => movieSaved.movieId === movieDeleted.id)._id;
    mainApi.removeMovie(movieDeletedId)
    .then(() => {
      setSavedMovies(savedMovies.filter(movie => movie._id !== movieDeletedId));
      setInfoMessage('');
    }).catch((err) => {
      setInfoMessage(err.message);
    })    
  .finally(() => {
    setIsLoading(false);
  });  
  }
  const handleMenuPopup = () => {
    setIsMenuPopupOpen(true);
  }
  const handleCardsMore = () => {
    setShowCards(showCards + setAppendShowCardsCount(window.innerWidth));
  }
  const handleFilterMovie = (filterValue) => {
    setFilterMovie(filterValue);
    localStorage.setItem('filterMovie', JSON.stringify(filterValue));
    setInfoMessage('');
    if(!movies.length){
      setIsLoading(true);
      moviesApi.getMovies()
        .then(data => {
          setMovies(data);
          localStorage.setItem('movies', JSON.stringify(data));
        })
        .catch((err) => {
          setInfoMessage(LOAD_MOVIES_ERROR);
        })
        .finally(() => {
          setIsLoading(false);
        })
    }
  }
  const handleFilterSavedMovie = (filterValue) => {
    setFilterSavedMovie(filterValue);
    localStorage.setItem('filterSavedMovie', JSON.stringify(filterValue));
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
                {
                  currentUser && <Movies
                    filterMovie={filterMovie}
                    movies={filteredMovies}
                    isLoading={isLoading}
                    showCards={showCards}
                    errorMessage={infoMessage}
                    onFilterMovie={handleFilterMovie}
                    onMovieSave={handleMovieSave}
                    onMovieDelete={handleMovieDelete}
                    onCardsMore={handleCardsMore}
                  />
                }
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
                {
                  currentUser && <SavedMovies
                    filterSavedMovie={filterSavedMovie}
                    savedMovies={savedMovies}
                    isLoading={isLoading}
                    errorMessage={infoMessage}
                    onFilterSavedMovie={handleFilterSavedMovie}
                    onMovieDelete={handleMovieDelete}
                  />
                }
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
                  {
                    currentUser && <Profile
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
