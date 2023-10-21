import React from 'react';
import { AiFillDelete } from 'react-icons/ai'
import useCart from '../../../Hooks/useCart';
import Swal from 'sweetalert2';


const Table = () => {

    const [cart, refetch] = useCart()

    const handleDelete = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete From Cart'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className="w-full overflow-x-auto mt-4">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th className='text-lg'>Item Image</th>
                        <th className='text-lg'>Item Name</th>
                        <th className='text-lg'>Price</th>
                        <th className='text-lg'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((item, index) => <tr
                            key={item._id}
                            className='text-[20px]'
                        >
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-20 h-20">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {item.name}
                                <br />
                                <span className="badge badge-warning badge-sm">{item.category}</span>
                            </td>
                            <td className='text-end'>${item.price}</td>
                            <td>
                                <button onClick={() => handleDelete(item)} className='btn btn-ghost h-12 btn-xs bg-red-700 bg-gray-500'><AiFillDelete size={30} /></button>
                            </td>
                        </tr>
                        )
                    }

                </tbody>
                {/* foot */}

            </table>
        </div>
    );
};

export default Table;