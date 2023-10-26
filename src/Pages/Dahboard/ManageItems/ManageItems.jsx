import React from "react";
import useMenu from "../../../Hooks/useMenu";
import { AiFillDelete } from "react-icons/ai";
import SharedTitle from "../../../Shared/sharedTitle";
import Swal from "sweetalert2";
import { GrUpdate } from "react-icons/gr";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const [axiosSecure] = useAxiosSecure()

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
            axiosSecure.delete(`/menu/${item._id}`)
            .then(res => {
                console.log( 'deleted res' , res.data);
                if(res.data.deletedCount > 0){
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
    <div>
      <div className="heading py-5">
        <SharedTitle
          subtitle={"Want Managing Items"}
          title={"Manage Exiting Foods"}
        />
      </div>
      <h1 className="text-center text-2xl md:text-3xl mb-2 text-orange-500 font-black">
        Total Foods {menu.length}
      </h1>
      <table className="md:table gap-3">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th className="text-lg">Item Image</th>
            <th className="text-lg">Item Name</th>
            <th className="text-lg">Price</th>
            <th className="text-lg">Action</th>
            <th className="text-lg">Action</th>
          </tr>
        </thead>
        <tbody>
          {menu.map((item, index) => (
            <tr key={item._id} className="text-[20px]">
              <td>{index + 1}</td>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-20 h-20">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                {item.name}
                <br />
                <span className="badge badge-warning badge-sm">
                  {item.category}
                </span>
              </td>
              <td className="text-end">${item.price}</td>
              <td>
                <button
                  onClick={() => handleUpdate(item)}
                  className="btn btn-ghost h-12 btn-xs bg-amber-700 "
                >
                  <GrUpdate size={30} />
                </button>
              </td>
              <td>
                <button
                  onClick={() => handleDelete(item)}
                  className="btn btn-ghost h-12 btn-xs bg-red-700 bg-gray-500"
                >
                  <AiFillDelete size={30} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        {/* foot */}
      </table>
    </div>
  );
};

export default ManageItems;
