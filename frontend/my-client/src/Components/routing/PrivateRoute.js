import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../../Context/auth/authContext';
 
function PrivateRoute({ children }) {
  const authContext = useContext(AuthContext);
  const { isAuthenticated} = authContext;
 
  return !isAuthenticated ? <Navigate to="/login" /> : children;
}
 
export default PrivateRoute;