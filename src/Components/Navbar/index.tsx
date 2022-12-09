import { Link, Outlet } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Search from "../Search";

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
                  
                    <nav className="flex center jc">
                        <div className="flex js center gap-20 "
                        style={{
                            backgroundColor: 'var(--black4)', 
                            opacity: '0.9',
                            width: '80%', 
                            padding: '10px 40px', 
                            borderRadius: '5px', 
                            boxShadow: '0px 2px 1px var(--black2)'
                        }}
                        >
                        <Link to="/">Home</Link>
                        <Search  />
                        {isLoggedIn ? 
                        <button onClick={() =>logOut(setUser, toggleLogin)} >
                        log out
                    </button>  :
                        <Link to="/login">login</Link> 
                      
                    }

                        </div>
                       
                        
                        <Outlet />
                    </nav>
                        )}
        </UserContext.Consumer>
     );
}

export default Navbar