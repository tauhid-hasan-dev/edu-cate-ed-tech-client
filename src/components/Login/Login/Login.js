import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../../contexts/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

            })
            .catch(e => {
                console.error(e);
            })

    }

    return (
        <div className='px-5 lg:px-20  py-10  flex flex-col items-center bg-gray-800 text-slate-300'>
            <form onSubmit={handleSignIn} className="p-7 lg:p-10  border rounded border-green-300 w-[350px]   lg:w-[450px] " >
                <p className='text-center text-2xl  font-semibold'>Login with your site account</p>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-slate-300">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered text-green-700 font-semibold " required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-slate-300">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered text-green-700 font-semibold" required />

                </div>
                <div className='text-red-600 bg-red-100 mb-3 mt-2 '>
                    {/* {error} */}
                </div>
                <div className='flex justify-between mt-3'>
                    <div>

                        <label htmlFor="terms"> {<>
                            Forgot Password?
                        </>}</label>
                    </div>
                    <div >
                        <label htmlFor="my-modal-3" className="cursor-pointer underline text-green-500 ">Reset Password</label>
                    </div>

                </div>
                <div className="form-control mt-6">
                    <button className="btn  text-black border-btn-color hover:bg-green-500 hover:border-green-500 bg-green-400 border-green-400">Login</button>
                </div>
                <div className='text-center'>
                    <small className='mr-2'>New to edu-Cate?</small>
                    <Link to='/register' className="label-text-alt link link-hover text-green-500">Register Now</Link>
                </div>
            </form>
            <div className='mb-3 mt-3'>
                Log in with one of the following
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

export default Login;