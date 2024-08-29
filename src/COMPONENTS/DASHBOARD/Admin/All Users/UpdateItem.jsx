import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import UseAxiosPublic from "../../../../Hooks/UseAxiosPublic";

const UpdateItem = () => {
  const item = useLoaderData();
  console.log(item);
  const { name, category, price, recipe, image ,_id} = item;
  // console.log(name, category, price, recipe, image);


  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


  const { register, handleSubmit } = useForm();
  const axiosSecure = UseAxiosSecure();
  const axiosPublic = UseAxiosPublic();

  const onSubmit = async (data) => {
    console.log(data);
    // image upload to img bb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      // now send the menu item data to the server with the image url
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      //
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes.data);
      if(menuRes.data.modifiedCount > 0){
        // show success popup
        // reset();
        Swal.fire({
          
            icon: "success",
            title: `${data.name} is updated to the menu.`,
            showConfirmButton: false,
            timer: 1500
          });
    }
    }
    console.log("with image url", res.data);
  };


  

  return (
    <div>
      <div className="md:w-1/2 mx-auto p-5 text-center">
        <p className="text-[#D99904] text-xl">
          ---DO YOU WANT TO UPDATE ITEM ?---
        </p>
        <h2 className="border-y-2 text-2xl border-gray-400 my-5 py-5">
          UPDATE ITEM
        </h2>
      </div>
      {/*  */}

      <div className="md:w-[70%] mx-auto   bg-[#f3f3f3] shadow-md rounded-lg md:min-h-[550px] space-y-5 ">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full px-8 py-3">
          <div className="mt-4 w-full ">
            <label className="block mb-2 text-sm font-medium text-black border-none">
              Recipe name
            </label>
            <input
              defaultValue={name}
              
              placeholder="Recipe Name"
              {...register("name", { required: true })}
              className="block w-full px-4 py-2 text-gray-700 bg-white border-none rounded-lg   dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="text"
            />
          </div>
          {/*  */}
          <div className="md:flex gap-5 space-y-5 ">
            <div className="mt-4 md:w-1/2 ">
              <label className="block mb-2 text-sm font-medium text-black ">
                Category
              </label>
              <select
                defaultValue={category}
                
                {...register("category", { required: true })}
                className="select  w-full text-gray-700 bg-white border-none rounded-lg   dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            <div className="mt-4 md:w-1/2">
              <label className="block mb-2 text-sm font-medium text-black ">
                Price
              </label>
              <input
                defaultValue={price}
                placeholder="Price"
                {...register("price", { required: true })}
                className="block w-full px-4 py-2 text-gray-700 bg-white border-none rounded-lg   dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="number"
              />
            </div>
          </div>
          {/*  */}
          <div className="md:flex gap-5 space-y-5 justify-center items-center ">
          {/* make a textarea */}
          <div className="mt-4 w-full ">
            <label className="block  mb-2 text-sm font-medium text-black ">
              Recipe Details
            </label>
            <input
              defaultValue={recipe}
              
              {...register("recipe", { required: true })}
              placeholder="write your Recipe Details here"
              className="block w-full px-4 py-2 min-h-[150px] text-gray-700 bg-white border-none rounded-lg   dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="textarea"
            />
          </div>
          {/* for image */}
          <div className="mt-4  overflow-hidden ">
          <label className="block  mb-2 text-sm font-medium text-black ">
              photo
            </label>

            <img src={image} alt=""  className="h-[150px] w-full rounded-lg "/>
            
          </div>

          </div>
          {/*  */}
          <div className="mt-4  w-full gap-5  md:flex px-5 ">
          <input
          required
              {...register("image", { required: true })}
              // defaultValue={image}
              type="file"
              className="md:w-1/2 file-input file-input-bordered w-full mt-4"
            />


            <button className="btn mt-4 md:w-1/2 w-full bg-gradient-to-r from-[#835D23] to-[#B58130] text-white my-5 mx-auto  ">
              Update Recipe Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
