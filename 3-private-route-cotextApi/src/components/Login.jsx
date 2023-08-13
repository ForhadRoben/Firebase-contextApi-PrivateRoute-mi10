import { sendPasswordResetEmail } from "firebase/auth";
import { Link } from "react-router-dom";

import { useContext, useRef, useState } from "react";
import { AuthContest } from "../providers/AuthProviders";

const Login = () => {
    const { signInUser, signInGoogle, signInGithub, resetPassword } = useContext(AuthContest)
    const emailRef = useRef()
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleLogin = (event) => {
        event.preventDefault();

        setError('')
        setSuccess('')

        const form = event.target;
        console.log(form);
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset()
                setError('')
                setSuccess('user login successfully')

            })
            .catch(error => {
                const errorMessage = error.message
                console.log(errorMessage);
                setError(errorMessage)
                // form.reset()
            })

    }

    const handleResetPassword = () => {
        const email = emailRef.current.value
        console.log(email);
        if (!email) {
            alert('Please provide your email address to reset password')
            return;
        }
        resetPassword(email)
            .then(() => {
                alert('check your email')
                // ..
            })
            .catch((error) => {
                console.log(error);
                setError(error.message)
                // ..
            });
    }

    const handleGoogleSignIn = () => {
        signInGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.error(error.message)
            })
    }

    const handleGithubSignIn = () => {
        signInGithub()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content w-full lg:w-1/2 flex-col lg:flex-row-reverse ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>

                </div>
                <div className="card  w-full lg:w-50 shadow-2xl bg-base-100 p-5">
                    <form onSubmit={handleLogin} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" ref={emailRef} placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <p><small>Forget Password? Please <button onClick={handleResetPassword} className='underline text-blue-800'>Reset Password</button></small></p>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className="m-5"><small>Do not have an account? Please <Link to="/register" className="underline text-blue-800">Register</Link> </small></p>
                    <p className='text-red-600 mb-5'>{error}</p>
                    <p className='text-green-600'>{success}</p>
                    <div className="flex p-5 gap-6">
                        <button onClick={handleGoogleSignIn} className="btn btn-primary">Google</button>
                        <button onClick={handleGithubSignIn} className="btn btn-primary">Github</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;