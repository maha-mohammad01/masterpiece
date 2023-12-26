// CheckoutForm.js
import { ElementsConsumer, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import React from "react";
import CardSection from "./CardSection";
import axios from "axios";
import "../App.css"; // Import your CSS file for styling

function CheckoutForm({ stripe, elements }) {
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.log(error.message);
    } else {
      if (paymentMethod) {
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:2000/Payment", {
          amount: 10 * 100,
          id,
        });

        if (response.data.success) {
          try {
            alert("Payment successful")
            console.log("Payment successful");
          } catch (error) {
            console.log(error);
          }
        } else {
          console.log("Payment failed");
        }
      } else {
        console.log("Payment method is undefined");
      }
    }
  };

  return (
    <div className="checkout-container">
      <div className="product-info mt-32">
        <h3 className="product-title">Product</h3>
        <h4 className="product-price">$10</h4>
      </div>
      <form onSubmit={handleSubmit} className="payment-form">
        <CardSection />
        <button className="btn-pay">Buy Now</button>
      </form>
    </div>
  );
}

export default CheckoutForm;


// import React from "react";
// import axios from "axios";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import CardSection from "./CardSection";
// import { useNavigate } from "react-router-dom";

// const stripePromise = loadStripe(
//   "pk_test_51O6ir2JHXfBpbbMkPbKEGUGpcDt2kKbOavmI201QuITZ8F3Y48KGAOPE3hvYfSuJcIdhDa8gk7KvAW2FeiwBDPF5004smsWbGA"
// );

// const CheckoutForm = () => {
//   const navigate = useNavigate();
//   const handlePremiumCheckout = async () => {
//     // console.log("Redirecting to /success");
//     // navigate("/success");

//     try {
//     //   axios.defaults.headers.common["Authorization"] = token;
//       const response = await axios.post("http://localhost:8080/subscribtion");

//       const sessionId = response.data.id;

//       const stripe = await stripePromise;

//       const { error } = await stripe.redirectToCheckout({
//         sessionId: sessionId,
//       });
//       if (error) {
//         console.error("Error redirecting to checkout:", error);
//       } else {
//         console.log("Redirecting to /success");
//         navigate("/success");
//       }
//       console.log("Response from backend:", response.data);
//     } catch (error) {
//       console.error("Error sending data:", error);
//     }
//   };

//   return (
//     <div>
//       <button
//         onClick={handlePremiumCheckout}
//         className="w-full px-4 py-2 mt-6 tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-900 rounded-md hover:bg-indigo-950 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
//       >
//         Start Now
//       </button>
//     </div>
//   );
// };

// const PremiumSubscribe = () => {
//   return (
//     <Elements stripe={stripePromise}>
//       <CheckoutForm />
//     </Elements>
//   );
// };

// export default PremiumSubscribe;