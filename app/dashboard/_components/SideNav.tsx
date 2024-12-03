// "use client";

// import { FileClock, Home, Settings, WalletCards } from "lucide-react";
// import Image from "next/image";
// import { usePathname, useRouter } from "next/navigation";
// import React, { useEffect } from "react";
// import UsageTrack from "./UsageTrack";

// function SideNav() {
//   const router = useRouter();

//   const MenuList = [
//     {
//       name: "Trang chủ",
//       icon: Home,
//       path: "/dashboard",
//     },
//     {
//       name: "Lịch sử",
//       icon: FileClock,
//       path: "/dashboard/history",
//     },
//     {
//       name: "Thanh toán",
//       icon: WalletCards,
//       path: "/dashboard/billing",
//     },
//     {
//       name: "Cài đặt",
//       icon: Settings,
//       path: "/dashboard/settings",
//     },
//   ];

//   const path = usePathname();
//   useEffect(() => {
//     console.log(path);
//   }, [path]);

//   const handleNavigation = (path: string) => {
//     router.push(path);
//   };

//   return (
//     <div className="h-screen relative p-5 shadow-sm border bg-white">
//       <div className="flex justify-center">
//         <Image src={"/logo.svg"} alt="logo" width={90} height={90} />
//       </div>
//       <hr className="my-6 border" />
//       <div className="mt-3">
//         {MenuList.map((menu, index) => (
//           <div
//             key={index}
//             className={`flex gap-2 mb-2 p-3
//               hover:bg-green-400 hover:text-white rounded-lg
//               items-center
//               ${path == menu.path && "bg-green-400 text-white"}
//             `}
//             onClick={() => handleNavigation(menu.path)}
//           >
//             <menu.icon className="h-6 w-6" />
//             <h2 className="text-lg">{menu.name}</h2>
//           </div>
//         ))}
//       </div>
//       <div className="absolute bottom-10 left-0 w-full">
//         <UsageTrack />
//       </div>
//     </div>
//   );
// }

// export default SideNav;
"use client";

import { FileClock, Home, Settings, WalletCards } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import UsageTrack from "./UsageTrack";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

interface SideNavProps {
  onMenuSelect?: () => void; // Kiểu của prop là một hàm không có đối số và không trả về giá trị
}

function SideNav({ onMenuSelect }: SideNavProps) {
  const router = useRouter();

  const MenuList = [
    {
      name: "Trang chủ",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "Lịch sử",
      icon: FileClock,
      path: "/dashboard/history",
    },
    {
      name: "Thanh toán",
      icon: WalletCards,
      path: "/dashboard/billing",
    },
    {
      name: "Cài đặt",
      icon: Settings,
      path: "/dashboard/settings",
    },
  ];

  const path = usePathname();
  useEffect(() => {
    console.log(path);
  }, [path]);

  const handleNavigation = (path: string) => {
    router.push(path);
    if (onMenuSelect) {
      onMenuSelect(); // Gọi hàm đóng menu nếu được truyền vào
    }
  };

  return (
    <div className="h-screen relative p-5 shadow-sm border bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-100">
      <div className="flex justify-center gap-8 ">
        <UserButton />
        <Link href="/" className="flex items-center space-x-2">
          <div className="transition-transform duration-300 hover:rotate-180">
            <Image
              src="/logo.svg"
              alt="CreatorAI Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            CreatorAI
          </span>
        </Link>
      </div>
      <hr className="my-6 border" />

      <div className="mt-3 ">
        {MenuList.map((menu, index) => (
          <div
            key={index}
            className={`flex gap-2 mb-2 p-3
              hover:bg-green-400 hover:text-white rounded-lg
              items-center
              ${path == menu.path && "bg-green-400 text-white"}
            `}
            onClick={() => handleNavigation(menu.path)}
          >
            <menu.icon className="h-6 w-6" />
            <h2 className="text-lg">{menu.name}</h2>
          </div>
        ))}
      </div>
      <div className="absolute bottom-10 left-0 w-full">
        <UsageTrack />
      </div>
    </div>
  );
}

export default SideNav;
