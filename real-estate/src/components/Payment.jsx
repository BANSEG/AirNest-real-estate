// import React, { useState } from "react";
// import { PaystackButton } from "react-paystack";

// const Payment = () => {
//   const publicKey = "pk_test_xxxxxxxxxx"; // Replace with your Paystack public key
//   const [email, setEmail] = useState("");
//   const [amount, setAmount] = useState(""); // Amount in Naira (NGN)

//   const amountInKobo = amount * 100; // Convert to kobo (smallest currency unit)

//   const componentProps = {
//     email,
//     amount: amountInKobo,
//     currency: "NGN",
//     publicKey,
//     text: "Pay Now",
//     onSuccess: (response) => alert("Payment Successful! Reference: " + response.reference),
//     onClose: () => alert("Payment Closed"),
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <h1 className="text-3xl font-bold mb-6">Make a Payment</h1>
//       <div className="bg-white p-6 rounded shadow-md w-96">
//         <input
//           type="email"
//           placeholder="Enter Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="border p-2 mb-4 w-full"
//           required
//         />
//         <input
//           type="number"
//           placeholder="Enter Amount (NGN)"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//           className="border p-2 mb-4 w-full"
//           required
//         />
//         <PaystackButton {...componentProps} className="bg-blue-500 text-white px-4 py-2 rounded w-full" />
//       </div>
//     </div>
//   );
// };

// export default Payment;

