import { Link, Outlet } from "react-router-dom";
import UserContext from "../../context/UserContext";

type setUserType = (username:string, isLoggedIn: boolean) =>void;
type toggleLogintype = (state: boolean) => void;


function Navbar() {
    function logOut (setUser:setUserType, toggleLogin: toggleLogintype) {
        setUser('', false)
        toggleLogin(false);
    }
    return ( 
        <UserContext.Consumer>

            {({ isLoggedIn, user, setUser, toggleLogin }) => (
                  
                    <nav>
                        <Link to="/">home</Link>
                        {isLoggedIn ? 
                        <button onClick={() =>logOut(setUser, toggleLogin)} >
                        logOut
                    </button>  :
                        <Link to="/login">login</Link> 
                      
                    }
                        
                        <Outlet />
                    </nav>
                        )}
        </UserContext.Consumer>
     );
}

export default Navbar