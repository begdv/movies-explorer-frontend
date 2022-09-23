import Header from "../../common/Header/Header";

import './SavedMovies.css';

function SavedMovies(props) {
  const {
    onMenuPopup: handleMenuPopup,
  } = props;
  return (
    <div className="SavedMovies">
      <Header
        isLoggedIn={true}
        onMenuPopup={handleMenuPopup}
      />
      SavedMovies
    </div>
  );
}

export default SavedMovies;