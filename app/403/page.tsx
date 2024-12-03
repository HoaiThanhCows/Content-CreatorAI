// File: /pages/app/403.tsx

import React from "react";
import { Button } from "@/components/ui/button"; // Nếu bạn có component Button tùy chỉnh
import { useRouter } from "next/router";

const ForbiddenPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-red-500 mb-5">
        403 - Truy cập bị từ chối
      </h1>
      <p className="text-center text-gray-700 mb-5">
        Bạn không thể truy cập trực tiếp trang này. Vui lòng sử dụng giao diện
        chính để điều hướng.
      </p>
      <Button onClick={() => router.push("/dashboard")} className="px-6 py-3">
        Quay lại trang chính
      </Button>
    </div>
  );
};

export default ForbiddenPage;
