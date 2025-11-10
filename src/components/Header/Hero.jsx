import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="w-full absolute top-0">
        <div className="w-220 text-center absolute top-[194px] left-[331px] 2xl:left-1/5 2xl:top-[350px] 2xl:w-[50%]">
          <h1 className="font-bold text-5xl lora-bold mb-6 leading-16 2xl:leading-32 2xl:text-7xl">
            Clicks&Trades offers education, community, journaling, and general
            market insights
          </h1>
          <p className="text-[#8c8c9a] text-[18px] outfit-normal leading-6 mb-11 2xl:text-2xl">
            Planned features to be released in line with applicable licensing.
          </p>
          <div>
            <button className="px-8 py-5 text-[#14ddb6] border-2 text-lg outfit-normal border-[#14ddb6] rounded-2xl bg-white hover:bg-[#14ddb6] hover:text-white cursor-pointer mx-2">
              <a href="">Learn more</a>
            </button>
            <button className="px-8 py-5 text-[#14ddb6] border-2 text-lg outfit-normal border-[#14ddb6] rounded-2xl bg-white hover:bg-[#14ddb6] hover:text-white cursor-pointer mx-2">
              <a href="">Get started</a>
            </button>
          </div>
        </div>
      </div>



      

      <div className="mt-[155px] w-full relative h-[850px]">
        <div className="w-[990px] h-[850px] 2xl:w-[1200px]2xl:h-auto absolute top-0 bg-[url(./Dashboard.png)] bg-cover rounded-3xl border-8 border-gray-200 left-[225px] 2xl:left-2/7"></div>
        <div className="w-full h-[290px] 2xl:h-[390px] bg-linear-to-t from-[rgba(255,255,255,1)] from-65% to-[rgba(255,255,255,0)] absolute bottom-0 left-[180px] 2xl:left-2/8 text-center">
          <div className="w-[1090px] text-center absolute bottom-2 2xl:w-[1200px]">
            <h2 className="outfit-normal text-3xl leading-9 mb-5 2xl:mb-9">
              Our Partners/Partnerships
            </h2>
            <p className="outfit-normal leading-9 mb-5">
              We work exclusively with leading partners in the crypto industry
              to provide the safest and most efficient trading experience.
            </p>
            <div className="flex justify-between mb-5">
              <img src="./image 2.png" alt="partners_logo" />
              <img src="./image 3.png" alt="partners_logo" />
              <img src="./image 4.png" alt="partners_logo" />
              <img src="./image 5.png" alt="partners_logo" />
              <img src="./image 6.png" alt="partners_logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
