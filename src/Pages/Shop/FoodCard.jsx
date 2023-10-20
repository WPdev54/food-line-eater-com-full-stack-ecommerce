import React, { useContext } from "react";
import { motion } from "framer-motion";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";

const FoodCard = ({item}) => {

    const {name , image , price , recipe, category , _id } = item;
    const navigate = useNavigate()
    const location  = useLocation()

    const {user} = useContext(AuthContext)
    const [ ,refetch] = useCart()

    const handleCartBtn = item => {
      if(user && user.email){
        // console.log(item);
        const cartedItem = {menuItemId: _id , name , image , price , category, email: user.email}
        fetch('http://localhost:5000/carts' , {
          method: 'POST',
          headers: {
            'content-type' : 'application/json'
          },
          body: JSON.stringify(cartedItem)
        })
        .then(res => res.json())
        .then(data => {
          if(data.insertedId){
            refetch(),
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Added Sucessfully',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
      }else{
        Swal.fire({
          title: 'Login To Add to cart',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Login'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'You are beaing redirecting to the login',
              navigate('/login'  , {state:{from: location} })
            )
          }
        })
      }
      }

  return (
    <motion.div initial={{marginLeft:65}} whileInView={{marginLeft:0}} className="flex justify-center ">
      <div className="card w-96 mx-auto mb-8 mt-7 bg-base-100 shadow-2xl">
        <figure>
          <img
            src={image}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="badge badge-warning">Price: {price} $</div>
          <div className="badge badge-accent">{category}</div>
          <p className="text-left py-5">{recipe}</p>
          <div className="card-actions ">
            <button onClick={handleCartBtn} className="btn btn-primary">Add To Cart</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FoodCard;
