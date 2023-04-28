import UserAuthenticate from "./component/UserAuthenticate";
import Main from "./router/Main";
import Nav from "./router/Nav";
import { useDispatch, useSelector } from 'react-redux';
import { reload } from "./slice/userSlice";
import { useCallback, useEffect } from "react";
import axios from "axios";

function App() {
  const dispatch = useDispatch();
  dispatch( reload() );
  
  const { token } = useSelector( state => state.user ); 

  const setHeaders = useCallback( async () => {
    await axios.interceptors.request.use( (request) => {
      request.headers.authorization = `Bearer ${token}`;
      return request;
    })
  }, [token])

  useEffect( () => {
    setHeaders();
  }, [setHeaders]);
  
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
