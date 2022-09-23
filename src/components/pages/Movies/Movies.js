import Header from "../../common/Header/Header";

import './Movies.css';

function Movies(props) {
  const {
    onMenuPopup: handleMenuPopup,
  } = props;
  return (
    <div className="Movies">
      <Header
        isLoggedIn={true}
        onMenuPopup={handleMenuPopup}
      />
      Movies
    </div>
  );
}

export default Movies;