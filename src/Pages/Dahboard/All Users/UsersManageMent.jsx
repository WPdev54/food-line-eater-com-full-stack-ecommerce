import { useQueries, useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { AiFillDelete, AiOutlineUser } from 'react-icons/ai'
import { RiAdminLine } from 'react-icons/ri'
import SharedTitle from '../../../Shared/sharedTitle';
// import { useReducedMotion } from 'framer-motion';
import Swal from 'sweetalert2';
import DashboardHome from '../DashboardHome';

const UsersManageMent = () => {

    const { refetch, data: list = [] } = useQuery({
        querykey: ["carts"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/user`)
            return res.json()
        },
    })

 /*    const handleDelete = user => {

    } */
    const handleMakeAdmin = list => {
        fetch(`http://localhost:5000/user/admin/${list._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${list.name} Is An Admin Now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }


    return (
        <div>
            <Helmet>
                <title>Eater Ecommerce || Users</title>
            </Helmet>
            <SharedTitle subtitle={"How Many?"} title={"MANAGE ALL USERS"} />
            <h3 className='text-2xl font-sans tracking-widest max-w-full'>Total Users : {list.length}</h3>

            <div className="overflow-x-auto mt-7">
                <table className="table table-zebra">
                    {/* head */}
                    <thead className='bg-[#D1A054] py-10 mt-5'>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Password</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            list.map((user, index) => <tr
                                key={user._id}
                            >
                                <th>{index + 1}</th>
                                <td className='text-left'>{user.name}</td>
                                <td className='text-left'>{user.email}</td>
                                <td>{user.role === 'admin' ? <button className='btn btn-error'><AiOutlineUser /></button> :
                                    <button className='btn btn-warning' onClick={() => handleMakeAdmin(user)}><RiAdminLine /></button>
                                }</td>
                                <td>{user.password}</td>
                                <td>
                                    <button  className='btn btn-ghost h-12 btn-xs bg-red-700 bg-gray-500'><AiFillDelete size={30} /></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            <DashboardHome />
        </div>
    );
};

export default UsersManageMent;