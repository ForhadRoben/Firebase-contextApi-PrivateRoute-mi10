// import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
// import React, { createContext, useEffect, useState } from 'react';
// import app from '../firebase/firebase.config';


// export const AuthContest = createContext(null)
// const auth = getAuth(app)
// const googleProvider = new GoogleAuthProvider();
// const githubProvider = new GithubAuthProvider();

// const AuthProviders = ({ children }) => {
//     const [user, setUser] = useState(null)
//     const [loading, setLoading] = useState(true)

//     const createUser = (email, password) => {
//         return createUserWithEmailAndPassword(auth, email, password);
//     }

//     const signInUser = (email, password) => {
//         return signInWithEmailAndPassword(auth, email, password)
//     }

// useEffect(() => {
//     const unsubscribe = 
//         onAuthStateChanged(auth, currentUser => {
//             console.log('current User:', currentUser);
//             setUser(currentUser)
//             setLoading(false)

//         })

//     return () => {
//         unsubscribe()
//     }
// }, [])

//     const resetPassword = (email) => {
//         return sendPasswordResetEmail(auth, email)
//     }



//     const signInGoogle = () => {
//         return signInWithPopup(auth, googleProvider)
//     }

//     const signInGithub = () => {
//         return signInWithPopup(auth, githubProvider)
//     }

//     const logOut = () => {
//         return signOut(auth)
//     }



//     const authInfo = {
//         user,
//         loading,
//         createUser,
//         signInUser,
//         signInGoogle,
//         signInGithub, logOut, resetPassword
//     }
//     return (
//         <AuthContest.Provider value={authInfo}>
//             {children}
//         </AuthContest.Provider>
//     );
// };

// export default AuthProviders;
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';


export const AuthContest = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('auth state changed', currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    }, [])
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const signInGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const signInGithub = () => {
        return signInWithPopup(auth, githubProvider)
    }
    const authInfo = {
        user,
        loading, createUser, signInUser, logOut, resetPassword, signInGoogle, signInGithub
    }

    return (
        <AuthContest.Provider value={authInfo}>
            {children}
        </AuthContest.Provider>
    );
};

export default AuthProviders;