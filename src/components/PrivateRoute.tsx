import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectAuthState } from "../redux/slices/authSlice";

interface PrivateRouteProps {
  children: ReactElement,
}

const PrivateRoute = (props: PrivateRouteProps) => {
  const auth = useSelector(selectAuthState);

  return (
    auth
      ? props.children
      : <Navigate to='/sign-in'/>
  )
}

export default PrivateRoute