import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(e => {
                console.error(e);
            })
    }

    return (
        <div className="navbar bg-black  border-b border-slate-800 shadow-md px-5  lg:px-28 py-5 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden text-white text-6xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3  shadow  rounded-box w-52 flex flex-col gap-5 bg-slate-800 text-white p-5">
                        <NavLink
                            to="/home"
                            className={({ isActive }) =>
                                isActive ? 'text-green-500 border-b-2 border-logo-color' : undefined
                            }
                        >Home</NavLink>

                        <NavLink to='/courses' className={({ isActive }) =>
                            isActive ? 'text-green-500 border-b-2 border-logo-color' : undefined
                        } >Courses</NavLink>

                        <NavLink to='/blog' className={({ isActive }) =>
                            isActive ? 'text-green-500 border-b-2 border-logo-color' : undefined
                        }>Blog</NavLink>

                        <NavLink to='/faq' className={({ isActive }) =>
                            isActive ? 'text-green-500 border-b-2 border-logo-color' : undefined
                        }>FAQ</NavLink>
                    </ul>
                </div>
                <Link to="/" className="normal-case text-2xl  lg:text-4xl text-green-500 font-bold ">
                    edu-Cate</Link>
            </div>
            <div className=" navbar-center hidden lg:flex h-16 w-16 ">
                {/*  <FontAwesomeIcon icon={faBurger} /> */}
                <img src='' alt="" />

            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-slate-100 gap-10 text-lg ">
                    <NavLink
                        to="/home"
                        className={({ isActive }) =>
                            isActive ? 'text-green-500 border-b-2 border-logo-color' : undefined
                        }
                    >Home</NavLink>

                    <NavLink to='/courses' className={({ isActive }) =>
                        isActive ? 'text-green-500 border-b-2 border-logo-color' : undefined
                    } >Courses</NavLink>

                    <NavLink to='/blog' className={({ isActive }) =>
                        isActive ? 'text-green-500 border-b-2 border-logo-color' : undefined
                    }>Blog</NavLink>

                    <NavLink to='/faq' className={({ isActive }) =>
                        isActive ? 'text-green-500 border-b-2 border-logo-color' : undefined
                    }>FAQ</NavLink>
                </ul>

            </div>

            {
                user?.uid ?
                    <>
                        <img title={user?.displayName} className='ml-1 lg:ml-5 w-8 h-8 lg:w-14 lg:h-14 rounded-full' src={user?.photoURL} alt="" />
                        <Link to='/login' className='pl-8 lg:pl-5'><button onClick={handleLogOut} className="btn  btn-sm lg:btn-md rounded btn-error">LogOut</button></Link>
                    </> :
                    <Link to='/login' className='pl-20 lg:pl-10'><button className="btn  btn-sm lg:btn-md btn-success">Login</button></Link>
            }


        </div>
    );
};

export default Header;