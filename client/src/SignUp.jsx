import { FcGoogle } from "react-icons/fc";
import { ImFacebook } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SignUp() {
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
          Do not have an account?{" "}
          <span
            className="text-blue-400 font-semibold cursor-pointer"
            onClick={() => {
              navigate("/sign-in");
            }}
          >
            Sign In
          </span>
        </p>
        <div>
          <form action="">
            <h2 className="font-bold">REGISTER NOW</h2>
            <h1 className="text-3xl font-semibold">Welcome To The LMS</h1>
            <div className="flex w-full gap-2 mt-7 mb-3">
              <input
                className="border-2 border-borderColor rounded-md px-2 py-1 outline-none w-full"
                placeholder="First Name"
                type="text"
              />
              <input
                className="border-2 border-borderColor rounded-md px-2 py-1 outline-none w-full"
                placeholder="Last Name"
                type="text"
              />
            </div>

            <div className="flex flex-col flex-1 gap-3">
              <input
                className="border-2 border-borderColor rounded-md px-2 py-1 outline-none"
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
              SIGN UP
            </button>
            {/* sign in with google and facebook */}
            <div className="flex items-center gap-2">
              <p className="font-semibold text-sm md:text-md">Sign Up with</p>
              <div className="border-2 border-borderColor p-1 rounded-lg cursor-pointer">
                <FcGoogle />
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

export default SignUp;
