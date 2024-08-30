import React from "react";
import WORKINGicon from '../../../assets/Resources/icon/icon (1).svg';
import phonesicon from "../../../assets/Resources/icon/icon (2).svg";
import addressicon from "../../../assets/Resources/icon/icon (3).svg";
import {  FaTableCells } from "react-icons/fa6";

const Reservation = () => {
  return (
    <div className="w-full">
      <div className="md:w-1/3 m-auto px-5 text-center mx-auto">
        <p className="text-[#D99904] text-xl">---Reservation---</p>
        <h2 className="border-y-2 text-2xl border-gray-400 my-5 py-5">
        BOOK A TABLE
        </h2>
      </div>
      {/* form for reservation start */}
      <div className="md:w-[70%] mx-auto   rounded-lg  space-y-5 ">
        <form 
        // onSubmit={handleSubmit(onSubmit)} 
        
        className="w-full px-8 py-3">
          
          
          <div className="md:flex gap-5 space-y-5  justify-center items-center">
            
            <div className="mt-4 md:w-1/2">
              <label className="block mb-2 text-sm font-medium text-black ">
              Date
              </label>
              <input
                required
                placeholder="Price"
                // {...register('price', { required: true })}
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg   dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="date"
              />
            </div>
            <div className="mt-4 md:w-1/2">
              <label className="block mb-2 text-sm font-medium text-black ">
              Time
              </label>
              <input
                required
                placeholder="Price"
                // {...register('price', { required: true })}
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg   dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="time"
              />
            </div>
            <div className="mt-4 md:w-1/2 ">
              <label className="block mb-2 text-sm font-medium text-black ">
              Guest
              </label>
              <select
                defaultValue="default"
                // {...register('category', { required: true })}
                className="select  w-full text-gray-700 bg-white border rounded-lg   dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              >
                <option disabled value="default">
                  Select a 1 Person
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="6">6</option>
              </select>
            </div>
          </div>
          <div className="md:flex gap-5 space-y-5  justify-center items-center">

            {/*  */}
           
            <div className="mt-4 md:w-1/2">
              <label className="block mb-2 text-sm font-medium text-black ">
              Name
              </label>
              <input
                required
                placeholder="Price"
                // {...register('price', { required: true })}
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg   dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
              />
            </div>
            <div className="mt-4 md:w-1/2">
              <label className="block mb-2 text-sm font-medium text-black ">
              Phone
              </label>
              <input
                required
                placeholder="phone number" 
                // {...register('price', { required: true })}
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg   dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="number"
              />
            </div>
            <div className="mt-4 md:w-1/2">
              <label className="block mb-2 text-sm font-medium text-black ">
              Email
              </label>
              <input
                required
                placeholder="email"
                // {...register('price', { required: true })}
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg   dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
              />
            </div>
          </div>
          {/*  */}

          
          <div className="mt-4  w-full gap-5  md:flex px-5 ">
            

            <button className="btn mt-4 md:w-1/2 w-full bg-gradient-to-r from-[#835D23] to-[#B58130] text-white my-5 mx-auto  ">
            Book A Table
             <FaTableCells></FaTableCells>
            </button>
          </div>
        </form>
      </div>




      {/* location start */}
      <div>
      <div className="md:w-1/3 m-auto px-5 text-center">
      <p className="text-[#D99904] text-xl">---Visit Us---</p>
      <h2 className="border-y-2 text-2xl border-gray-400 my-5 py-2">
        OUR LOCATION
      </h2>
    </div>
    <div className="md:w-[70%] m-auto px-5 space-x-5 md:flex justify-around ">
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
      </div>
    </div>
  );
};

export default Reservation;
