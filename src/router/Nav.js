import { Link } from "react-router-dom";
import NavAdmin from "./NavAdmin";

export default function Nav() {

  return (
    <>
      <nav className="nav">
        <Link to="/" className="nav-link">Accueil</Link>
        <Link to="/presentation" className="nav-link">Présentation</Link>
        <Link to="/fragment" className="nav-link">Les Fragments</Link>
        <Link to="/assets" className="nav-link">Les Assets</Link>
        <Link to="/state" className="nav-link">Etat Local</Link>
        <Link to="/hooks" className="nav-link">Les Hooks</Link>
        <Link to="/user/detail" className="nav-link">Détail Utilisateur</Link>
        <Link to="/router" className="nav-link">Router DOM</Link>
        <Link to="/redux" className="nav-link">Redux</Link>
        <Link to="/show/counter" className="nav-link">Show Counter</Link>
        <Link to="/products" className="nav-link">Liste des produits</Link>
      </nav>
      <nav className="nav">
        <NavAdmin />
      </nav>
    </>
  );
}