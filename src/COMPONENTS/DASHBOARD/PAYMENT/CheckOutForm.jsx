import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import UseCart from "../../../Hooks/UseCart";
import UseAuth from "../../../Hooks/UseAuth";
import Swal from "sweetalert2";

const CheckOutForm = () => {
  /**
   * 1. install stripe and stripe react
   * 2. create card element
   * 3. create stripe account and get publishable key
   * 4. use publishable key and use stripe to get card information and error
   * 5. create payment intent post on the server. and return client secret. install stripe on the server side and get client secret. make sure you used the payment method types: ['card']
   * 6. from client side get the client secret and save it.
   * 7. use confirm card payment and pass user information, card and client secret
   * 8. display transaction id
   *
   */
  const axiosSecure = UseAxiosSecure();
  const [transactionId, setTransactionId] = useState('');
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [Cart,refetch] = UseCart();
  const totalPrice = Cart.reduce((total, item) => total + item.price, 0);
  const stripe = useStripe();
  const elements = useElements();
  const { user } = UseAuth();

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          // console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
    //   console.log('confirm error')
    } else {
      console.log('payment intent', paymentIntent)
      if (paymentIntent.status === "succeeded") {
        console.log('transaction id', paymentIntent.id);
        setTransactionId(paymentIntent.id);

        // now save the payment in the database
        const payment = {
          email: user.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          date: new Date(), // utc date convert. use moment js to
          cartIds: Cart.map((item) => item._id),
          menuItemIds: Cart.map((item) => item.menuId),
          status: "pending",
        };

        const res = await axiosSecure.post('/payments', payment);
      console.log('payment saved', res.data);
      refetch();
      if (res.data?.paymentResult?.insertedId) {
          Swal.fire({
              
              icon: "success",
              title: "Thank you for the payment",
              showConfirmButton: false,
              timer: 1500
          });
          // navigate('/dashboard/PaymentHistory')
      }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-1/2 mx-auto">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      ></CardElement>
      <div className="text-center ">
        <button
          className="btn w-3/4  mt-8 text-white bg-[#570DF8]"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        <p className="text-red-600">{error}</p>
        {transactionId && (
          <p className="text-green-600">
            
            Your transaction id: {transactionId}
          </p>
        )}
      </div>
    </form>
  );
};

export default CheckOutForm;
