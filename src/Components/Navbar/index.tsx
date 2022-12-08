import { Link, Outlet } from "react-router-dom";

function Navbar() {
    return ( 
        <nav>
            <Link to="/">home</Link>
            <Outlet />
        </nav>
     );
}

export default Navbar;