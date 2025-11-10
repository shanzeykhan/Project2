import React from "react";

const Section1 = () => {
  return (
    <div>
      <div className="w-full px-[156px] py-[100px]">
        <div>
          <h2 className="outfit-normal text-7xl text-black text-center">
            Welcome to Click<span className="noto-sans-regular">&</span>Trades
          </h2>
          <div className="bg-gray-200 h-[532px] w-full mt-9 rounded-4xl py-4 pr-4 pl-13 flex items-center justify-center gap-12">
            <div className="w-1/2">
              <p className="outfit-normal text-[#969696] text-2xl leading-8">
                Hey hello,
                </p><p className="outfit-normal text-[#969696] text-2xl leading-8">You’ve just scanned our QR code or deliberately visited
                our website and for that we sincerely thank you! Crypto can feel
                loud and unfamiliar. Clicks and Trades is our answer.
              </p>
              <button className="px-8 py-5 text-[#14ddb6] border-2 text-lg outfit-normal border-[#14ddb6] rounded-2xl hover:bg-[#14ddb6] hover:text-white cursor-pointer leading-6 mt-9">
                <a href="">Read more</a>
              </button>
            </div>
            <div className="h-[500px] w-1/2 rounded-2xl bg-[#ebebeb]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
