import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="m-5 flex gap-4 justify-center">
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/about'>About</Link>
        </div>
    );
};

export default Header;