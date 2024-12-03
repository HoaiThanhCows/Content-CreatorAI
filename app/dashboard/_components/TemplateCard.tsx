// "use client";

// import { TEMPLATE } from "@/app/dashboard/_components/TemplateListSection";
// import Image from "next/image";
// import React, { useContext, useState } from "react";
// import { useRouter } from "next/navigation";
// import { UserSubscriptionContext } from "@/app/(context)/UserSubscription";
// import { TotalUsageContext } from "@/app/(context)/TotalUsafeContext";

// // Danh sách các đường dẫn yêu cầu nâng cấp
// const restrictedPaths = [
//   "/dashboard/content/VIP-write-code",
//   "/dashboard/content/VIP-english-grammer-checker",
//   "/dashboard/content/VIP-explain-code",
//   "/dashboard/content/VIP-code-bug-detector",
//   "/dashboard/content/VIP-tagline-generator",
//   "/dashboard/content/VIP-product-description",
// ];

// function TemplateCard(item: TEMPLATE) {
//   const router = useRouter();
//   const { userSubscription } = useContext(UserSubscriptionContext);
//   const { totalUsage } = useContext(TotalUsageContext);
//   const [showUpgradeAlert, setShowUpgradeAlert] = useState(false);

//   const handleCardClick = () => {
//     const itemPath = `/dashboard/content/${item.slug}`;

//     if (
//       restrictedPaths.includes(itemPath) && // Nếu cần nâng cấp
//       !userSubscription // Chưa nâng cấp hoặc vượt mức sử dụng
//     ) {
//       setShowUpgradeAlert(true); // Hiển thị thông báo
//     } else {
//       router.push(itemPath); // Điều hướng nếu đủ điều kiện
//     }
//   };

//   return (
//     <>
//       {/* Card hiển thị nội dung */}
//       <div
//         className="p-5 shadow-md rounded-md border bg-white flex
//             flex-col gap-3 cursor-pointer hover:scale-105 transition-all"
//         onClick={handleCardClick}
//       >
//         <Image src={item.icon} alt="icon" width={50} height={50} />
//         <h2 className="font-medium text-lg">{item.name}</h2>
//         <p className="text-gray-500 line-clamp-3">{item.desc}</p>
//       </div>

//       {/* Thông báo nâng cấp */}
//       {showUpgradeAlert && (
//         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-semibold mb-4 text-center">
//               🚀 Cần nâng cấp tài khoản!🚀
//             </h2>
//             <p className="text-gray-700 mb-4 text-center">
//               Để truy cập nội dung này, bạn cần nâng cấp tài khoản.
//             </p>
//             <div className="flex justify-center gap-4">
//               <button
//                 onClick={() => router.push("/dashboard/billing")}
//                 className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-md"
//               >
//                 Nâng cấp ngay
//               </button>
//               <button
//                 onClick={() => setShowUpgradeAlert(false)}
//                 className="bg-gray-400 hover:bg-gray-500 text-white font-medium px-4 py-2 rounded-md"
//               >
//                 Đóng
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default TemplateCard;

"use client";

import { TEMPLATE } from "@/app/dashboard/_components/TemplateListSection";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { UserSubscriptionContext } from "@/app/(context)/UserSubscription";
import { TotalUsageContext } from "@/app/(context)/TotalUsafeContext";

// Danh sách các đường dẫn yêu cầu nâng cấp
const restrictedPaths = [
  "/dashboard/content/VIP-write-code",
  "/dashboard/content/VIP-english-grammer-checker",
  "/dashboard/content/VIP-explain-code",
  "/dashboard/content/VIP-code-bug-detector",
  "/dashboard/content/VIP-tagline-generator",
  "/dashboard/content/VIP-product-description",
];

// Danh sách các `slug` hợp lệ
const validSlugs = [
  "VIP-write-code",
  "VIP-english-grammer-checker",
  "VIP-explain-code",
  "VIP-code-bug-detector",
  "VIP-tagline-generator",
  "VIP-product-description",
  "generate-blog-title",
  "blog-content-generation",
  "blog-topic-idea",
  "youtube-seo-title",
  "youtube-description",
  "youtube-tag",
  "rewrite-article",
  "text-improver",
  "add-emoji-to-text",
  "instagram-post-generator",
  "instagram-hash-tag-generator",
  "instagram-post-idea-generator",
];

function TemplateCard(item: TEMPLATE) {
  const router = useRouter();
  const { userSubscription } = useContext(UserSubscriptionContext);
  const { totalUsage } = useContext(TotalUsageContext);
  const [showUpgradeAlert, setShowUpgradeAlert] = useState(false);

  // Hàm kiểm tra nếu slug hợp lệ
  const isValidSlug = (slug: string) => validSlugs.includes(slug);

  // Hàm xử lý khi click vào card
  const handleCardClick = () => {
    const itemPath = `/dashboard/content/${item.slug}`;

    // Kiểm tra nếu slug không hợp lệ
    if (!isValidSlug(item.slug)) {
      router.push("/Dashboard"); // Điều hướng đến trang 404 nếu slug không hợp lệ
      return;
    }

    if (
      restrictedPaths.includes(itemPath) && // Nếu cần nâng cấp
      !userSubscription // Chưa nâng cấp hoặc vượt mức sử dụng
    ) {
      setShowUpgradeAlert(true); // Hiển thị thông báo
    } else {
      router.push(itemPath); // Điều hướng nếu đủ điều kiện
    }
  };

  return (
    <>
      {/* Card hiển thị nội dung */}
      <div
        className="p-5 shadow-md rounded-md border bg-white flex
            flex-col gap-3 cursor-pointer hover:scale-105 transition-all"
        onClick={handleCardClick}
      >
        <Image src={item.icon} alt="icon" width={50} height={50} />
        <h2 className="font-medium text-lg">{item.name}</h2>
        <p className="text-gray-500 line-clamp-3">{item.desc}</p>
      </div>

      {/* Thông báo nâng cấp */}
      {showUpgradeAlert && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              🚀 Cần nâng cấp tài khoản!🚀
            </h2>
            <p className="text-gray-700 mb-4 text-center">
              Để truy cập nội dung này, bạn cần nâng cấp tài khoản.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => router.push("/dashboard/billing")}
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-md"
              >
                Nâng cấp ngay
              </button>
              <button
                onClick={() => setShowUpgradeAlert(false)}
                className="bg-gray-400 hover:bg-gray-500 text-white font-medium px-4 py-2 rounded-md"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TemplateCard;
