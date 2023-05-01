import UserAuthenticate from "./component/UserAuthenticate";
import Main from "./router/Main";
import Nav from "./router/Nav";
import { useDispatch } from 'react-redux';
import { reload } from "./slice/userSlice";
import axios from "axios";
import { getToken } from './service/authenticationService';

function App() {
  const dispatch = useDispatch();
  dispatch( reload() );

  axios.interceptors.request.use( (request) => {
    request.headers.authorization = `Bearer ${getToken()}`;
    return request;
  });  

  axios.interceptors.response.use( (response) => {
    // console.log(response);
    return response;
  });
  
  return (
    <div className="container-fluid">
      <header className="pt-5">
        <h1>Formation React IDP 90</h1>
        <hr />
      </header>
      <Nav />
      <UserAuthenticate />
      <main>
        <Main />
      </main>
      <footer>
        <p className="small text-center">
          Formation React - Dawan Lille - Avril 2023
        </p>
      </footer>
    </div>
  );
}

export default App;
