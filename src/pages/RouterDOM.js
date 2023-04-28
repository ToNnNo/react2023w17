import { Link, Navigate, Route, Routes } from "react-router-dom";
import Redirection from "./RouterDOM/Redirection";
import Params from "./RouterDOM/Params";
import NotFound from "./NotFound";

export default function RouterDOM() {

  return (
    <>
      <h2>Router DOM</h2>

      <nav className="nav">
        <Link to="" className="nav-link">Bienvenue</Link>
        <Link to="react" className="nav-link">React 18</Link>
        <Link to="react15" className="nav-link">React 15</Link>
        <Link to="redirection" className="nav-link">Redirection</Link>
        <Link to="detail/john" className="nav-link">Information sur John</Link>
        <Link to="detail/jane" className="nav-link">Information sur Jane</Link>
      </nav>

      <Routes>
        <Route index element={ <h3>Bienvenue sur application React !</h3> } />
        <Route path='react' element={ <h3>Formation React + Redux</h3> } />
        <Route path='react15' element={ <Navigate to='/router/react' /> } />
        <Route path='redirection' element={ <Redirection /> } />
        <Route path='detail/:name' element={ <Params /> } />
        <Route path="*" element={ <NotFound />} />
      </Routes>
    </>
  )
}