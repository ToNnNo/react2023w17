import { Link } from "react-router-dom";

export default function NotFound() {

  return (
    <>
      <h2>404 - Not Found</h2>

      <p>Cette page n'existe pas ...</p>
      <p>Revenir à la <Link to="/">page d'accueil</Link></p>
    </>
  );
}