import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContest } from "../providers/AuthProviders";

const Header = () => {
    const { user, logOut } = useContext(AuthContest);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div className="m-5 flex gap-4 justify-center">
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
            {/* <Link to='/contact'>Contact</Link>
            <Link to='/about'>About</Link> */}
            <Link to='/profile'>profile</Link>
            {
                user &&
                <Link to='/career'>Career</Link>
            }

            {
                user ? <>
                    <span>{user.email}</span>
                    <button onClick={handleLogOut} className="btn btn-xs">Sign out</button>
                </> : <Link to="/login">Login </Link>
            }
        </div>
    );
};

export default Header;