"use client";

import React, { useState } from "react";

export default function SuccessPageModal() {
  const [isOpen, setIsOpen] = useState(true); // Trạng thái mở/đóng modal

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
            <h1 className="text-4xl font-bold text-green-600">
              Thanh toán thành công!
            </h1>
            <p className="mt-4 text-lg">Cảm ơn bạn đã nâng cấp tài khoản 🎉</p>
            <button
              className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                closeModal(); // Đóng modal
                window.location.href = "dashboard/billing"; // Điều hướng về dashboard
              }}
            >
              Quay về trang chủ
            </button>
          </div>
        </div>
      )}
    </>
  );
}
