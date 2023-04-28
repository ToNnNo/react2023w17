import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../slice/userSlice";

export default function UserAuthenticate() {

  const { user } = useSelector( (state) => state.user );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function signOut() {
    dispatch( logout() );
    navigate('/');
  }

  if(!user){
    return null;
  }

  return (
    <p className="text-end">
      Bonjour { user.grade } { user.lastname }&nbsp;
      (<button className="btn btn-link p-0" onClick={ signOut }>Déconnexion</button>)
    </p>
  );
}