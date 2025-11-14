import React from "react";

const Header = ({header}) => {
  return (
    <div>
      <div className="w-full relative">
        <img src="./Vector 19.png" alt="" className="absolute top-0 w-full min-h-[547px]" />
        <img src="./Vector 18.png" alt="" className="absolute top-0 w-full min-h-[547px]" />
        <img src="./Framehero.png" alt="" className="md:px-13 w-full opacity-80 min-h-[547px]" />
        <div className="w-full md:px-13 px-2 md:py-5 py-2 border-b border-b-white/10 flex justify-between items-center absolute top-0 bg-white/5 overflow-hidden z-10">
          <img
            src="./logo.png"
            alt="Logo"
            className="md:w-[202px] md:h-[42px] w-25 h-8 hidden md:block"
          />
          <div className="flex justify-between items-center md:gap-4 gap-2">
            <div className="navbar flex items-center md:gap-8 gap-2 text-white md:text-[14px] text-[10px] max-md:tracking-tighter poppins-regular">
              <a
                href=""
                className="hover:text-[#14ddb6] active:text-[#14ddb6]"
              >
                Home
              </a>
              <a
                href="#Aboutus"
                className="hover:text-[#14ddb6] active:text-[#14ddb6]"
              >
                About us
              </a>
              <a
                href="#Whyus"
                className="hover:text-[#14ddb6] active:text-[#14ddb6]"
              >
                Why us
              </a>
              <a
                href="#Whofor"
                className="hover:text-[#14ddb6] active:text-[#14ddb6]"
              >
                Who For
              </a>
              <a
                href="#detail"
                className="hover:text-[#14ddb6] active:text-[#14ddb6]"
              >
                $CANT Token Details
              </a>
              <a
                href="#question"
                className="hover:text-[#14ddb6] active:text-[#14ddb6]"
              >
                Questions
              </a>
              <select
                name="lang"
                id="lang"
                className="focus:outline-none poppins-bold"
                // style={"-webkit-appearance:none; -moz-appearance:none; text-indent:1px; text-overflow: "'; "}
              >
                <option className="text-black" value="english">English</option>
                <option className="text-black" value="urdu">Urdu</option>
              </select>
            </div>
            <button className="py-4 md:px-[13px] px-2 rounded-[10px] bg-[#14ddb6] text-black font-bold border-2 hidden md:block border-[#14ddb6] hover:border-amber-500 hover:bg-white hover:text-amber-400 transition-colors delay-75 duration-75 ">
              <a href="#waitlist">Join our Waitlist</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
