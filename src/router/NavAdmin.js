import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function NavAdmin() {
  const { user } = useSelector( (state) => state.user );

  const isAuthenticate = useMemo( () => null != user, [user] );

  return (
    <nav className="nav">
      { 
        !isAuthenticate ? 
        <Link to="/authentication" className="nav-link">Se connecter</Link> :  
        (
          <>
            <Link to="/secure" className="nav-link">Admin Dashboard</Link> 
            <Link to="/secure/quote" className="nav-link">Citation</Link> 
          </>
        )
      }
    </nav>
  );
}