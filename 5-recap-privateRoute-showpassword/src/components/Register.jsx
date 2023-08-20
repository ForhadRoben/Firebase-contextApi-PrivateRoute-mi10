
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContest } from "../providers/AuthProviders";

const Register = () => {

    const { createUser, signInGoogle, signInGithub } = useContext(AuthContest)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')


    const handleRegister = event => {
        event.preventDefault();

        setError('')
        setSuccess('')

        const form = event.target;
        console.log(form);
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('please provide 2 uppercase')
            return
        }

        // else if (!/(?=.*[!@#$&*])/.test(password)) {
        //     setError('provide special character')
        //     return
        // }
        else if (!password.length >= 6) {
            setError('provide at least six character')
            return
        }
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset()
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message)
            })


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
                    <h1 className="text-5xl font-bold">Register now!</h1>

                </div>
                <div className="card  w-full lg:w-50 shadow-2xl bg-base-100 p-5">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />


                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p className="m-5"><small>Already have an account? Please <Link to="/login" className="underline text-blue-800">Login</Link> </small></p>
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

export default Register;