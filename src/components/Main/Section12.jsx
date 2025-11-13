import React from "react";
// All done also responsiveness done

const Section12 = () => {
  return (
    <div className="relative">
      
      <div className="w-full h-full z-[-1] absolute bg-[url(./subscribe-bg.png)] bg-contain 2xl:bg-cover bg-no-repeat top-0"></div>

      <div className="py-[100px] w-full mx-auto max-w-[725px] px-2">

        <div className="flex items-center flex-col mx-auto justify-center gap-6">
          <h1 className="outfit-normal text-7xl leading-18 tracking-tighter text-[#060B13] text-center max-w-[516px]">
            Subscribe to Our Newsletter
          </h1>
          <p className="outfit-normal text-base leading-6 text-center text-[#8C8C9A]">
            Stay ahead of the curve and up to date with the latest crypto news.
            Get early access to our trading features, market previews, and
            exclusive offers!
          </p>
        </div>

        <div className="flex items-center justify-between w-full mx-auto mt-[45px] md:flex-row flex-col max-md:gap-y-[25px]">
          <input type="email" placeholder="abc@email.com" name="email" className="bg-[#D9D9D9]/35 py-4 px-[17px] outfit-normal text-[22px] rounded-[9px] max-sm:w-full w-[517px] focus:outline-[#00D5BE] focus:outline-1 max-sm:py-2 max-sm:px-3" />
          <button
                  className="md:px-8 md:py-5 hover:text-[#00D5BE] hover:bg-white border-2 text-base leading-6 outfit-normal tracking-tight border-[#00D5BE] rounded-2xl bg-[#00D5BE] text-white cursor-pointer text-center px-3 py-3"
                  type="submit"
                >
                  Schedule a demo
                </button>
        </div>
        <div className="flex items-center gap-[7px] mx-auto w-full mt-[45px]">
          <input type="checkbox" name="subscribe" id="subscribe" className="border border-[#8C8C9A] w-[19px] h-[19px] rounded "/>
          <p className="outfit-normal text-lg text-[#8C8C9A]">Yes, subscribe me to your newsletter.</p>
        </div>
      </div>
    </div>
  );
};

export default Section12;
