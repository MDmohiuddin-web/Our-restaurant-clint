import React from "react";
import UseCart from "../../Hooks/UseCart";
import { FaTrash } from "react-icons/fa6";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";

import Swal from "sweetalert2";

const Cart = () => {
  const [cart, refetch] = UseCart();
  const axiosSecure = UseAxiosSecure();
  const TotalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  //   console.log(TotalPrice);

  const HandelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#D99904",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
    .then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/cards/${id}`).then((res) => {
          // for seeing the data is deleted or not
          // console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
              confirmButtonColor: "#D99904",
            });
          }
        });
      }
    });

   
  };

  return (
    <div className="mx-auto w-4/5 h-svh ">
      <div className="md:w-1/3 m-auto p-5 text-center mx-auto">
        <p className="text-[#D99904] text-xl">---My Cart---</p>
        <h2 className="border-y-2 text-2xl border-gray-400 my-5 py-5">
          WANNA ADD MORE?
        </h2>
      </div>
      {/* table start */}

      <div>
        <div className="flex justify-between font-bold ">
          <h2>TOTAL ORDER : {cart?.length}</h2>
          <h2>TOTAL PRICE :$ {TotalPrice} </h2>
          <button className="btn text-white bg-[#D1A054]">Pay</button>
        </div>

        <div className="overflow-x-auto capitalize my-5  md:h-[530px]">
          <table className="table  ">
            {/* head */}
            <thead className="bg-[#D1A054] text-white rounded-t-md  ">
              <tr>
                <th>
                  <label>
                    <h4>quantity</h4>
                  </label>
                </th>
                <th>item image</th>
                <th>item Name</th>
                <th>price</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody className="mt-2 ">
              {/* row 1 */}
              {cart.map((item, index) => (
                <tr key={item._id} className="hover:shadow-md duration-300  border-none">
                  <th>
                    <label>
                      <h4>{index + 1}</h4>
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>

                  <td>
                    <h2>{item.name}</h2>
                  </td>
                  <td> $ {item.price}</td>
                  <th>
                    <button
                      onClick={() => HandelDelete(item._id)}
                      className="btn bg-red-600  text-white"
                    >
                      Delete <FaTrash></FaTrash>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
