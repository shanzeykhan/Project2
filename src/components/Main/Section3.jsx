import React from "react";

const Section3 = () => {
  return (
    <div>
      <div className="w-full px-[78px] py-24">
        <div className="flex flex-col justify-center items-center 2xl:scale-120">
          <h2 className="outfit-normal text-7xl text-black text-center leading-18 tracking-tighter">
            Why is Clicks<span className="noto-sans-regular">&</span>Trades?
          </h2>
          <p className="outfit-normal text-base leading-6 text-[#8C8C9A] mt-3 w-[670px] text-center">
            Because you deserve a platform that can cut the noise and make your
            crypto journey simple for you.
          </p>
        </div>
        <div className="flex flex-col gap-y-[81px] items-center">
          <div className="mt-21 flex gap-x-8">
            <div className="flex flex-col gap-y-6 max-w-[426px] flex-1/3">
              <div className="bg-[#F5F6F9] rounded-2xl pt-[30px] px-1">
                <img
                  src="./ClosedTradesWidget.png"
                  alt=""
                  className="mx-auto"
                />
              </div>
              <div>
                <h3 className="outfit-normal text-xl tracking-tight leading-7 text-black">
                  Experienced
                </h3>
                <p className="outfit-normal text-base leading-6 text-[#8C8C9A] mt-3">
                  Decades of trading experience and years in crypto inform every
                  choice we make so the platform reflects what happens in real
                  markets.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-y-6 max-w-[426px] flex-1/3">
              <div className="bg-[#F5F6F9] rounded-2xl pt-[30px] px-1">
                <img src="./Sec3Container.png" alt="" className="mx-auto" />
              </div>
              <div>
                <h3 className="outfit-normal text-xl tracking-tight leading-7 text-black">
                  Results
                </h3>
                <p className="outfit-normal text-base leading-6 text-[#8C8C9A] mt-3">
                  Simple routines, journaling, and smart decision making
                  frameworks that keep you focused and moving forward.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-y-6 max-w-[426px] h-[310px] flex-1/3">
              <div className="bg-[#F5F6F9] rounded-2xl pt-[30px] px-1">
                <img src="./ProductHelpWidget.png" alt="" className="mx-auto" />
              </div>
              <div>
                <h3 className="outfit-normal text-xl tracking-tight leading-7 text-black">
                  Support
                </h3>
                <p className="outfit-normal text-base leading-6 text-[#8C8C9A] mt-3">
                  Real people, clear guides, and fast product help when you need
                  it.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-6 max-w-[426px] w-[406px]">
            <div className="bg-[#F5F6F9] rounded-2xl pt-[30px]">
              <img src="./LoginProcessWidget.png" alt="" className="mx-auto" />
            </div>
            <div>
              <h3 className="outfit-normal text-xl tracking-tight leading-7 text-black">
                Confused where to begin?
              </h3>
              <p className="outfit-normal text-base leading-6 text-[#8C8C9A] mt-3">
                Step by step learning designed for clarity and testing so you
                build understanding that sticks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
