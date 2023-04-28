import axios from "axios";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { save } from "../slice/userSlice";
import { useNavigate } from "react-router-dom";

export default function Authentication() {

  const {register, handleSubmit, formState: { errors }, setError, clearErrors } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function onSubmit(data){
    try {
      // console.log(data);
      const result = await axios.post('http://localhost:3200/authentication', data);
      // console.log(result.data);
      dispatch( save({ data: result.data }) );
      navigate('/');
    } catch(e) {
      setError('authentication', { type: 'custom', message: e.response.data.message });
    }
  }
 
  return (
    <>
      <h2>Authentification</h2>
      
      <div className="row row-cols-4 justify-content-center mb-3">
        <form onSubmit={ handleSubmit(onSubmit) }>
          { errors.authentication && (
            <div className="alert alert-danger alert-dismissible">
              { errors.authentication.message }
              <button type="button" className="btn-close" onClick={ () => { clearErrors(['authentication']) }}></button>
            </div>
          )}
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input type="text" className="form-control" { ...register('username', { required: 'Ce champs est obligatoire' }) } />
            { errors.username && <p className="text-danger">{ errors.username.message }</p> }
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" { ...register('password', { required: 'Ce champs est obligatoire' }) } />
            { errors.password && <p className="text-danger">{ errors.password.message }</p> }
          </div>
          <button className="btn btn-outline-primary">Se connecter</button>
        </form>
      </div>
    </>
  )
}