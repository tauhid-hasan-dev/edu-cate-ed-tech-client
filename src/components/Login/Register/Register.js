import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';




const Register = () => {
    const { createUser } = useContext(AuthContext);



    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photourl.value;
        const password = form.password.value;
        console.log(name, email, photoURL, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

            })
            .catch(e => {
                console.error(e);
            })
    }

    return (
        <div className='px-5 lg:px-20  py-10  flex flex-col items-center text-slate-300 bg-gray-800'>
            <form onSubmit={handleSignUp} className="p-7 lg:p-10  border rounded border-green-300 w-[350px]   lg:w-[450px] " >
                <p className='text-center text-2xl  font-semibold'>Register</p>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-slate-300">Full Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Your Full Name" className="input input-bordered text-green-700 font-semibold " required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-slate-300">Photo Url</span>
                    </label>
                    <input type="text" name='photourl' placeholder="Your Photo Url" className="input input-bordered text-green-700 font-semibold " required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-slate-300">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="Your Valid Email" className="input input-bordered text-green-700 font-semibold " required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-slate-300">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="Password" className="input input-bordered text-green-700 font-semibold " required />

                </div>
                <div className='text-red-600 bg-red-100 mb-3 mt-2 '>
                    {/* {error} */}
                </div>
                <div >
                    <input type="checkbox" id="terms" name="terms" value="terms" />
                    <label htmlFor="terms"> {<>
                        Accept <Link to='/terms' className="underline text-green-500">Terms and Conditions</Link>
                    </>}</label>
                </div>
                <div className="form-control mt-6">
                    <button type='submit' className="btn  text-black border-btn-color hover:bg-green-500 hover:border-green-500 bg-green-400 border-green-400">Register</button>
                </div>
                <div className="text-center">
                    <small className="mr-2">Already have an account?</small>
                    <Link
                        to="/login"
                        className="label-text-alt link link-hover text-green-500"
                    >
                        Please Login
                    </Link>
                </div>
            </form>
            <div className='mb-3 mt-3'>
                Register with one of the following
            </div>
            <div className='flex flex-row justify-center gap-3 mb-5 w-[25%]'>
                <button className="btn btn-outline btn-success rounded  flex gap-2"><FaGoogle />Google </button>
                <button className="btn btn-outline btn-success rounded flex gap-2 "><FaGithub /> Github</button>
            </div>

            {/*  {
                openModal && <Reset handleResetPassword={handleResetPassword}></Reset>
            } */}


        </div >
    );
};

export default Register;