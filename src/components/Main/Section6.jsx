import React from "react";
//all done***


const Section6 = ({Sec6}) => {
  return (
    <div>
      <div className="w-full max-w-[1440px] lg:px-[156px] py-[150px] md:px-[100px] sm:px-10 px-2 mx-auto">
        <h2 className="outfit-normal text-5xl md:text-7xl text-black text-center md:leading-18 leading-10 tracking-tighter">
          Technology behind Clicks<span className="noto-sans-regular">&</span>
          Trades?
        </h2>

        <div className="mt-21 flex flex-wrap justify-center items-center gap-6">

          
          {Sec6.map((items, index)=>(<div className="bg-[#F5F6F9] w-[543px] min-h-[206px] px-10 pt-9 pb-3 rounded-2xl max-xl:w-[480px] max-xl:px-5" key={index}>
            <div className="flex items-center gap-3 max-xl:flex-col max-xl:justify-center">
              <div className="w-12 h-12 p-3 rounded-full shadow-inner shadow-gray-200">
                <img src={items.svgUrl} alt="" className="" />
              </div>
              <h3 className="outfit-medium text-black text-lg tracking-tight">
                {items.heading}
              </h3>
            </div>
            <p className="outfit-normal text-[#8C8C9A] text-base leading-6 mt-[35px] max-xl:text-center">
              {items.para}
            </p>
          </div>))}

        </div>
      </div>
    </div>
  );
};

export default Section6;
