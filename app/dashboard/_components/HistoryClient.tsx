// "use client";

// import React, { useContext, useState } from "react";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import { TEMPLATE } from "../_components/TemplateListSection";
// import Templates from "../../(data)/Templates";
// import { Copy, Search } from "lucide-react";
// import { useRouter } from "next/navigation";
// import { UserSubscriptionContext } from "@/app/(context)/UserSubscription";

// export interface HISTORY {
//   id: number;
//   formData: string;
//   aiResponse: string;
//   templateSlug: string;
//   createdBy: string;
//   createdAt: string;
// }

// interface HistoryClientProps {
//   historyList: HISTORY[];
// }

// function SearchSection({ onSearchInput }: any) {
//   return (
//     <div className="p-10 bg-gradient-to-br flex-col justify-center items-center relative p-5 shadow-sm border bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-100">
//       <h1 className="text-5xl text-orange-400 font-bold text-center">
//         Lịch sử tạo Content
//       </h1>

//       <div className="w-full flex justify-center">
//         <div className="flex gap-2 items-center p-2 border border-green-500 rounded-md bg-white my-5 w-[50%]">
//           <Search className="text-primary" />
//           <input
//             type="text"
//             placeholder="Search"
//             onChange={(event) => onSearchInput(event.target.value)}
//             className="bg-transparent w-full outline-none text-black"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// const HistoryClient: React.FC<HistoryClientProps> = ({ historyList }) => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [copySuccess, setCopySuccess] = useState(false);
//   const [showUpgradeAlert, setShowUpgradeAlert] = useState(false);

//   const { userSubscription } = useContext(UserSubscriptionContext); // Trạng thái nâng cấp của người dùng

//   const router = useRouter();

//   const isValidSlug = (slug: string) => {
//     // Hàm kiểm tra tính hợp lệ của slug
//     return slug && typeof slug === "string" && slug.length > 0;
//   };

//   const getTemplateName = (slug: string) => {
//     const template: TEMPLATE | any = Templates?.find(
//       (item) => item.slug === slug
//     );
//     return template;
//   };

//   const stripFormatting = (text: string) => {
//     return text
//       .replace(/[*#\\]/g, "")
//       .replace(/\n\s*\n/g, "<br><br>")
//       .replace(/(\d+\.\s)/g, "<br>$1")
//       .replace(/\s{2,}/g, " ")
//       .trim();
//   };

//   const filteredHistoryList = historyList.filter(
//     (item) =>
//       item.aiResponse.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       item.templateSlug.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       item.createdAt.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleCopy = (text: string, iconUrl: string, itemSlug: string) => {
//     const itemPath = `/dashboard/content/${itemSlug}`;

//     if (!userSubscription) {
//       setShowUpgradeAlert(true);
//       return;
//     }

//     const tempDiv = document.createElement("div");
//     const cleanedText = stripFormatting(text);
//     tempDiv.innerHTML = `<img src="${iconUrl}" alt="icon" style="width: 20px; height: 20px;"/> ${cleanedText}`;

//     document.body.appendChild(tempDiv);

//     const range = document.createRange();
//     range.selectNodeContents(tempDiv);

//     const selection = window.getSelection();

//     if (selection) {
//       selection.removeAllRanges();
//       selection.addRange(range);
//       document.execCommand("copy");
//     }

//     document.body.removeChild(tempDiv);
//     setCopySuccess(true);
//     setTimeout(() => setCopySuccess(false), 2000);
//   };

//   return (
//     <div className="m-5 p-5 border rounded-lg bg-white">
//       <SearchSection onSearchInput={setSearchQuery} />
//       <p className="text-black-500">Nội dung AI được tạo trước đây của bạn</p>
//       <div className="grid grid-cols-7 font-bold bg-secondary mt-5 py-3 px-3">
//         <h2 className="col-span-2">TEMPLATE</h2>
//         <h2 className="col-span-2">AI RESP</h2>
//         <h2 className="text-center">DATE</h2>
//         <h2 className="text-center">WORDS</h2>
//         <h2 className="text-center">COPY</h2>
//       </div>

//       {filteredHistoryList.map((item: HISTORY, index: number) => (
//         <div key={index} className="grid grid-cols-7 my-5 py-3 px-3">
//           <h2 className="col-span-2 flex gap-2 items-center">
//             <Image
//               src={getTemplateName(item?.templateSlug)?.icon}
//               width={25}
//               height={25}
//               alt={"icon"}
//             />
//             {getTemplateName(item.templateSlug)?.name}
//           </h2>
//           <h2 className="col-span-2 line-clamp-3">{item?.aiResponse}</h2>
//           <h2 className="text-center">{item.createdAt}</h2>
//           <h2 className="text-center">{item.aiResponse.length}</h2>
//           <h2 className="text-center">
//             <Button
//               variant="ghost"
//               className="text-primary font-medium"
//               onClick={() =>
//                 handleCopy(
//                   item.aiResponse,
//                   getTemplateName(item.templateSlug)?.icon,
//                   item.templateSlug
//                 )
//               }
//             >
//               <Copy className="w-4 h-4" />
//               Sao chép
//             </Button>
//           </h2>
//         </div>
//       ))}

