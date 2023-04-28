import { useNavigate } from "react-router-dom";

export default function Redirection() {
  const navigate = useNavigate();

  function saveAndQuit() {
    console.log('Enregistrer les valeurs sur une API ... ');
    navigate('/router');
  }

  return (
    <>
      <h3>Redirection</h3>

      <p>[Un formulaire ... ]</p>
      
      <button className="btn btn-sm btn-outline-primary" onClick={saveAndQuit}>
        Sauvegarder et quitter
      </button>
    </>
  );
}