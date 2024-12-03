// "use client";
// import React, { useState } from "react";
// import SideNav from "./_components/SideNav";
// import Header from "./_components/Header";
// import { TotalUsageContext } from "../(context)/TotalUsafeContext";
// import { UserSubscriptionContext } from "../(context)/UserSubscription";
// import { UpdateCreditUsageContext } from "../(context)/UpdateCreditUsageContext";
// import { ClerkProvider } from "@clerk/nextjs";

// function Layout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const [totalUsage, setTotalUsage] = useState<Number>(0);
//   const [userSubscription, setUserSubscription] = useState<boolean>(false);
//   const [updateCreditUsage, setUpdateCreditUsage] = useState<any>();
//   const [isSideNavOpen, setIsSideNavOpen] = useState(false);

//   // Hàm đóng menu, được truyền xuống SideNav
//   const handleMenuClose = () => {
//     setIsSideNavOpen(false);
//   };

//   return (
//     <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
//       <UserSubscriptionContext.Provider
//         value={{ userSubscription, setUserSubscription }}
//       >
//         <UpdateCreditUsageContext.Provider
//           value={{ updateCreditUsage, setUpdateCreditUsage }}
//         >
//           <div className="h-screen relative p-5 shadow-sm border bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-100 ">
//             <button
//               onClick={() => setIsSideNavOpen(!isSideNavOpen)}
//               className="md:hidden p-2 bg-gray-700 text-white fixed top-0 left-0 z-50"
//             >
//               {isSideNavOpen ? "☰" : "☰Menu "}
//             </button>

//             {isSideNavOpen && (
//               <div className="fixed inset-0 z-40 bg-white md:hidden">
//                 {/* Truyền hàm handleMenuClose vào SideNav */}
//                 <SideNav onMenuSelect={handleMenuClose} />
//                 <button
//                   onClick={() => setIsSideNavOpen(false)}
//                   className="absolute top-4 right-4 p-2 bg-red-500 text-white"
//                 >
//                   Close
//                 </button>
//               </div>
//             )}

//             <div className="md:w-64 hidden md:block fixed">
//               <SideNav onMenuSelect={handleMenuClose} />
//             </div>

//             <div className="md:ml-64 flex-1">
//               {/* <Header /> */}
//               {children}
//             </div>
//           </div>
//         </UpdateCreditUsageContext.Provider>
//       </UserSubscriptionContext.Provider>
//     </TotalUsageContext.Provider>
//   );
// }
"use client";
// export default Layout;
import React, { useState } from "react";
import SideNav from "./_components/SideNav";
import { TotalUsageContext } from "../(context)/TotalUsafeContext";
import { UserSubscriptionContext } from "../(context)/UserSubscription";
import { UpdateCreditUsageContext } from "../(context)/UpdateCreditUsageContext";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [totalUsage, setTotalUsage] = useState<number>(0);
  const [userSubscription, setUserSubscription] = useState<boolean>(false);
  const [updateCreditUsage, setUpdateCreditUsage] = useState<any>();
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  // Hàm đóng menu
  const handleMenuClose = () => {
    setIsSideNavOpen(false);
  };

  return (
    <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
      <UserSubscriptionContext.Provider
        value={{ userSubscription, setUserSubscription }}
      >
        <UpdateCreditUsageContext.Provider
          value={{ updateCreditUsage, setUpdateCreditUsage }}
        >
          <div className="className=h-screen flex  bg-gradient-to-br from-indigo-300 via-purple-200 to-pink-100 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 overflow-hidden">
            {/* Menu Button for Mobile */}
            <button
              onClick={() => setIsSideNavOpen(!isSideNavOpen)}
              className="md:hidden p-2 bg-gray-700 text-white fixed top-0 left-0 z-50"
            >
              ☰ Menu
            </button>

            {/* Mobile SideNav */}
            {isSideNavOpen && (
              <div className="fixed inset-0 z-40 bg-white md:hidden">
                <SideNav onMenuSelect={handleMenuClose} />
                <button
                  onClick={handleMenuClose}
                  className="absolute top-4 right-4 p-2 bg-red-500 text-white"
                >
                  Close
                </button>
              </div>
            )}

            {/* Desktop SideNav */}
            <div className="hidden md:block md:w-64 fixed">
              <SideNav onMenuSelect={handleMenuClose} />
            </div>

            {/* Main Content */}
            <div className="flex-1 md:ml-64">{children}</div>
          </div>
        </UpdateCreditUsageContext.Provider>
      </UserSubscriptionContext.Provider>
    </TotalUsageContext.Provider>
  );
}

export default Layout;
