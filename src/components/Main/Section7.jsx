import React from "react";
{/* Done all*** */}

const Section7 = ({Sec7}) => {
  return (
    <div id="detail">

      
      <div className="w-full max-w-[1440px] lg:px-[156px] py-[187px] md:px-[100px] sm:px-10 px-2 mx-auto">
        <h2 className="outfit-normal text-5xl md:text-7xl text-black text-center leading-10 md:leading-18 tracking-tighter">
          Why Clicks<span className="noto-sans-regular">&</span>
          Trades platform should be in your tool stack
        </h2>

        <div className="mt-21 flex gap-8 mx-auto max-lg:flex-col">


          {Sec7.map((items, index)=>(<div className="max-w-[356px] max-h-[460px] mx-auto" key={index}>
            <div className="w-full max-xl:max-h-[300px] lg:h-[300px] px-[27px] pt-[46px] pb-[58px] rounded-2xl bg-[#F5F6F9] mt-6">
              <img src={items.imgUrl} alt="" className="mx-auto min-h-43" />
            </div>
            <div className="">
              <h3 className="outfit-normal text-black text-xl tracking-tight leading-7">
                {items.heading}
              </h3>
              <p className="outfit-normal text-[#8C8C9A] text-base leading-6 mt-3">
                {items.para}
              </p>
            </div>
          </div>))}

          
        </div>
      </div>
    </div>
  );
};

export default Section7;
