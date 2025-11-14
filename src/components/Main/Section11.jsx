import React from "react";
{/* Done all also responsive*** */}

const Section11 = () => {
  return (
    <div>
      <div className="w-full lg:px-[156px] py-[100px] 2xl:max-w-[1440px] mx-auto md:px-[100px] sm:px-10 px-2">
        <div className="w-full px-[21.5px] flex xl:justify-between items-center xl:flex-row flex-col justify-center ">
          <div className="my-[41.5px] w-[31%] max-xl:w-full max-lg:text-center max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center">
            <div className="w-[105px] h-[105px] p-6 rounded-full border border-[#14DDB6]/30">
              <img src="./mail.png" alt="mail-box" className="" />
            </div>
            <div className="">
              <h3 className="outfit-medium text-4xl leading-[55px]">
                Any Questions?
              </h3>
              <p className="mt-5 leading-[25px] inter-regular text-black/53">
                Submit the form and your questions will be answered within 48
                hours by our professional team.
              </p>
            </div>

            <div className="flex items-center gap-[11px] mt-11 max-lg:justify-center">
              <div className="w-[50px] h-[50px] p-3 rounded-md border border-[#26F1AC]/28">
                <img src="./Frame11.png" alt="" className="" />
              </div>
              <div className="text-[14px] text-[#060B139E]">
                <p className="poppins-bold">Quick Response</p>
                <p className="poppins-regular">
                  We typically respond within 24 hours
                </p>
              </div>
            </div>
            <div className="flex items-center gap-[11px] mt-[35px] max-lg:justify-center">
              <div className="w-[50px] h-[50px] p-3 rounded-md border border-[#26F1AC]/28">
                <img src="./frame11(2).png" alt="" className="" />
              </div>
              <div className="text-[14px] text-[#060B139E]">
                <p className="poppins-bold">Expert Support</p>
                <p className="poppins-regular">
                  Get answers from our trading experts
                </p>
              </div>
            </div>
          </div>

          <div className="w-[62%] shadow shadow-black/24 rounded-xl max-xl:w-full">
              <form className="py-[39px] px-5 flex flex-wrap gap-[21px] w-full max-lg:px-3">
                <div className="w-[48%] max-lg:w-full">
                  <label for="fname" className="poppins-regular text-[14px] w-full">
                    First Name*
                  </label>
                  <br></br>
                  <input
                    className="bg-[#000000]/3 min-w-[271px] h-[46px] rounded-[7px] mt-[15px] w-full"
                    type="text"
                    id="fname"
                    name="fname"
                  />
                </div>
                <div className="w-[48%] max-lg:w-full">
                  <label for="lname" className="poppins-regular text-[14px] w-full">
                    Last Name*
                  </label>
                  <br></br>
                  <input
                    className="bg-[#000000]/3 min-w-[271px] w-full h-[46px] rounded-[7px] mt-[15px]"
                    type="text"
                    name="lname"
                    id="lname"
                  />
                </div>

                <div className="w-[48%] max-lg:w-full">
                  <label for="email" className="poppins-regular text-[14px] w-full">
                    Email
                  </label>
                  <br></br>
                  <input
                    className="bg-[#000000]/3 min-w-[271px] h-[46px] rounded-[7px] mt-[15px] w-full"
                    type="email"
                    name="email"
                    id="email"
                  />
                </div>

                <div className="w-[48%] max-lg:w-full">
                  <label for="phone" className="poppins-regular text-[14px] w-full">
                    Phone*
                  </label>
                  <br></br>
                  <input
                    className="bg-[#000000]/3 min-w-[271px] h-[46px] rounded-[7px] mt-[15px] w-full"
                    type="phone"
                    name="phone"
                    id="phone"
                  />
                </div>

                <div className="w-full">
                  <label
                    for="city"
                    className="poppins-regular text-[14px] w-full"
                  >
                    City/Municipality*
                  </label>
                  <br></br>
                  <input
                    className="bg-[#000000]/3 min-w-[271px] w-full h-[46px] rounded-[7px] mt-[15px]"
                    type="city"
                    name="city"
                    id="city"
                  />
                </div>

                <div className="w-full">
                  <label
                    for="question"
                    className="poppins-regular text-[14px] w-full"
                  >
                    Question/Questions*
                  </label>
                  <br></br>
                  <textarea
                    className="w-full bg-[#000000]/3 min-w-[271px] min-h-[46px] rounded-[7px] mt-[15px]"
                    name="question"
                    id="question"
                    rows={3}
                  ></textarea>
                </div>
                <button
                  className="w-full px-8 py-3 hover:text-[#00D5BE] hover:bg-white border-2 text-xl inter-bold border-[#00D5BE] rounded-[40px] bg-[#00D5BE] text-white cursor-pointer"
                  type="submit"
                >
                  Submit
                </button>
              </form>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section11;
