
import {
    ERROR_REGISTER,
    ERROR_PROFILE,
    ERROR_SIGNING,
    ERROR_PAGENOTFOUND,
    ERROR_CONFLICT,
    ERROR_SERVER
  } from './const';

export const processErrors = (error, action, setInfoMessage, setIsLoggedIn) => {
  if(action === 'loadpage'){
    setIsLoggedIn(false);
    return;
  }
  switch(error.statusCode) {
    case 400:
      switch(action){
        case 'register':
          setInfoMessage(ERROR_REGISTER);
          break;
        case 'profile':
          setInfoMessage(ERROR_PROFILE);
          break;
        case 'login':
          setInfoMessage(ERROR_SIGNING);
          break;
        default:
          setInfoMessage(error.message);
      }
      break;
    case 401:
      if(action === 'login'){
        setInfoMessage(ERROR_SIGNING)
      } else {
        setIsLoggedIn(false);
      }
      break;
    case 404:
      setInfoMessage(ERROR_PAGENOTFOUND);
      break;
    case 409:
      setInfoMessage(ERROR_CONFLICT);
      break;
    default:
      setInfoMessage(ERROR_SERVER);
}

}

