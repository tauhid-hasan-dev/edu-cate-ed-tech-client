import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
    return (
        <div className='px-5 lg:px-20  py-10  flex flex-col items-center '>
            <form className="p-10  border-2 border-green-300 w-[350px]   lg:w-[450px] " >
                <p className='text-center text-2xl  font-semibold'>Login with your site account</p>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered " required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />

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
                        <label htmlFor="my-modal-3" className="cursor-pointer underline text-orange-500 ">Reset Password</label>
                    </div>

                </div>
                <div className="form-control mt-6">
                    <button className="btn  text-black border-btn-color hover:bg-green-500 hover:border-green-500 bg-green-400 border-green-400">Login</button>
                </div>
                <div className='text-center'>
                    <small className='mr-2'>New to edu-Cate?</small>
                    <Link to='/register' className="label-text-alt link link-hover text-orange-400">Register Now</Link>
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