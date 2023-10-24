import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { BsCart4, BsCalendarDateFill } from 'react-icons/bs'
import { MdOutlinePayments, MdOutlineRateReview } from 'react-icons/md'
import { TbBrandBooking } from 'react-icons/tb'
import { AiFillHome, AiOutlineMenu, AiFillShopping } from 'react-icons/ai'
import { FcContacts } from 'react-icons/fc'
import { GrDeliver } from 'react-icons/gr'
import useCart from './../../Hooks/useCart';

const User = () => {

    const [cart] = useCart()

    return (
        <div>
            <li>
                        <NavLink to="/dashboard/Dashboard">
                            <AiFillHome />
                            <span>Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/reserveation">
                            <BsCalendarDateFill />
                            <span>reservation</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/payment">
                            <MdOutlinePayments />
                            <span>payment history</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/mycart" className="flex">
                            <BsCart4 />
                            <div className="number">
                                <span>My Cart</span>
                                <div className="badge badge-success relative bottom-2 right-3">{cart?.length}</div>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/review">
                            <MdOutlineRateReview />
                            <span>Add Review</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/booking">
                            <TbBrandBooking />
                            <span>my booking</span>
                        </NavLink>
                    </li>
        </div>
    );
};

export default User;