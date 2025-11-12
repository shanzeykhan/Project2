import React from "react";

const Section2 = () => {
  return (
    <div>
      <div className="w-full px-[156px] py-[130px]">
        <div className="flex flex-col justify-center items-center 2xl:scale-120">
          <h2 className="outfit-normal text-7xl text-black text-center leading-18 tracking-tighter">
            What is Clicks<span className="noto-sans-regular">&</span>Trades?
          </h2>
          <p className="outfit-normal text-base leading-6 text-[#8C8C9A] mt-3 md:w-[670px] w-full text-center">
            Clicks and Trades is an upcoming crypto information and learning
            platform that replaces noise with structure and turns confusion into
            clear steps.
          </p>
        </div>
        <div className="bg-[#F5F6F9] 2xl:h-[600px] w-full 2xl:w-[1228px] 2xl:mx-auto mt-18 rounded-4xl ">
          <div className="flex items-center justify-center gap-10 py-4 pr-1 lg:pr-[7px] pl-13 lg:flex-row flex-col">
            <div className="lg:w-[50%] w-full">
              <h3 className="outfit-normal text-black text-3xl 2xl:text-4xl 2xl:outfit-medium leading-8">
                What you Get:
              </h3>
              <div className="outfit-normal text-[#8C8C9A] text-base 2xl:text-xl leading-6 lg:mt-3 2xl:mt-6 mt-6">
                <ul className="list-inside">
                  <li>• Education that builds understanding step by step</li>
                  <li>• A curated community where substance wins over hype</li>
                  <li>
                    • Journaling and review tools to spot patterns and build
                    discipline
                  </li>
                  <li>
                    • Smart decision-making frameworks that keep you focused
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:h-[500px] h-[300px] 2xl:h-[540px] lg:w-[50%] w-full rounded-2xl bg-[#F2F3F7] flex justify-evenly items-center relative border border-[#EBEBEB]">
            <div className="w-5/6 h-5/6 bg-[url(./Dashboard.png)] bg-cover absolute bottom-0 right-0 rounded-tl-2xl rounded-br-2xl">
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
