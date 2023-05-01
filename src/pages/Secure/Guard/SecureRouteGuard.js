import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function SecureRouteGuard() {
  const { token } = useSelector( (state) => state.user );

  return (token !== null) ? <Outlet /> : <Navigate to="/authentication" />
}