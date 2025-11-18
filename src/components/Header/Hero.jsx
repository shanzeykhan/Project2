import React from "react";

const Hero = () => {
  return (
    <div >
      <div className="w-full absolute top-0 mx-auto px-4">
        <div className="md:max-w-220 text-center mt-[194px] 2xl:mt-[350px] 2xl:w-[50%] mx-auto">
          <h1 className="font-bold md:text-5xl text-3xl lora-bold md:mb-6 mb-3 md:leading-16 leading-9 mx-auto ">
            Clicks&Trades offers education, community, journaling, and general
            market insights
          </h1>
          <p className="text-[#8c8c9a] text-[18px] outfit-normal leading-6 mb-11 2xl:text-2xl ">
            Planned features to be released in line with applicable licensing.
          </p>
          <div>
            <button className="px-8 py-5 text-[#14DDB6] border-2 text-lg outfit-normal border-[#14ddb6] rounded-2xl bg-white hover:bg-[#14ddb6] hover:text-white cursor-pointer mx-2">
              <a href="">Learn more</a>
            </button>
            <button className="px-8 py-5 text-[#14ddb6] border-2 text-lg outfit-normal border-[#14ddb6] rounded-2xl bg-white hover:bg-[#14ddb6] hover:text-white cursor-pointer mx-2">
              <a href="">Get started</a>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;
