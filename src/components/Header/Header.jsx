import React from "react";

const Header = () => {
  return (
    <div>
      <div className="w-full relative">
        <img src="./Vector 19.png" alt="" className="absolute top-0 w-full" />
        <img src="./Vector 18.png" alt="" className="absolute top-0 w-full" />
        <img src="./Framehero.png" alt="" className="px-13 w-full opacity-80" />
        <div className="w-full px-13 py-5 border-b border-b-white/10 flex justify-between items-center absolute top-0 2xl:px-16 2xl:py-8 bg-white/5">
          <img
            src="./logo.png"
            alt="Logo"
            className="scale-105 2xl:scale-120"
          />
          <div className="flex justify-between items-center gap-4 2xl:gap-16">
            <div className="navbar flex items-center gap-8 text-white 2xl:text-xl text-[14px] 2xl:gap-16 poppins-regular">
              <a
                href="#home"
                className="hover:text-[#14ddb6] active:text-[#14ddb6]"
              >
                Home
              </a>
              <a
                href="#aboutus"
                className="hover:text-[#14ddb6] active:text-[#14ddb6]"
              >
                About us
              </a>
              <a
                href="#whyus"
                className="hover:text-[#14ddb6] active:text-[#14ddb6]"
              >
                Why us
              </a>
              <a
                href="#whofor"
                className="hover:text-[#14ddb6] active:text-[#14ddb6]"
              >
                Who For
              </a>
              <a
                href="#details"
                className="hover:text-[#14ddb6] active:text-[#14ddb6]"
              >
                $CANT Token Details
              </a>
              <a
                href="#questions"
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
                <option value="english">English</option>
                <option value="urdu">Urdu</option>
              </select>
            </div>
            <button className="py-4 2xl:px-5 px-[13px] rounded-[10px] bg-[#14ddb6] text-black font-bold 2xl:text-xl border-2 border-[#14ddb6] hover:border-amber-500 hover:bg-white hover:text-amber-400 transition-colors delay-75 duration-75 ">
              <a href="#waitlist">Join our Waitlist</a>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
