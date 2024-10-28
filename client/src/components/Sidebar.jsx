import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";
import { RiMessage2Line } from "react-icons/ri";
import { MdOndemandVideo } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { IoStorefrontOutline } from "react-icons/io5";
import { MdOutlineContactSupport } from "react-icons/md";

function Sidebar() {
  return (
    <section className="h-screen bg-bgBlack text-white flex flex-col justify-between flex-1 max-w-[250px] p-6">
      {/* logo */}
      <div>
        <h1 className="xl:text-4xl md:text-3xl text-2xl">
          <span className="text-blue-300">Easy</span>Skill
        </h1>
        {/* sidebar links */}
        <div className="lg:mt-10 mt-7 ">
          <h1 className="md:text-xl sm:text-lg text-sm mb-3">MAIN</h1>
          <div className="flex flex-col gap-3 pl-3">
            <p className="flex gap-2 items-center cursor-pointer hover:text-blue-300 md:text-lg">
              <IoHomeOutline />
              DashBoard
            </p>
            <p className="flex gap-2 items-center cursor-pointer hover:text-blue-300 md:text-lg">
              <IoBookOutline />
              Cources
            </p>
            <p className="flex gap-2 items-center cursor-pointer hover:text-blue-300 md:text-lg">
              <RiMessage2Line />
              Messages
            </p>
            <p className="flex gap-2 items-center cursor-pointer hover:text-blue-300 md:text-lg">
              <MdOndemandVideo />
              Webinars
            </p>
            <p className="flex gap-2 items-center cursor-pointer hover:text-blue-300 md:text-lg">
              <SlCalender />
              Calender
            </p>
            <p className="flex gap-2 items-center cursor-pointer hover:text-blue-300 md:text-lg">
              <IoStorefrontOutline />
              Store
            </p>
          </div>
        </div>
      </div>

      {/* Support */}
      <div>
        <p className="flex gap-2 items-center cursor-pointer hover:text-blue-300 ml-2">
          <MdOutlineContactSupport />
          Support
        </p>
      </div>
    </section>
  );
}

export default Sidebar;
