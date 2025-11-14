import React from "react";
//All done***

const Section4 = ({Sec4}) => {
  return (
    <div id="Whofor">
      <div className="w-full lg:px-[156px] py-[100px] md:px-[100px] sm:px-10 px-2">
        <h2 className="outfit-normal md:text-7xl text-black text-center text-5xl leading-10 md:leading-18 tracking-tighter 2xl:scale-120 max-md:text-4xl">
          For Whom is Clicks<span className="noto-sans-regular">&</span>Trades?
        </h2>

        <div className="mt-[72px] flex flex-wrap justify-center gap-y-18 2xl:w-[1128px] 2xl:mx-auto">

          {Sec4.map((items,index)=>(<div className="w-[287px] h-56 flex flex-col items-center" key={index}>
                <div className="w-12 h-12 p-3 rounded-lg shadow-inner shadow-gray-100">
              <img src={items.svgUrl} alt="" className="" />
            </div>
            <h3 className="outfit-normal text-2xl tracking-tight leading-9 text-black mt-8">
              {items.heading}
            </h3>
            <p className="outfit-normal text-base leading-6 text-[#8C8C9A] mt-3 text-center">
              {items.para}
            </p>
          </div>))}

        </div>
      </div>
    </div>
  );
};

export default Section4;
