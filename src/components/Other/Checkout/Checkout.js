import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const courseInfo = useLoaderData();
    const { title } = courseInfo;

    return (
        <div>
            <div className='flex justify-center'>
                <div className='px-5 lg:px-20  py-10  flex flex-col items-center '>
                    <p className='text-2xl pb-5'>Checkout for <span className='text-green-600 text-3xl font-bold'>{title}</span> course</p>
                    <form className="p-7 lg:p-10  border-2 border-green-300 w-[350px]   lg:w-[450px] " >
                        <p className='text-center text-2xl  font-semibold'>Shipping Information</p>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Full Name" className="input input-bordered " required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Adress</span>
                            </label>
                            <input type="text" name='photourl' placeholder="Adress" className="input input-bordered " required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='photourl' placeholder="Adress" className="input input-bordered " required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="text" name='photourl' placeholder="Adress" className="input input-bordered " required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Country</span>
                            </label>
                            <input type="email" name='email' placeholder="Country" className="input input-bordered " required />
                        </div>
                        <div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">City</span>
                                </label>
                                <input type="text" name='email' placeholder="City" className="input input-bordered " required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Postal code</span>
                                </label>
                                <input type="text" name='email' placeholder="Postal Code" className="input input-bordered " required />
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn  text-black border-btn-color hover:bg-green-500 hover:border-green-500 bg-green-400 border-green-400">Continue to payment method</button>
                        </div>
                    </form>
                </div >






            </div>
        </div>
    );
};

export default Checkout;