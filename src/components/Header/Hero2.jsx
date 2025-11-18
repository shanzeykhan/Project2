import React from "react";


const Hero2 = () => {
  return (
    <div>
      <div className="mt-[155px] w-full md:px-[225px] mx-auto px-2">
        <div className="lg:max-w-[990px] min-w-90 relative h-[700px] xl:h-[850px] mx-auto">
          <div className="w-full h-full bg-[url(./Dashboard.png)] bg-cover rounded-3xl border-8 border-gray-200 mx-auto"></div>
          <div className="w-full md:h-[310px] h-[540px] bg-linear-to-t from-[rgba(255,255,255,1)] from-65% to-[rgba(255,255,255,0)] absolute bottom-0 text-center">
            <div className="w-full text-center absolute bottom-2">
              <h2 className="outfit-normal text-3xl leading-9 mb-5 2xl:mb-9 px-2">
                Our Partners/Partnerships
              </h2>
              <p className="outfit-normal leading-9 mb-5">
                We work exclusively with leading partners in the crypto industry
                to provide the safest and most efficient trading experience.
              </p>
              <div className="flex md:justify-between flex-wrap items-center justify-center max-md:gap-2 mb-5">
                <img src="./image 2.png" alt="partners_logo" />
                <img src="./image 3.png" alt="partners_logo" />
                <img src="./image 4.png" alt="partners_logo" />
                <img src="./image 5.png" alt="partners_logo" />
                <img src="./image 6.png" alt="partners_logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
