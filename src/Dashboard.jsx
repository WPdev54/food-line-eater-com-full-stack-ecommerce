import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { BsCart4, BsCalendarDateFill } from 'react-icons/bs'
import { MdOutlinePayments, MdOutlineRateReview } from 'react-icons/md'
import { TbBrandBooking } from 'react-icons/tb'
import { AiFillHome, AiOutlineMenu, AiFillShopping } from 'react-icons/ai'
import { FcContacts } from 'react-icons/fc'
import { GrDeliver } from 'react-icons/gr'
import useCart from './Hooks/useCart';


const Dashboard = () => {

    const [cart] = useCart()

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet />

                <label htmlFor="my-drawer-2" className="btn btn-primary bg-[#D1A054] hover:bg-[#D1A054] border-0 drawer-button lg:hidden absolute top-4 left-4"><AiOutlineMenu /></label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 text-lg uppercase bg-[#D1A054] w-80 min-h-full ">
                    {/* Sidebar content here */}
                    <li>
                        <NavLink to="/" >

                            <span className="text-transparent pt-2 mb-4 font-black bg-clip-text bg-gradient-to-br text-2xl from-blue-gray-800 to-gray-700">
                                EATER
                            </span>
                        </NavLink>
                    </li>
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
                    <div className='divider' />

                    <li>
                        <NavLink to="/">
                            <AiFillHome />
                            <span>Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu">
                            <AiOutlineMenu />
                            <span>Menu</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop">
                            <AiFillShopping />
                            <span>Shop</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                            <FcContacts />
                            <span>Contact</span>
                        </NavLink>
                    </li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;