import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.init";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const [user] = useAuthState(auth);

  console.log("requer auth", user);

  let location = useLocation();

  if (!user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
