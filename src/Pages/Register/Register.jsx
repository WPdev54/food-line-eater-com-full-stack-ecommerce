import React from "react";
import loginSticker from "../../assets/Log/authentication2 1.png";
import { Link, useNavigate } from "react-router-dom";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import swal from "sweetalert";
import { Button } from "@material-tailwind/react";
import Swal from "sweetalert2";
import GoogleProvider from "../../Providers/GoogleProvider";

const Register = () => {

  const { register, handleSubmit, formState: { error } } = useForm();
  const { createUser, updateUserProfile, authWithGoogle } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleGoogleLogin = () => {
    authWithGoogle()
    navigate('/')
  }

  const handleForm = data => {
    data.preventDefault();
    const form = data.target;
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    const photourl = form.photourl.value
    createUser(email, password)
      .then((res) => {
        const CreatedUser = res.user;
        console.log(CreatedUser);

        const savedUser = {email: CreatedUser.email , name , password }

        fetch('http://localhost:5000/user' , {
          method: 'POST',
          headers: {
            'content-type' : 'application/json'
          },
          body: JSON.stringify(savedUser)
        })
        .then(res => res.json())
        .then(data => {
          if(data.insertedId){
            navigate('/')
            Swal.fire(
              'Register And Login Sucessful',
              'Order Foods'
            )
          }
        })

      })
      .catch((e) => {
        console.log(e);
      })


  }

  return (
    <div className="bg-login-bg px-20 h-[100vh] flex justify-center items-center w-[100%]">
      <Helmet>
        <title>Eater Ecommerce || Login</title>
      </Helmet>
      <div
        style={{}}
        className="login px- py-14 xxl:py-28 px-28 container bg-login-bg shadow-2x md:flex"
      >

        <div className="form">
          <div className="contents">
            <div className="heading">
              <h1 className="text-[35px] text-amber-900 font-black text-center">Register</h1>
            </div>

            <form onSubmit={handleForm} className="flex justify-center items-center">
              <div className="content">

                <div className="name">
                  <label className="font-extrabold text-orange-900">Name</label>
                  <br />
                  <input
                    className="outline-none border-0 shadow-xl h-14 mb-3 md:w-96"
                    type="text"
                    placeholder="Your Name"
                    name="name"
                  />
                </div>

                <div className="name">
                  <label className="font-extrabold text-orange-900">Photo URL</label>
                  <br />
                  <input
                    className="outline-none border-0 shadow-xl h-14 mb-3 md:w-96"
                    type="text"
                    placeholder="Paste Your URL"
                    name="photourl"
                  />
                </div>

                <div className="Email">
                  <label className="font-extrabold text-orange-900">Email</label>
                  <br />
                  <input
                    className="outline-none border-0 shadow-xl h-14 mb-3 md:w-96"
                    type="email"
                    placeholder="Type Here"
                    name="email"
                  />
                </div>

                <div className="pass">
                  <label className="font-extrabold text-orange-900">Password</label>
                  <br />
                  <input
                    className="outline-none border-0 shadow-xl h-14 mb-3 md:w-96"
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                  />
                </div>

                <div className="captcha">
                  <p className="text-yellow-700 font-black mb-3 md:w-96">U I 7 8 a s</p>
                </div>

                <div className="captha-check">
                  <input
                    className="outline-none border-0 shadow-xl h-14 mb-3 md:w-96"
                    type="text"
                    placeholder="Type Here"
                  />
                </div>

                <input
                  className=" h-14 mb-3 md:w-96 w-36 mx-auto text-center font-black bg-amber-800"
                  type="submit"
                  value="Register"
                />
              </div>
            </form>

            <div className="providers mx-auto text-center">
              <Link to="/login" className="text-center text-yellow-900 font-black">Already Have An Account? Sign In</Link><br />
              <label className="text-gray-600 font-black text-center">Or , Sign In with</label>
              <br />
              <GoogleProvider />
            </div>
          </div>
        </div>
        <div className="img">
          <img src={loginSticker} />
        </div>
      </div>
    </div>
  );
};

export default Register;