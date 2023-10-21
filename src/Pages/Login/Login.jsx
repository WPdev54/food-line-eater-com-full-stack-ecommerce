import React, { useEffect, useRef , useState } from "react";
import loginSticker from "../../assets/Log/authentication2 1.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { Helmet } from "react-helmet";
import swal from 'sweetalert';
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import GoogleProvider from "../../Providers/GoogleProvider";

const Login = () => {
 

  const {signIn} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || '/'

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    signIn(email  ,password)
    .then(result=>{
      const user = result.user;
      // console.log(user); 
      swal({
        icon: "success",
        title: "Logged In Successful",
        text: "Sucessfully Logged In",
      });
      navigate(from , {replace:true})
    })
  };

  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  const handleValidateCapcta = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false)
      swal({
        icon: "success",
        title: "Capctha Validated Successfully",
        text: "You Have Validated Captha successfully",
      });

    } else {
      swal({
        icon: "error",
        title: "Oops... It seems Invalid Captcha",
        text: "Invalid Captcha  , Try Again",
      })
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  return (
    <div className="bg-login-bg px-20 h-[100vh] flex justify-center items-center w-[100%]">
      <Helmet>
        <title>Eater Ecommerce || Login</title>
      </Helmet>
      <div
        style={{}}
        className="login  px- py-14 xxl:py-28 container bg-login-bg shadow-2x md:flex"
      >
        <div className="img">
          <img src={loginSticker} />
        </div>
        <div className="form">
          <div className="contents">
            <div className="heading">
              <h1 className="text-[35px] text-amber-900 font-black text-center">
                Login
              </h1>
            </div>

            <form
              onSubmit={handleLogin}
              className="flex justify-center items-center"
            >
              <div className="content">
                <div className="Email">
                  <label className="font-extrabold text-orange-900">
                    Email
                  </label>
                  <br />
                  <input
                    className="outline-none border-0 shadow-xl h-14 mb-3 md:w-96"
                    type="email"
                    placeholder="Type Here"
                    name="email"
                  />
                </div>

                <div className="pass">
                  <label className="font-extrabold text-orange-900">
                    Password
                  </label>
                  <br />
                  <input
                    className="outline-none border-0 shadow-xl h-14 mb-3 md:w-96"
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                  />
                </div>

                <div className="captcha">
                  <p className="text-yellow-700 font-black mb-3 md:w-96">
                    <LoadCanvasTemplate />
                  </p>
                </div>

                <div className="captha-check">
                  <input
                    ref={captchaRef}
                    className="outline-none border-0 shadow-xl h-14 mb-3 md:w-96"
                    type="text"
                    placeholder="Type Here"
                  />
                  <br />
                  <button
                    onClick={handleValidateCapcta}
                    className=" mb-2 btn btn-outline btn-xs"
                  >
                    Validate
                  </button>
                </div>

                <input
                  disabled={disabled}
                  className=" h-14 mb-3 md:w-96 cursor-pointer w-36 mx-auto text-center font-black bg-amber-800 disabled:bg-amber-100 disabled:cursor-not-allowed"
                  type="submit"
                  value="Sign In"
                />
              </div>
            </form>

            <div className="providers mx-auto text-center">
              <Link
                to="/register"
                className="text-center text-yellow-900 font-black"
              >
                New here? Create a New Account
              </Link>
              <br />
              <label className="text-gray-600 font-black text-center">
                Or , Sign In with
              </label>
              <br />
        
              <GoogleProvider />
      
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
