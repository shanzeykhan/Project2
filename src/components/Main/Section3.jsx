import React from "react";
//All done***

const Section3 = ({Sec3}) => {
  return (
    <div id="Whyus">
      <div className="w-full lg:px-[70px] py-24 md:px-10 sm:px-5 px-2">
        <div className="flex flex-col justify-center items-center 2xl:scale-120">
          <h2 className="outfit-normal md:text-7xl text-black text-center text-5xl leading-10 md:leading-18 tracking-tighter">
            Why is Clicks<span className="noto-sans-regular">&</span>Trades?
          </h2>
          <p className="outfit-normal text-base leading-6 text-[#8C8C9A] mt-3 max-w-[670px] text-center">
            Because you deserve a platform that can cut the noise and make your
            crypto journey simple for you.
          </p>
        </div>

        <div className="mt-21 flex gap-7 flex-wrap justify-center lg:gap-y-[81px] gap-y-7">
          
          {Sec3.map((items, index)=>(<div className="flex flex-col gap-y-6 max-w-[406px]" key={index}>
            <div className="bg-[#F5F6F9] rounded-2xl pt-[30px] px-1">
              <img src={items.imgUrl} alt="" className="mx-auto" />
            </div>
            <div>
              <h3 className="outfit-normal text-xl tracking-tight leading-7 text-black">
                {items.heading}
              </h3>
              <p className="outfit-normal text-base leading-6 text-[#8C8C9A] mt-3">
                {items.para}
              </p>
            </div>
          </div>))}

        </div>

        
      </div>
    </div>
  );
};

export default Section3;
