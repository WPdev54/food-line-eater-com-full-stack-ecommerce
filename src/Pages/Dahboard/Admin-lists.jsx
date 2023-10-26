import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsFillMenuButtonWideFill , BsBookHalf , } from 'react-icons/bs'
import {FaUsers} from 'react-icons/fa'
import {BiSolidHomeAlt2} from 'react-icons/bi'
import {ImSpoonKnife} from 'react-icons/im'


const Admin = () => {
    return (
        <div>
            <li>    
                <NavLink to="/dashboard/adminDashboard">
                    <BiSolidHomeAlt2 />
                    <span>Admin Dashboard</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/additems">
                    <ImSpoonKnife />
                    <span>add items</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/manageitems">
                    <BsFillMenuButtonWideFill />
                    <span>manage items</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/manage%bookings" className="flex">
                    <BsBookHalf />
                        <span>manage bookings</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/users">
                    <FaUsers />
                    <span>all users</span>
                </NavLink>
            </li>
        </div>
    );
};

export default Admin;