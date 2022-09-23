import Header from "../../common/Header/Header";

import './Profile.css';

function Profile(props) {
  const {
    onMenuPopup: handleMenuPopup,
  } = props;
  return (
    <div className="Profile">
      <Header
        isLoggedIn={true}
        onMenuPopup={handleMenuPopup}
      />
      Profile
    </div>
  );
}

export default Profile;