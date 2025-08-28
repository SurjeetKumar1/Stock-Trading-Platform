import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./Context";
import "./Protectedroute.css";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <>
        <div className="Loadercontainer">
          <div className="🤚">
            <div className="👉"></div>
            <div className="👉"></div>
            <div className="👉"></div>
            <div className="👉"></div>
            <div className="🌴"></div>
            <div className="👍"></div>
          </div>
          <div className="Loading"><p>Loading...</p></div>
        </div>
      </>
    );
  }

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
