import React from "react";

const Section1 = () => {
  return (
    <div>
      <div className="w-full lg:px-[156px] py-[180px] md:px-[100px] sm:px-10 px-2">
          <h2 className="outfit-normal text-7xl text-black text-center leading-18 tracking-tighter">
            Welcome to Click<span className="noto-sans-regular">&</span>Trades
          </h2>
          <div className="bg-[#F5F6F9] 3xl:h-[600px] w-full 2xl:w-[1228px] 2xl:mx-auto mt-10 rounded-4xl py-4 pr-4 lg:pl-13 pl-5 flex items-center justify-center gap-10">
            <div className="w-[47%]">
              <p className="outfit-normal text-[#969696] text-xl xl:text-2xl leading-8">
                Hey hello,
              </p>
              <p className="outfit-normal text-[#969696] text-lg lg:text-2xl leading-8 mt-8">
                You’ve just scanned our QR code or deliberately visited our
                website and for that we sincerely thank you! Crypto can feel
                loud and unfamiliar. Clicks and Trades is our answer.
              </p>
              <button className="md:px-8 px-4 py-5 text-[#00D5BE] border-2 text-base outfit-normal border-[#00D5BE] rounded-2xl hover:bg-[#00D5BE] hover:text-white cursor-pointer leading-6 mt-10">
                <a href="">Read more</a>
              </button>
            </div>
            <div className="h-[500px] w-[53%] rounded-2xl bg-[#F2F3F7] bg-[url(./Groupbg.png)] bg-cover flex justify-evenly items-center gap-1 p-1 flex-wrap">
              <div className=" bg-white rounded-xl p-3.5 flex flex-col items-center justify-center w-[222px] h-[237px] md:min-w-35">
                <div className="bg-white rounded-xl py-2.5 px-[22px]">
                  <img src="./Nicole.png" alt="Nicole_img" />
                </div>
                <div className="text-center">
                <h3 className="outfit-medium text-base xl:text-lg text-[#055747] tracking-wide xl:tracking-widest mt-3">
                    Nicole  De Schuyter
                </h3>
                <p className="outfit-medium text-black/49 text-base">
                    CEO & Co-Founder
                </p>
                </div>

              </div>
              <div className=" bg-white rounded-xl md:p-3.5 p-1 flex flex-col items-center justify-center w-[222px] h-[237px] md:min-w-35">
                <div className="bg-white rounded-xl py-2.5 px-[22px]">
                  <img src="./gerry.png" alt="gerry_img" />
                </div>
                <div className="text-center">
                <h3 className="outfit-medium text-base xl:text-lg text-[#055747] tracking-wide xl:tracking-widest mt-3">
                    Gerry Janssens
                </h3>
                <p className="outfit-medium text-black/49 text-base">
                    Founder
                </p>
                </div>

              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Section1;
