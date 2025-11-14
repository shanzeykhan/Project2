import React from "react";
{/* Done all also responsive*** */}

const Section7 = () => {
  return (
    <div>

      
      <div className="w-full lg:px-[156px] py-[187px] md:px-[100px] sm:px-10 px-2">
        <h2 className="outfit-normal text-5xl md:text-7xl text-black text-center leading-10 md:leading-18 tracking-tighter">
          Why Clicks<span className="noto-sans-regular">&</span>
          Trades platform should be in your tool stack
        </h2>

        <div className="mt-21 flex gap-8 mx-auto max-lg:flex-col">
          <div className="max-w-[356px] max-h-[460px] mx-auto">
            <div className="w-full max-xl:max-h-[300px] lg:h-[300px] px-[27px] pt-[46px] pb-[58px] rounded-2xl bg-[#F5F6F9] mt-6">
              <img src="./img1.png" alt="" className="mx-auto min-h-43" />
            </div>
            <div className="">
              <h3 className="outfit-normal text-black text-xl tracking-tight leading-7">
                Unified Workspace
              </h3>
              <p className="outfit-normal text-[#8C8C9A] text-base leading-6 mt-3">
                Everything in one place. Learning, community, journaling,
                research, and read only analytics flow together so your process
                feels smooth and connected.
              </p>
            </div>
          </div>

          <div className="max-w-[356px] max-h-[460px] mx-auto">
            <div className="w-full max-xl:max-h-[300px] min-h-43 lg:h-[300px] px-[27px] pt-[46px] pb-[58px] rounded-2xl bg-[#F5F6F9] mt-6 ">
              <img src="./img2.png" alt="" className="mx-auto min-h-43" />
            </div>
            <div className="">
              <h3 className="outfit-normal text-black text-xl tracking-tight leading-7">
                Live sync and clear overview
              </h3>
              <p className="outfit-normal text-[#8C8C9A] text-base leading-6 mt-3">
                Secure API connections to participating exchanges and wallets
                let you sync balances and activity for read only analytics, a
                unified portfolio view, clean exports, and context at a glance.
              </p>
            </div>
          </div>

          <div className="max-w-[356px] max-h-[460px] mx-auto">
            <div className="w-full max-xl:max-h-[300px] min-h-43 lg:h-[300px] px-[27px] pt-[46px] pb-[58px] rounded-2xl bg-[#F5F6F9] mt-6 ">
              <img src="./img3.png" alt="" className="mx-auto min-h-43" />
            </div>
            <div className="">
              <h3 className="outfit-normal text-black text-xl tracking-tight leading-7">
                Smart decision making and habits
              </h3>
              <p className="outfit-normal text-[#8C8C9A] text-base leading-6 mt-3">
                Guided checklists, scenario drills, pattern reviews, and
                gamified learning turn practice into discipline and keep you
                locked in session after session.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
