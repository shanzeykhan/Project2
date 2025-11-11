import React from "react";

const Section2 = () => {
  return (
    <div>
      <div className="w-full px-[156px] py-[100px]">
        
          <h2 className="outfit-normal text-7xl text-black text-center">
            What is Clicks<span className="noto-sans-regular">&</span>Trades?
          </h2>
          <div className="bg-[#F5F6F9] h-[532px] w-full mt-9 rounded-4xl py-4 pr-4 pl-13 flex items-center justify-center gap-10">
            <div className="w-[47%]">
              <p className="outfit-normal text-[#969696] text-2xl leading-8">
                Hey hello,
              </p>
              <p className="outfit-normal text-[#969696] text-2xl leading-8 mt-8">
                You’ve just scanned our QR code or deliberately visited our
                website and for that we sincerely thank you! Crypto can feel
                loud and unfamiliar. Clicks and Trades is our answer.
              </p>
              <button className="px-8 py-5 text-[#00D5BE] border-2 text-lg outfit-normal border-[#00D5BE] rounded-2xl hover:bg-[#00D5BE] hover:text-white cursor-pointer leading-6 mt-10">
                <a href="">Read more</a>
              </button>
            </div>
            <div className="h-[500px] w-[53%] rounded-2xl bg-[#F2F3F7] bg-[url(./Groupbg.png)] bg-cover flex justify-evenly items-center">
              <div className="w-58 h-62 bg-white rounded-xl p-3.5 flex flex-col items-center justify-center">
                <div className="bg-white rounded-xl py-2.5 px-[22px]">
                  <img src="./Nicole.png" alt="Nicole_img" />
                </div>
                <h3 className="outfit-medium text-lg text-[#055747] tracking-widest mt-3">
                  Nicole De Schuyter
                </h3>
                <p className="outfit-medium text-black/49 text-base">
                  CEO & Co-Founder
                </p>
              </div>
              <div className="w-58 h-62 bg-white rounded-xl p-3.5 flex flex-col items-center justify-center">
                <div className="bg-white rounded-xl py-2.5 px-[22px]">
                  <img src="./gerry.png" alt="gerry_img" />
                </div>
                <h3 className="outfit-medium text-lg text-[#055747] tracking-widest mt-3">
                  Gerry Janssens
                </h3>
                <p className="outfit-medium text-black/49 text-base">Founder</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Section2;
