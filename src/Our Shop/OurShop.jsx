const OurShop = () => {
  return (
    <div>
      {/*  */}
      <div className=" mb-10 OurShop_img md:h-[500px] flex justify-center items-center rounded-lg p-10">
        <div className="bg-black bg-opacity-50 md:w-[70%] text-white text-center p-10 rounded-lg">
          <h3 className=" text-4xl my-5 font-bold">OurShop</h3>
          <p className="text-gray-50">Would you like to try a dish?</p>
        </div>
      </div>
      {/*  */}
      <div className="md:w-4/5 m-auto p-5 text-center">
        <nav class="text-black bg-white  ">
          <div class="text-black container flex items-center justify-center p-6 mx-auto capitalize ">
            <a
              href="#"
              class="text-black  transition-colors duration-300 transform  border-b-2 border-yellow-500 mx-1.5 sm:mx-6 hover:text-yellow-500 "
            >
              Salad
            </a>

            <a
              href="#"
              class="text-black border-b-2 border-transparent  transition-colors duration-300 transform  hover:border-yellow-500 mx-1.5 sm:mx-6 hover:text-yellow-500 "
            >
              pizza
            </a>

            <a
              href="#"
              class="text-black border-b-2 border-transparent  transition-colors duration-300 transform  hover:border-yellow-500 mx-1.5 sm:mx-6 hover:text-yellow-500 "
            >
             soups
            </a>

            <a
              href="#"
              class="text-black   border-b-2 border-transparent  transition-colors duration-300 transform  hover:border-yellow-500 mx-1.5 sm:mx-6 hover:text-yellow-500 "
            >
              desserts
            </a>
            <a
              href="#"
              class="text-black   border-b-2 border-transparent  transition-colors duration-300 transform  hover:border-yellow-500 mx-1.5 sm:mx-6 hover:text-yellow-500 "
            >
              drinks
            </a>

            
          </div>
        </nav>
        {/*  */}
      </div>
    </div>
  );
};

export default OurShop;
