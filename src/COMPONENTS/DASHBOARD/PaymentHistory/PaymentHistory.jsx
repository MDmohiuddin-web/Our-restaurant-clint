import React from "react";
import UseAuth from "../../../Hooks/UseAuth";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";

const PaymentHistory = () => {
  const axiosSecure = UseAxiosSecure();
  const { user } = UseAuth();
  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      // console.log(res.data);
      return res.data;
    },
  });

  return (
    <div>
      <div className="mx-auto w-[90%] h-svh ">
        <div className="md:w-1/2 m-auto p-5 text-center mx-auto">
          <p className="text-[#D99904] text-xl">---view all payments---</p>
          <h2 className="border-y-2 text-2xl border-gray-400 my-5 py-5">
            PAYMENT HISTORY
          </h2>
        </div>
        {/* table start */}

        <div>
          <div className="flex justify-start font-bold ">
            <h2>Total Payments : {payments.length} </h2>
            {/* <h2>TOTAL PRICE :$ {TotalPrice} </h2> */}
            {/* <button className="btn text-white bg-[#D1A054]">Pay</button> */}
          </div>
          <div className="overflow-x-auto capitalize my-5  md:h-[530px]">
            <table className="table  ">
              {/* head */}
              <thead className="bg-[#D1A054] text-white rounded-t-md   ">
                <tr>
                  <th>
                    <label>
                      <h4>Serial</h4>
                    </label>
                  </th>

                  <th>EMAIL</th>
                  <th>TransactionId</th>
                  <th>TOTAL PRICE</th>
                  <th>PAYMENT DATE</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody className="mt-2 ">
                {payments.map((payment, index) => (
                  <tr
                    key={payment?._id}
                    className="hover:shadow-md duration-300  border-none"
                  >
                    <th>
                      <label>
                        <h4>{index + 1}</h4>
                      </label>
                    </th>

                    <td>
                      <h2>{payment?.email}</h2>
                    </td>
                    <td>
                      <h2>{payment?.transactionId}</h2>
                    </td>

                    <td>
                      <h2>$ {payment?.price}</h2>
                    </td>
                    <td>
                      <h2>{payment?.date.split("T")[0]}</h2>
                    </td>
                    <td>
                      <h2> {payment?.status}</h2>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
