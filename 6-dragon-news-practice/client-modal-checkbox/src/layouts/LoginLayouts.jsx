

import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar';

const LoginLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;