//       {copySuccess && (
//         <div className="fixed top-5 right-5 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg">
//           Sao chép thành công!
//         </div>
//       )}

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
//     </div>
//   );
// };

// export default HistoryClient;
"use client";

import React, { useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { TEMPLATE } from "../_components/TemplateListSection";
import Templates from "../../(data)/Templates";
import { Copy, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { UserSubscriptionContext } from "@/app/(context)/UserSubscription";

export interface HISTORY {
  id: number;
  formData: string;
  aiResponse: string;
  templateSlug: string;
  createdBy: string;
  createdAt: string;
}

interface HistoryClientProps {
  historyList: HISTORY[];
}

function SearchSection({ onSearchInput }: any) {
  return (
    <div className="p-10 bg-gradient-to-br flex-col justify-center items-center relative p-5 shadow-sm border bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-100">
      <h1 className="text-5xl text-orange-400 font-bold text-center">
        Lịch sử tạo Content
      </h1>

      <div className="w-full flex justify-center">
        <div className="flex gap-2 items-center p-2 border border-green-500 rounded-md bg-white my-5 w-[50%]">
          <Search className="text-primary" />
          <input
            type="text"
            placeholder="Search"
            onChange={(event) => onSearchInput(event.target.value)}
            className="bg-transparent w-full outline-none text-black"
          />
        </div>
      </div>
    </div>
  );
}

const HistoryClient: React.FC<HistoryClientProps> = ({ historyList }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Số mục trên mỗi trang
  const [copySuccess, setCopySuccess] = useState(false);
  const [showUpgradeAlert, setShowUpgradeAlert] = useState(false);

  const { userSubscription } = useContext(UserSubscriptionContext);

  const router = useRouter();

  const isValidSlug = (slug: string) => {
    return slug && typeof slug === "string" && slug.length > 0;
  };

  const getTemplateName = (slug: string) => {
    const template: TEMPLATE | any = Templates?.find(
      (item) => item.slug === slug
    );
    return template;
  };

  const stripFormatting = (text: string) => {
    return text
      .replace(/[*#\\]/g, "")
      .replace(/\n\s*\n/g, "<br><br>")
      .replace(/(\d+\.\s)/g, "<br>$1")
      .replace(/\s{2,}/g, " ")
      .trim();
  };

  const filteredHistoryList = historyList.filter(
    (item) =>
      item.aiResponse.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.templateSlug.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.createdAt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const paginatedHistoryList = filteredHistoryList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredHistoryList.length / itemsPerPage);

  const handleCopy = (text: string, iconUrl: string, itemSlug: string) => {
    if (!userSubscription) {
      setShowUpgradeAlert(true);
      return;
    }

    const tempDiv = document.createElement("div");
    const cleanedText = stripFormatting(text);
    tempDiv.innerHTML = `<img src="${iconUrl}" alt="icon" style="width: 20px; height: 20px;"/> ${cleanedText}`;

    document.body.appendChild(tempDiv);

    const range = document.createRange();
    range.selectNodeContents(tempDiv);

    const selection = window.getSelection();

    if (selection) {
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand("copy");
    }

    document.body.removeChild(tempDiv);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <div className="m-5 p-5 border rounded-lg bg-white">
      <SearchSection onSearchInput={setSearchQuery} />
      <p className="text-black-500">Nội dung AI đã tạo trước đây của bạn</p>
      <div className="grid grid-cols-7 font-bold bg-secondary mt-5 py-3 px-3">
        <h2 className="col-span text-center">TEMPLATE</h2>
        <h2 className="col-span-3 text-center">AI RESP</h2>
        <h2 className="text-center">DATE</h2>
        <h2 className="text-center">WORDS</h2>
        <h2 className="text-center">COPY</h2>
      </div>

      {paginatedHistoryList.map((item: HISTORY, index: number) => (
        <div key={index} className="grid grid-cols-7 my-5 py-3 px-3">
          <h2 className="col-span flex gap-2 items-center">
            <Image
              src={getTemplateName(item?.templateSlug)?.icon}
              width={25}
              height={25}
              alt={"icon"}
            />
            {getTemplateName(item.templateSlug)?.name}
          </h2>
          <h2 className="col-span-3 line-clamp-3">{item?.aiResponse}</h2>
          <h2 className="text-center">{item.createdAt}</h2>
          <h2 className="text-center">{item.aiResponse.length}</h2>
          <h2 className="text-center">
            <Button
              variant="ghost"
              className="text-primary font-medium"
              onClick={() =>
                handleCopy(
                  item.aiResponse,
                  getTemplateName(item.templateSlug)?.icon,
                  item.templateSlug
                )
              }
            >
              <Copy className="w-4 h-4" />
              Sao chép
            </Button>
          </h2>
        </div>
      ))}

      <div className="flex justify-between mt-5">
        <Button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Trang trước
        </Button>
        <p>
          Trang {currentPage} / {totalPages}
        </p>
        <Button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Trang sau
        </Button>
      </div>

      {copySuccess && (
        <div className="fixed top-5 right-5 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg">
          Sao chép thành công!
        </div>
      )}

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
    </div>
  );
};

export default HistoryClient;
