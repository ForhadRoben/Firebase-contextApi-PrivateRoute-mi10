import React, { useContext } from 'react';
import { AuthContest } from '../providers/AuthProviders';

const Home = () => {
    const { user } = useContext(AuthContest)
    console.log(user);
    return (
        <div>
            <h2>This is Home {user && user.displayName} </h2>

        </div>
    );
};

export default Home;