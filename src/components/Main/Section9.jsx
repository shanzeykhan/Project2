import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Section9 = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1536) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? reviews.length - itemsPerView : currentIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      return currentIndex + 1 >= reviews.length - itemsPerView + 1
        ? 0
        : currentIndex + 1;
    });
    console.log(currentIndex);

  };

  return (
    <div>
      <div className="w-full lg:px-[156px] py-[100px] md:px-[100px] sm:px-10 px-2 relative mx-auto">
        <div className="w-full py-[46px] mx-auto">
          <h2 className="outfit-normal md:text-7xl text-black text-center text-5xl leading-10 md:leading-18 tracking-tighter">
            What Others Say
          </h2>
        </div>

        <div className="my-[72px] max-md:min-h-[362px] h-[362px] max-w-[2343px] flex overflow-x-hidden">

          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100/itemsPerView}%)`,
            }}
          >

          {reviews.map((items, index) => (
            <div
              className="bg-[#FAFAFA] rounded-[20px] h-full w-[754px] flex gap-7.5 p-[30px] relative flex-col lg:flex-row"
              key={index}
              style={{
                  width: `${100 / reviews.length}%`,
                  flex: `0 0 ${100 / itemsPerView}%`,
                }}
            >
              <img
                src="./Quotes.png"
                alt=""
                className="absolute top-5 right-5 max-md:right-35"
              />

              <img src={items.imgUrl} alt="" className="rounded-[10px] max-md:h-30 max-md:w-35" />
              <div className="pt-5 max-md:max-w-70">
                <p className="manrope-regular text-base leading-6 text-[#202020]">
                  {items.msg}
                </p>
                <div className="mt-[18px]">
                  <h3 className="manrope-semibold uppercase text-base text-[#202020]">
                    {items.name}
                  </h3>
                  <p className="manrope-regular text-[14px] text-[#808080] mt-[5px]">
                    {items.designation}
                  </p>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>

        {/* <div>
          <img src="./Slider.png" alt="" className="mx-auto" />
        </div> */}

        
        <div className="flex justify-center items-center gap-4  py-5 relative">
          <button
          onClick={prevSlide}
          className=" rounded-full"
        >
          <img src="angleleft.svg" alt="leftscroll" className="h-9 w-9" />
        </button>
          {Array.from({ length: (reviews.length- itemsPerView) + 1}).map(
            (_, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 rounded-full cursor-pointer ${
                  currentIndex === index ? "bg-[#00D5BE]" : "bg-gray-200"
                }`}
              ></div>
            )
          )}
          <button
          onClick={nextSlide}
          className="rounded-full z-10 hover:scale-110"
        >
          <img src="angleright.svg" alt="rightscroll" className="h-9 w-9" />
        </button>
        </div>
        
      </div>
    </div>
  );
};

export default Section9;
