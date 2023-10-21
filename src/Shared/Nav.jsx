import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import Swal from 'sweetalert2'
import {BsCart4} from 'react-icons/bs'
import useCart from "../Hooks/useCart";

const Nav = () => {

  const {user , logOut} = useContext(AuthContext)
  const [cart] = useCart();

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Log Out'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Log Out',
          'successFully',
          logOut()
        )
      }
    })
    // console.log();
  }

/*   useEffect(()=>{

  }, []) */



  return (
    <nav className="bg-black md:bg-opacity-50 md:fixed z-50 w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink to="/home" className="flex items-center">
          
          <span className="text-transparent pt-2 mb-4 font-black bg-clip-text bg-gradient-to-br text-2xl from-yellow-400 to-orange-400">
            EATER
          </span>
        </NavLink> 
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex  flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg text-white md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <NavLink
                to="/"
                className="link-of-nav md:relative top-2 block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="link-of-nav md:relative top-2 block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:border-0 md:p-0 "
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className="link-of-nav md:relative top-2 block py-2 pl-3 pr-4 rounded  md:border-0 md:p-0 "
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu"
                className="link-of-nav md:relative top-2 block py-2 pl-3 pr-4 rounded  md:border-0 md:p-0 "
              >
                Our Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className="link-of-nav md:relative top-2 block py-2 pl-3 pr-4 rounded  md:border-0 md:p-0 "
              >
                Our Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/mycart"
                className="link-of-nav md:relative top-0 flex py-2 pl-3 pr-4 rounded  md:border-0 md:p-0 "
              >
                <BsCart4 size={35} />
                <div className="badge relative right-4 badge-success">{cart?.length}</div>
              </NavLink>
            </li>
            <li>
              {
                user ? 
                <div className="flex gap-16">
                  <button onClick={handleLogout} className="btn-error rounded-3xl py-1 px-4 ">Log Out</button>
                  <img src={user?.photoURL} className="h-12  rounded-full"/>
                </div>:
                <NavLink
                to="/login"
                className="link-of-nav block py-2 md:px-5 bg-orange-600  rounded  md:border-0  "
              >
                Sign In
              </NavLink>
              }
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
