import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  return (
    <div>
      <div className="md:w-1/2 mx-auto p-5 text-center">
        <p className="text-[#D99904] text-xl">---make PAYMENT ---</p>
        <h2 className="border-y-2 text-2xl border-gray-400 my-5 py-5">
          PAYMENT
        </h2>
      </div>
      {/*  */}
      <Elements stripe={stripePromise}>
        <CheckOutForm ></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;
