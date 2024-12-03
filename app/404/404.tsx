// app/404.tsx
"use client";

import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const router = useRouter();

  const handleGoBack = () => {
    // Navigate back to /dashboard
    router.push("/dashboard");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-500">
          404 - Page Not Found
        </h1>
        <p className="mt-4 text-lg">
          Trang bạn đang tìm kiếm không tồn tại!!!. Đừng cố gắng nữa ^^
        </p>
        <button
          onClick={handleGoBack}
          className="mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
        >
          Go Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
