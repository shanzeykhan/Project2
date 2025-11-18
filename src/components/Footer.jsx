import React from "react";
// All done***

const Footer = () => {
  return (
    <div>
      <div className="w-full bg-black pt-16 pb-3  text-white px-2">
        <div className="xl:w-[1209px] h-full mx-auto">
          <div className="py-[18px] sm:pl-[31px] pr-1 flex gap-10 flex-wrap pl-4">

            <div className="flex flex-col justify-between w-104 h-[167px]">
              <img src="./logo.png" alt="logo" className="w-[127px] h-[27px]" />
              <p className="inter-regular text-[14px] leading-[21px] text-white">
                &copy; 2025 by
                <span className="text-[#14DDB6]">clicksandtrades.com</span>
              </p>
            </div>

            <div className="flex gap-6 items-start flex-wrap">
              <div className="w-48">
                <h3 className="inter-bold text-[14px] leading-[21px] text-[#D1D5DB]">
                  Contact
                </h3>
                <div className="inter-regular text-[14px] leading-[21px] mt-[17px]">
                  <h4 className="text-[#14DDB6] underline">Europe</h4>
                  <p className="">
                    ClicksandTrades s.r.o. <br></br>ID: 216 95 016<br></br>
                    Chudenická 1059/30, 102 00,<br></br> Praag 10 - Hostivar
                    <br></br> Czech Republic<br></br> VASP licensed
                  </p>
                </div>

                <div className="inter-regular text-[14px] leading-[21px] mt-[23px]">
                  <h5 className="text-[#14DDB6] underline">Central America</h5>
                  <p className="">
                    ClicksandTrades s.r.l<br></br>ID 3-102-932760<br></br>Plaza
                    Florencia Local 10<br></br>10203 San José<br></br>Costa Rica
                  </p>
                </div>
              </div>

              <div className="w-[217px]">
                <h3 className="inter-bold text-[14px] leading-5 text-[#D1D5DB]">
                  Quick Menu
                </h3>
                <div className="mt-[22px] inter-regular text-[14px] leading-[21px] flex flex-col sm:gap-3.5 gap-1">
                    <a href="#home" className="">Home</a>
                    <a href="#Whatis" className="">WHAT is Clicks & Trades?</a>
                    <a href="Whofor" className="">FOR WHOM is Clicks & Trades?</a>
                    <a href="#detail" className="">$CANT Token of Clicks & Trades</a>
                </div>
              </div>

              <div className="w-48">
                <h3 className="inter-bold text-[14px] leading-[21px] text-[#D1D5DB]">
                  Socials
                </h3>
                <div className="mt-[22px]">
                  <a
                    href="https://www.facebook.com/clicksandtrades?_rdc=2&_rdr#"
                    className="inter-regular text-[14px] leading-[21px] underline flex gap-2.5 items-end mb-3.5 "
                  >
                    <img
                      src="./Facebook.png"
                      alt="Facebook"
                      className="w-6 h-6"
                    />
                    Facebook
                  </a>

                   <a
                    href="https://www.instagram.com/clicksandtrades/#"
                    className="inter-regular text-[14px] leading-[21px] underline flex gap-2.5 items-end mb-3.5"
                  >
                    <img
                      src="./Instagram.png"
                      alt="Instagram"
                      className="w-6 h-6"
                    />
                    Instagram
                  </a>

                   <a
                    href="https://www.linkedin.com/company/clicksandtrades/?viewAsMember=true"
                    className="inter-regular text-[14px] leading-[21px] underline flex gap-2.5 items-end mb-3.5"
                  >
                    <img
                      src="./Linkedin.png"
                      alt="Linkedin"
                      className="w-6 h-6"
                    />
                    Linkedin
                  </a>

                   <a
                    href="https://x.com/clicksandtrades"
                    className="inter-regular text-[14px] leading-[21px] underline flex gap-2.5 items-end mb-3.5"
                  >
                    <img
                      src="./Twitter.png"
                      alt="Twitter"
                      className="w-6 h-6"
                    />
                    X.com
                  </a>
                </div>
              </div>


            </div>

            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
