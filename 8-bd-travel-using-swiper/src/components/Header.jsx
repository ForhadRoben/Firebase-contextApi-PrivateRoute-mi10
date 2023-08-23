// import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
// import { BsSearch } from 'react-icons/bs';
// import { AuthContext } from './AuthProvider';
// import Loader from './Loader';

const Header = () => {
    // const {loading, user , signOutUser} = useContext(AuthContext)

    return (
        <div className='flex justify-between pt-8'>
            <div>
                <Link to='/'><h2 className='text-xl font-bold'>Travel Guru</h2></Link>
            </div>

            <div className='flex gap-3 justify-center items-center rounded-lg '>
                <NavLink >News</NavLink>
                <NavLink >Destination</NavLink>
                <NavLink >Blog</NavLink>
                <NavLink >Contact</NavLink>



            </div>
        </div>
    );
};

export default Header;