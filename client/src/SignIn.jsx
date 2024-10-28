import { FcGoogle } from "react-icons/fc";
import { ImFacebook } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen flex gap-2 items-center  bg-[#f4f5f8]">
      <img
        className=" hidden  md:flex w-1/2 h-screen object-fill"
        loading="lazy"
        src="https://img.freepik.com/premium-photo/robot-before-computer-screen-symbolizes-ai-digital-technology_1255428-14977.jpg"
        alt=""
      />

      {/* right div */}
      <div id="right" className="flex justify-center mx-auto flex-col p-7 ">
        <p className="absolute right-5 top-5 ">
          Don't have an account?{" "}
          <span
            className="text-blue-400 font-semibold cursor-pointer"
            onClick={() => {
              navigate("/sign-up");
            }}
          >
            Sign Up
          </span>
        </p>
        <div className="w-full">
          <form className="w-full" action="">
            <h2 className="font-bold">START YOUR JOURNEY</h2>
            <h1 className="text-3xl font-semibold">Hi, Welcome Back!</h1>
            <div className="flex flex-col flex-1 gap-3 mt-5">
              <input
                className="border-2  border-borderColor rounded-md px-2 py-1 outline-none"
                type="email"
                placeholder="Email"
                name=""
                id=""
              />
              <input
                className="border-2 border-borderColor rounded-md px-2 py-1 outline-none"
                type="password"
                placeholder="password"
                name=""
                id=""
              />
            </div>
            <button className="bg-blue-800 text-white font-bold  w-full my-5 py-1 rounded-md ">
              SIGN IN
            </button>
            {/* sign in with google and facebook */}
            <div className="flex items-center gap-2">
              <p className="font-semibold text-sm md:text-md">Sign In with</p>
              <div className="border-2 border-borderColor p-1 rounded-lg cursor-pointer">
                <a href="http://localhost:5000/auth/google">
                  <FcGoogle />
                </a>
              </div>
              <div className="border-2 border-borderColor p-1 rounded-lg cursor-pointer">
                <ImFacebook />
              </div>
              <div className="border-2 border-borderColor p-1 rounded-lg cursor-pointer">
                <FaTwitter />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
