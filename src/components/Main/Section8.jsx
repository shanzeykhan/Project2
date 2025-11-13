import React from "react";
{/* Done all also responsive ---only check bg img */}

const Section8 = () => {
  return (
    <div className="relative">

        <div className="w-full h-[922px] absolute bg-[url(./sec8_bg.png)] bg-cover z-[-1] top-[84px] bg-no-repeat 2xl:max-h-[856px] 2xl:top-0 max-lg:px-[100px] max-md:px-10">

        </div>
      <div className="w-full lg:px-[156px] py-[100px] md:px-[100px] sm:px-10 px-2">
        <div className="flex flex-col justify-center items-center">
          <h2 className="outfit-normal text-7xl text-black text-center leading-18 tracking-tighter">
            Our Partners/Partnerships
          </h2>
          
          <p className="outfit-normal text-base leading-6 text-[#8C8C9A] mt-8 w-[600px] text-center">
            We work exclusively with leading partners in the crypto industry to
            provide the safest and most efficient trading experience.
          </p>
        </div>

        <div className="mt-100 px-9 flex flex-wrap gap-6 items-center justify-center">
          <div className="bg-[#F5F6F933] rounded-2xl border border-[#7C39F633] w-[236px] h-[104px]">
            <img
              src="./image7.png"
              alt=""
              className="w-42 h-[95px] m-auto my-1"
            />
          </div>

          <div className="bg-[#F5F6F933] rounded-2xl border border-[#7C39F633] w-[236px] h-[104px]">
            <img
              src="./image7_1.png"
              alt=""
              className="w-42 h-[95px] m-auto my-1"
            />
          </div>

          <div className="bg-[#F5F6F933] rounded-2xl border border-[#7C39F633] w-[236px] h-[104px]">
            <img
              src="./image7_2.png"
              alt=""
              className="w-42 h-[95px] m-auto my-1"
            />
          </div>

          <div className="bg-[#F5F6F933] rounded-2xl border border-[#7C39F633] w-[236px] h-[104px]">
            <img
              src="./image7_3.png"
              alt=""
              className="w-42 h-[95px] m-auto my-1"
            />
          </div>

          <div className="bg-[#F5F6F933] rounded-2xl border border-[#7C39F633] w-[236px] h-[104px]">
            <img
              src="./image7_4.png"
              alt=""
              className="w-42 h-[95px] m-auto my-1"
            />
          </div>

          <div className="bg-[#F5F6F933] rounded-2xl border border-[#7C39F633] w-[236px] h-[104px]">
            <img
              src="./image7_5.png"
              alt=""
              className="w-42 h-[95px] m-auto my-1"
            />
          </div>

          <div className="bg-[#F5F6F933] rounded-2xl border border-[#7C39F633] w-[236px] h-[104px]">
            <img
              src="./image7_6.png"
              alt=""
              className="w-42 h-[95px] mx-auto my-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section8;
