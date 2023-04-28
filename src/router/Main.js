import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Presentation from "../pages/Presentation";
import Fragment from "../pages/Fragment";
import Assets from "../pages/Assets";
import State from "../pages/State";
import Hooks from "../pages/Hooks";
import DetailUser from "../pages/DetailUser";
import RouterDOM from "../pages/RouterDOM";
import NotFound from "../pages/NotFound";
import Redux from "../pages/Redux";
import ShowCounter from "../pages/ShowCounter";
import Authentication from "../pages/Authentication";
import Quote from "../pages/Secure/Quote";

export default function Main() {
    return (
        <Routes>
            <Route index element={ <Home /> } />
            <Route path="presentation" element={ <Presentation /> } />
            <Route path="fragment" element={ <Fragment /> } />
            <Route path="assets" element={ <Assets /> } />
            <Route path="state" element={ <State /> } />
            <Route path="hooks" element={ <Hooks /> } />
            <Route path="user/detail" element={ <DetailUser /> } />
            <Route path="router/*" element={ <RouterDOM /> } />
            <Route path="redux" element={ <Redux /> } />
            <Route path="show/counter" element={ <ShowCounter /> } />
            <Route path="authentication" element={ <Authentication /> } />
            <Route path="quote" element={ <Quote /> } />
            <Route path="*" element={ <NotFound />} />
        </Routes>
    )
}