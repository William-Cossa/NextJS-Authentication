"use server";

import axios from "axios";
import { redirect } from "next/navigation";

const paymentApi = process.env.PAYMENT_API || "";

export const checkoutPayment = async (amount: number, returnUrl: string) => {
  try {
    const response = await axios.post(paymentApi, {
      amount: amount,
      returnUrl: returnUrl,
    });
    if (!(response.status === 200)) {
      console.error("Error", response);
      return {
        success: false,
        message: "Payment Error.",
        data: response.data,
      };
    }
    // console.log("Payment processed successfully:", response.data);
    return {
      success: true,
      message: "Payment processed successfully.",
      data: response.data,
    };
  } catch (error) {
    console.error("Error processing payment:", error);
    return {
      success: false,
      message: "An error occurred while processing your payment.",
    };
  }
};
