import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app)
const Home = () => {

    // Get a user's profile
    // const loggedUser = auth.currentUser;
    // if (loggedUser !== null) {
    //     // The user object has basic properties such as display name, email, etc.
    //     const displayName = loggedUser.displayName;
    //     const email = loggedUser.email;
    //     const photoURL = loggedUser.photoURL;
    //     const emailVerified = loggedUser.emailVerified;
    //     console.log(displayName, email, photoURL, emailVerified);

    //     // The user's ID, unique to the Firebase project. Do NOT use
    //     // this value to authenticate with your backend server, if
    //     // you have one. Use User.getToken() instead.
    //     return

    // }
    // const { email, emailVerified } = loggedUser
    return (
        <div>
            <h1>This is home</h1>


        </div>
    );
};

export default Home;