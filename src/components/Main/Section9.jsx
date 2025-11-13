import React from "react";
{/* Done all also responsive */}

const Section9 = () => {
  return (
    <div>
      <div className="w-full lg:px-[156px] py-[100px] md:px-[100px] sm:px-10 px-2">
        <div className="w-full py-[46px] mx-auto">
          <h2 className="outfit-normal text-7xl text-black text-center leading-18 tracking-tighter">
            What Others Say
          </h2>
        </div>

        <div className="my-[72px] h-[362px] w-[2343px] flex overflow-x-hidden gap-10">
          <div className="bg-[#FAFAFA] rounded-[20px] h-full w-[754px] flex gap-7.5 p-[30px] relative">
            <img src="./Quotes.png" alt="" className="absolute top-5 right-5" />

            <img src="./imgsec9_1.png" alt="" className="rounded-[10px]" />
            <div className="pt-5">
              <p className="manrope-regular text-base leading-6 text-[#202020]">
                I used to find crypto confusing. The step-by-step lessons from
                Clicks&Trades helped me understand the basics, and the
                journaling kept me organized. I’m excited for the upcoming
                platform to bring learning, community, and my notes together in
                one place.
              </p>
              <div className="mt-[18px]">
                <h3 className="manrope-semibold uppercase text-base text-[#202020]">
                  Hans Derycke
                </h3>
                <p className="manrope-regular text-[14px] text-[#808080] mt-[5px]">
                  (61 years old), truck driver, Geraardsbergen
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#FAFAFA] rounded-[20px] h-full w-[754px] flex gap-7.5 p-[30px] relative">
            <img src="./Quotes.png" alt="" className="absolute top-5 right-5" />

            <img src="./imgsec9_2.png" alt="" className="rounded-[10px]" />
            <div className="pt-5">
              <p className="manrope-regular text-base leading-6 text-[#202020]">
                Ante facilisi ipsum sit eget dolor maecenas sed. Fringilla
                laoreet tincidunt nec nulla ullamcorper. Convallis viverra
                risus, facilisis erat gravida justo, urna ultrices.
              </p>
              <div className="mt-[18px]">
                <h3 className="manrope-semibold uppercase text-base text-[#202020]">
                  Kyle Merwin
                </h3>
                <p className="manrope-regular text-[14px] text-[#808080] mt-[5px]">
                  CO-owner
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#FAFAFA] rounded-[20px] h-full w-[754px] flex gap-7.5 p-[30px] relative">
            <img src="./Quotes.png" alt="" className="absolute top-5 right-5" />

            <img src="./imgsec9_3.jpg" alt="" className="rounded-[10px]" />
            <div className="pt-5">
              <p className="manrope-regular text-base leading-6 text-[#202020]">
                I used to find crypto confusing. The step-by-step lessons from
                Clicks&Trades helped me understand the basics, and the
                journaling kept me organized. I’m excited for the upcoming
                platform to bring learning, community, and my notes together in
                one place.
              </p>
              <div className="mt-[18px]">
                <h3 className="manrope-semibold uppercase text-base text-[#202020]">
                  Hans Derycke
                </h3>
                <p className="manrope-regular text-[14px] text-[#808080] mt-[5px]">
                  (61 years old), truck driver, Geraardsbergen
                </p>
              </div>
            </div>
          </div>


        </div>

        <div>
            <img src="./Slider.png" alt="" className="mx-auto"/>
        </div>


      </div>
    </div>
  );
};

export default Section9;
