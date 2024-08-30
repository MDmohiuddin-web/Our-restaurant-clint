import React from "react";
import { FaRocket } from "react-icons/fa6";

const AddReview = () => {
  return (
    <div>
      <div className="md:w-1/3 m-auto px-5 text-center mx-auto">
        <p className="text-[#D99904] text-xl">---Sharing is Caring!!!---</p>
        <h2 className="border-y-2 text-2xl border-gray-400 my-5 py-5">
          GIVE A REVIEW...
        </h2>
      </div>
      {/* form for review start */}
      <div className="md:w-[70%] mx-auto   bg-[#f3f3f3] shadow-md rounded-lg md:min-h-[550px] space-y-5 ">
        <form
          // onSubmit={handleSubmit(onSubmit)}
          className="w-full px-8 py-3"
        >
          <div className="rating flex justify-center ">
            <input type="radio" name="rating-1" className="mask mask-star" />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star"
              defaultChecked
            />
            <input type="radio" name="rating-1" className="mask mask-star" />
            <input type="radio" name="rating-1" className="mask mask-star" />
            <input type="radio" name="rating-1" className="mask mask-star" />
          </div>
          <div className="mt-4 w-full ">
            <label className="block mb-2 text-sm font-medium text-black border-none">
              Which recipe you liked most?
            </label>
            <input
              required
              placeholder=" recipe you liked "
              //   {...register('name', { required: true })}
              className="block w-full px-4 py-2 text-gray-700 bg-white border-none rounded-lg   dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="text"
            />
          </div>
          <div className="mt-4 w-full ">
            <label className="block mb-2 text-sm font-medium text-black border-none">
              Do you have any suggestion for us?
            </label>
            <input
              required
              placeholder="Suggestion here"
              //   {...register('name', { required: true })}
              className="block w-full px-4 py-2 text-gray-700 bg-white border-none rounded-lg   dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="text"
            />
          </div>
          {/*  */}

          {/*  */}

          {/* make a textarea */}

          <div className="mt-4 w-full ">
            <label className="block  mb-2 text-sm font-medium text-black ">
              Kindly express your care in a short way.
            </label>
            <input
              required
              //   {...register("recipe", { required: true })}
              placeholder="Review in detail"
              className="block w-full px-4 py-2 min-h-[150px] text-gray-700 bg-white border-none rounded-lg   dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="textarea"
            />
          </div>
          {/*  */}
          <div className="mt-4  w-full gap-5  md:flex px-5 ">
            <button className="btn mt-4 md:w-1/2 w-full bg-gradient-to-r from-[#835D23] to-[#B58130] text-white my-5 mx-auto  ">
              Send Review <FaRocket></FaRocket>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
