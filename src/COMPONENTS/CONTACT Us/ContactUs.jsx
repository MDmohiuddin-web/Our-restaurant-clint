import WORKINGicon from "../../assets/Resources/icon/icon (1).svg";
import phonesicon from "../../assets/Resources/icon/icon (2).svg";
import addressicon from "../../assets/Resources/icon/icon (3).svg";

const ContactUs = () => {
  return (
    <div>
    {/*  */}
    <div className=" mb-10 CONTACTUSIMG md:h-[500px] flex justify-center items-center rounded-lg p-10">
      <div className="bg-black bg-opacity-50 md:w-[70%] text-white text-center p-10 rounded-lg">
        <h3 className=" text-4xl my-5 font-bold">CONTACT US</h3>
        <p className="text-gray-50">Would you like to try a dish?</p>
      </div>
    </div>
    {/*  */}
    <div className="md:w-1/3 m-auto p-5 text-center">
      <p className="text-[#D99904] text-xl">---Visit Us---</p>
      <h2 className="border-y-2 text-2xl border-gray-400 my-5 py-5">
        OUR LOCATION
      </h2>
    </div>
    <div className="md:w-[70%] m-auto p-5 space-x-5 md:flex justify-around ">
      {/*  */}
      <div className="md:w-1/3">
        <div className="w-full bg-[#D1A054] py-5 text-center">
          <img src={phonesicon} alt="" className="text-center mx-auto" />
        </div>
        <div className=" px-5 pb-5 border rounded-b-lg ">
          <div className="bg-gray-300 h-28  p-5 text-center ">
            <h2>PHONE</h2>
            <p>+38 (012) 34 56 789</p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="md:w-1/3">
        <div className="w-full bg-[#D1A054] py-5 text-center">
          <img src={addressicon} alt="" className="text-center mx-auto" />
        </div>
        <div className=" px-5 pb-5 border rounded-b-lg ">
          <div className="bg-gray-300 h-28  p-5 text-center">
            <h2>ADDRESS</h2>
            <p>+38 (012) 34 56 789</p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="md:w-1/3">
        <div className="w-full bg-[#D1A054] py-5 text-center">
          <img src={WORKINGicon} alt="" className="text-center mx-auto" />
        </div>
        <div className=" px-5 pb-5 border rounded-b-lg ">
          <div className="bg-gray-300 h-28  p-5 text-center">
            <h2>WORKING HOURS</h2>
            <p>Mon - Fri: 08:00 - 22:00 </p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>
      </div>
    </div>

    {/*  */}
    <div className="md:w-1/3 m-auto p-5 text-center">
      <p className="text-[#D99904] text-xl">---Send Us a Message---</p>
      <h2 className="border-y-2 text-2xl border-gray-400 my-5 py-5">
        CONTACT FORM
      </h2>
    </div>
    {/*  */}
    <div className="md:w-[70%] m-auto p-5  bg-[#f3f3f3] shadow-md rounded-lg md:h-[550px] space-y-5 md:my-10">
      <form className="w-full">
        <div className="md:flex gap-5 space-y-5">
          <div className="mt-4 md:w-1/2 ">
            <label className="block mb-2 text-sm font-medium text-black ">
              Name
            </label>
            <input
              required
              name="name"
              placeholder="name"
              className="block w-full px-4 py-2 text-gray-700 bg-white border-none rounded-lg   dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="text"
            />
          </div>
          <div className="mt-4 md:w-1/2">
            <label className="block mb-2 text-sm font-medium text-black ">
              Email Address
            </label>
            <input
              required
              name="email"
              placeholder="Email Address"
              className="block w-full px-4 py-2 text-gray-700 bg-white border-none rounded-lg   dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
            />
          </div>
        </div>
        <div className="mt-4 w-full ">
          <label className="block mb-2 text-sm font-medium text-black border-none">
            phone
          </label>
          <input
            required
            name="phone"
            placeholder="phone number with country code"
            className="block w-full px-4 py-2 text-gray-700 bg-white border-none rounded-lg   dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
            type="tel"
          />
        </div>
        {/* make a textarea */}
        <div className="mt-4 w-full ">
          <label className="block  mb-2 text-sm font-medium text-black ">
            Message
          </label>
          <input
            required
            name="Message"
            placeholder="write your message here"
            className="block w-full px-4 py-2 min-h-[150px] text-gray-700 bg-white border-none rounded-lg   dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
            type="textarea"
          />
        </div>
        <div className="w-full text-center"> 
          <button className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] text-white my-5 mx-auto ">
          Send Message
        </button>
        </div>

        
      </form>
    </div>
  </div>
  );
};

export default ContactUs;
