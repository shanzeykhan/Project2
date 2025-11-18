import React from "react";


const Section8 = ({data}) => {
  return (
    <div className="relative">

        <div className="w-full h-[922px] absolute bg-[url(./sec8_bg.png)] bg-contain 2xl:bg-center z-[-1] xl:top-[84px] top-[250px] bg-no-repeat 2xl:max-h-[856px] 2xl:top-18">

        </div>
      <div className="w-full lg:px-[156px] py-[100px] md:px-[100px] sm:px-10 px-2 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center max-md:max-w-[786px]">
          <h2 className="outfit-normal md:text-7xl text-black text-center text-4xl leading-10 md:leading-18 tracking-tighter">
            Our Partners/Partnerships
          </h2>
          <p className="outfit-normal text-base leading-6 text-[#8C8C9A] mt-8 max-w-[600px] text-center">
            We work exclusively with leading partners in the crypto industry to
            provide the safest and most efficient trading experience.
          </p>
        </div>

        <div className="md:mt-100 mt-30 md:px-9 px-2 flex flex-wrap gap-6 items-center justify-center max-w-[1128px]">

          {data.map((items, index)=>(<div className="bg-[#F5F6F933] rounded-2xl border border-[#7C39F633] w-[236px] h-[104px] max-md:w-[156px] max-md:h-[68px]" key={index}>
            <img
              src={items.imgUrl}
              alt=""
              className="w-42 h-[95px] m-auto my-1 max-md:w-[109px] max-md:h-[60px]"
            />
          </div>
          ))}


        </div>
      </div>
    </div>
  );
};

export default Section8;
