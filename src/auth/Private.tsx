import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import UserContext from "../context/UserContext";
import Login from "./Login";



function Private() {
    const auth = useContext(UserContext);
    const location = useLocation();
    console.log('this is context', auth);
    if (!auth.isLoggedIn) {
        return <Navigate to="/login" state={{ from: location }} />;
    } 
    return <Outlet/>
}

export default Private;