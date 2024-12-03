/* eslint-disable @next/next/no-sync-scripts */

"use client";

import React, { useContext, useState } from "react";
import axio from "axios";
import { Loader2Icon } from "lucide-react";
import { db } from "@/utils/db";
import { UserSubscription } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { UserSubscriptionContext } from "@/app/(context)/UserSubscription";
import { Button } from "@/components/ui/button";

function Billing() {
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const { userSubscription, setUserSubscription } = useContext(
    UserSubscriptionContext
  );
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false); // State to track if payment is successful
  const [isPaymentFailed, setIsPaymentFailed] = useState(false); // State to track payment failure

  const CreateSubscription = () => {
    setLoading(true);
    axio.post("/api/create-subscription", {}).then(
      (resp) => {
        console.log(resp.data);
        OnPayment(resp.data.id);
      },
      (error) => {
        setLoading(false);
      }
    );
  };

  const OnPayment = (subId: string) => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      subscription_id: subId,
      name: "VHT AI Apps",
      amount: "3000", // Price in paise
      description: "Monthly Subscription",
      handler: async (resp: any) => {
        console.log("Thanh toán thành công:", resp);
        if (resp) {
          await SaveSubscription(resp?.razorpay_payment_id);
          setIsPaymentSuccess(true); // Show success popup
        }
        setLoading(false);
      },
      modal: {
        ondismiss: () => {
          setIsPaymentFailed(true); // Show failure popup
          setLoading(false);
        },
      },
    };

    const rzp = new window.Razorpay(options);

    rzp.on("payment.failed", function (response: any) {
      console.error("Thanh toán thất bại:", response.error);
      alert(
        `Thanh toán thất bại: ${response.error.reason}. Vui lòng thử lại sau!`
      );
      setIsPaymentFailed(true); // Show failure popup
      setLoading(false);
    });

    rzp.open(); // Open the payment popup
  };

  const SaveSubscription = async (paymentId: string) => {
    const result = await db.insert(UserSubscription).values({
      email: user?.primaryEmailAddress?.emailAddress,
      userName: user?.fullName,
      active: true,
      paymentId: paymentId,
      JoinDate: moment().format("DD/MM/YYYY"),
    });
    console.log(result);
  };

  return (
    <div className="h-screen overflow-y-auto relative p-5 shadow-sm border bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-100">
      <script src="https://checkout.razorpay.com/v1/checkout.js"></script>

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <h2 className="text-center font-bold text-5xl my-5">
          🚀 Nâng cấp tài khoản 🚀
        </h2>
      </div>

      <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
        {/* Starter Plan */}
        <div className="shadow p-5 rounded-lg border-t-4 border-green-400 bg-white">
          <p className="mt-2 sm:mt-4">
            <strong className="text-3xl font-bold text-gray-500  sm:text-4xl ">
              Free
            </strong>
          </p>

          <div className="mt-8">
            <ul className="grid grid-cols-1 gap-4">
              <li className="inline-flex items-center text-gray-600">
                <svg
                  className="w-4 h-4 mr-2 fill-current text-green-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                </svg>
                Giới hạn 10,000 Words.
              </li>
              <li className="inline-flex items-center text-gray-600">
                <svg
                  className="w-4 h-4 mr-2 fill-current text-green-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                </svg>
                Sử dụng 12 Content Templates miễn phí.
              </li>
              <li className="inline-flex items-center text-gray-600">
                <svg
                  className="w-4 h-4 mr-2 fill-current text-green-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                </svg>
                Không giới hạn sao chép nội dung.
              </li>
              <li className="inline-flex items-center text-gray-600">
                <svg
                  className="w-4 h-4 mr-2 fill-current text-green-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                </svg>
                Được kích hoạt miễn phí khi đăng kí tài khoản.
              </li>

              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <p className="mt-2 sm:mt-4 text-center">
              <strong className="text-2xl font-bold text-gray-900 sm:text-4xl">
                0$
              </strong>
            </p>
          </div>

          <div className="mt-8">
            <button
              disabled
              className="bg-gray-400 px-3 py-2 rounded-lg w-full text-white border-2"
              style={{ height: "auto" }}
            >
              Đã kích hoạt
            </button>
          </div>
        </div>

        {/* Standard Plan */}
        <div className="shadow p-5 rounded-lg border-t-4 border-blue-400 bg-white">
          <p className="mt-2 sm:mt-4">
            <strong className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400 sm:text-4xl">
              Premium
            </strong>
          </p>

          <div className="mt-8">
            <ul className="grid grid-cols-1 gap-4">
              <li className="inline-flex items-center text-gray-600">
                <svg
                  className="w-4 h-4 mr-2 fill-current text-blue-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                </svg>
                Giới hạn 100,000 Words.
              </li>
              <li className="inline-flex items-center text-gray-600">
                <svg
                  className="w-4 h-4 mr-2 fill-current text-blue-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                </svg>
                Sử dụng 12 Content Templates miễn phí.
              </li>
              <li className="inline-flex items-center text-gray-600">
                <svg
                  className="w-4 h-4 mr-2 fill-current text-blue-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                </svg>
                Sử dụng 6 Content Templates Premium.
              </li>
              <li className="inline-flex items-center text-gray-600">
                <svg
                  className="w-4 h-4 mr-2 fill-current text-blue-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                </svg>
                Không giới hạn sao chép nội dung.
              </li>{" "}
              <li className="inline-flex items-center text-gray-600">
                <svg
                  className="w-4 h-4 mr-2 fill-current text-blue-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                </svg>
                Sao chép được nội dung trong lịch sử.
              </li>
            </ul>
          </div>
          <p className="mt-2 sm:mt-4 text-center">
            <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
              30$
            </strong>
          </p>
          <div className="mt-8">
            <button
              disabled={loading || userSubscription}
              onClick={() => !userSubscription && CreateSubscription()}
              className={`bg-gradient-to-r from-pink-500 to-orange-400 hover:from-gray-500 hover:to-gray-500 px-3 py-2 rounded-lg w-full text-white border-2 $ {
                userSubscription ? "text-red-500" : ""
              }`}
            >
              {userSubscription ? "Đã nâng cấp" : "Nâng cấp"}
            </button>
          </div>
        </div>
      </div>

      {/* Payment Success Popup */}
      {isPaymentSuccess && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-75 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-2xl font-bold text-green-600">
              Thanh toán thành công!
            </h2>
            <p className="mt-4 text-lg">Cảm ơn bạn đã nâng cấp tài khoản 🎉</p>

            <button
              onClick={() => {
                setIsPaymentSuccess(false);
                window.location.reload(); // Reload the page on close
              }}
              className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Đóng
            </button>
          </div>
        </div>
      )}

      {/* Payment Failed Popup */}
      {isPaymentFailed && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-75 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-2xl font-bold text-red-600">
              Thanh toán thất bại!
            </h2>
            <p className="mt-4 text-lg">
              Rất tiếc, đã xảy ra lỗi trong quá trình thanh toán. Vui lòng thử
              lại sau!
            </p>

            <button
              onClick={() => setIsPaymentFailed(false)}
              className="mt-6 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              Đóng
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Billing;
