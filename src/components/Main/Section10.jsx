import React from "react";

const Section10 = ({Faq}) => {
  return (
    <div>
      <div className="w-full px-[156px] py-[100px]">
        <div className="w-full py-[46px] mx-auto">
          <h2 className="outfit-normal text-7xl text-black text-center leading-18 tracking-tighter">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-[72px] w-[1128px] flex flex-col gap-6 items-center">

          {Faq.map((items, index)=>(<div className="bg-[#F5F6F9] rounded-2xl p-8 border w-full border-[#EBEBEB]" key={index}>
            <div className="flex items-center justify-between">
              <h3 className="outfit-normal text-xl leading-7 tracking-tight">{items.question}</h3>
              <div className="w-12 h-12 p-3 rounded-lg bg-white border border-[#EBEBEB]">
                <img src="./arrow-up.png" alt="" className="" />
              </div>
            </div>
            <p className="outfit-normal text-base leading-6 text-[#8C8C9A] mt-4">
              {items.answer}
            </p>
          </div>
  ))}

        </div>
      </div>
    </div>
  );
};

export default Section10;
