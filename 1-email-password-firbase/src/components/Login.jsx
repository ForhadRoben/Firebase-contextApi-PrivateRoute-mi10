import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, updateEmail } from "firebase/auth";
import { Link } from "react-router-dom";
import app from "../firebase/firebase.config";
import { useRef, useState } from "react";

const auth = getAuth(app)
const Login = () => {
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

        signInWithEmailAndPassword(auth, email, password)
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
        sendPasswordResetEmail(auth, email)
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
                            <button type="submit" className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p className="m-5"><small>Do not have an account? Please <Link to="/register" className="underline text-blue-800">Register</Link> </small></p>
                    <p className='text-red-600 mb-5'>{error}</p>
                    <p className='text-green-600'>{success}</p>
                </div>
            </div>
        </div>
    );
};

export default Login;