// // "use client";
// // import React, { useContext, useState } from "react";

// // import OutputSection from "../_components/OutputSection";
// // import { TEMPLATE } from "@/app/dashboard/_components/TemplateListSection";
// // import moment from "moment";
// // import { Button } from "@/components/ui/button";
// // import { ArrowLeft } from "lucide-react";
// // import Templates from "../../../(data)/Templates";
// // import Link from "next/link";
// // import { chatSession } from "@/utils/AiModal";
// // import { db } from "@/utils/db";
// // import { AIOutput } from "@/utils/schema";
// // import { useUser } from "@clerk/nextjs";
// // import { TotalUsageContext } from "@/app/(context)/TotalUsafeContext";
// // import { useRouter } from "next/navigation";
// // import { UserSubscriptionContext } from "@/app/(context)/UserSubscription";
// // import { UpdateCreditUsageContext } from "@/app/(context)/UpdateCreditUsageContext";
// // import FromSection from "../_components/FormSection";

// // interface PROPS {
// //   params: {
// //     "template-slug": string;
// //   };
// // }

// // function CreateNewContent(props: PROPS) {
// //   const [loading, setLoading] = useState(false);
// //   const [aiOutput, setAiOutput] = useState<string>("");
// //   const { user } = useUser();
// //   const router = useRouter();
// //   const { totalUsage } = useContext(TotalUsageContext);
// //   const selectedTemplate: TEMPLATE | undefined = Templates?.find(
// //     (item) => item.slug == props.params["template-slug"]
// //   );
// //   const { userSubscription } = useContext(UserSubscriptionContext);
// //   const { setUpdateCreditUsage } = useContext(UpdateCreditUsageContext);
// //   const [showUpgradeAlert, setShowUpgradeAlert] = useState(false);

// //   const GenerateAIContent = async (formData: any) => {
// //     console.log("totalUsage:", totalUsage);
// //     if (totalUsage >= 10000 && !userSubscription) {
// //       console.log("Vui lòng nâng cấp tài khoản💖");
// //       setShowUpgradeAlert(true);
// //       return 0;
// //     }
// //     setLoading(true);
// //     const SelectedPrompt = selectedTemplate?.aiPrompt;
// //     const FinalAIPrompt = JSON.stringify(formData) + ", " + SelectedPrompt;

// //     const result = await chatSession.sendMessage(FinalAIPrompt);

// //     const aiResponseText = result?.response.text();
// //     const aiResponseLength = aiResponseText?.length || 0;

// //     if (totalUsage + aiResponseLength > (userSubscription ? 100000 : 10000)) {
// //       setLoading(false);
// //       setShowUpgradeAlert(true);
// //       return 0;
// //     }

// //     setAiOutput(aiResponseText);
// //     await SaveInDb(
// //       JSON.stringify(formData),
// //       selectedTemplate?.slug,
// //       aiResponseText
// //     );
// //     setLoading(false);
// //     setUpdateCreditUsage(Date.now());

// //     return aiResponseLength;
// //   };

// //   const SaveInDb = async (
// //     formData: any,
// //     slug: string | undefined,
// //     aiResp: string
// //   ) => {
// //     const safeSlug = slug || "";
// //     const createdBy = user?.primaryEmailAddress?.emailAddress || "";
// //     const createdAt = moment().format("DD/MM/YYYY");

// //     const result = await db.insert(AIOutput).values({
// //       formData: formData,
// //       templateSlug: safeSlug,
// //       aiResponse: aiResp,
// //       createdBy: createdBy,
// //       createdAt: createdAt,
// //     });
// //     console.log(result);
// //   };

// //   return (
// //     <div className="p-10">
// //       <Link href={"/dashboard"}>
// //         <Button>
// //           {" "}
// //           <ArrowLeft /> Quay lại
// //         </Button>
// //       </Link>

// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
// //         <FromSection
// //           selectedTemplate={selectedTemplate}
// //           userFormInput={(v: any) => GenerateAIContent(v)}
// //           loading={loading}
// //         />
// //         <div className="col-span-2">
// //           <OutputSection aiOutput={aiOutput} />
// //         </div>
// //       </div>

// //       {/* Alert dialog for upgrade */}
// //       {showUpgradeAlert && (
// //         <div className="fixed inset-0 flex items-center justify-center z-50">
// //           <div className="bg-white p-5 rounded-lg shadow-md">
// //             <h2 className="text-xl font-bold mb-3 text-center p-3">
// //               💖Thông báo💖
// //             </h2>
// //             <p className="text-red-600">
// //               Vui lòng nâng cấp tài khoản để tiếp tục sử dụng dịch vụ này.
// //             </p>
// //             <div className="flex justify-end mt-5">
// //               <Button
// //                 onClick={() => router.push("/dashboard/billing")}
// //                 variant="secondary"
// //                 className="mr-3"
// //               >
// //                 Nâng cấp ngay
// //               </Button>
// //               <Button onClick={() => setShowUpgradeAlert(false)}>Đóng</Button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default CreateNewContent;
// "use client";
// import React, { useContext, useState } from "react";

// import OutputSection from "../_components/OutputSection";
// import { TEMPLATE } from "@/app/dashboard/_components/TemplateListSection";
// import moment from "moment";
// import { Button } from "@/components/ui/button";
// import { ArrowLeft } from "lucide-react";
// import Templates from "../../../(data)/Templates";
// import Link from "next/link";
// import { chatSession } from "@/utils/AiModal";
// import { db } from "@/utils/db";
// import { AIOutput } from "@/utils/schema";
// import { useUser } from "@clerk/nextjs";
// import { TotalUsageContext } from "@/app/(context)/TotalUsafeContext";
// import { useRouter } from "next/navigation";
// import { UserSubscriptionContext } from "@/app/(context)/UserSubscription";
// import { UpdateCreditUsageContext } from "@/app/(context)/UpdateCreditUsageContext";
// import FromSection from "../_components/FormSection";

// interface PROPS {
//   params: {
//     "template-slug": string;
//   };
// }

// function CreateNewContent(props: PROPS) {
//   const [loading, setLoading] = useState(false);
//   const [aiOutput, setAiOutput] = useState<string>("");
//   const { user } = useUser();
//   const router = useRouter();
//   const { totalUsage } = useContext(TotalUsageContext);
//   const selectedTemplate: TEMPLATE | undefined = Templates?.find(
//     (item) => item.slug == props.params["template-slug"]
//   );
//   const { userSubscription } = useContext(UserSubscriptionContext);
//   const { setUpdateCreditUsage } = useContext(UpdateCreditUsageContext);
//   const [showUpgradeAlert, setShowUpgradeAlert] = useState(false);

//   const GenerateAIContent = async (formData: any) => {
//     if (totalUsage >= 10000 && !userSubscription) {
//       setShowUpgradeAlert(true);
//       return 0;
//     }

//     setLoading(true);
//     const SelectedPrompt = selectedTemplate?.aiPrompt;
//     const FinalAIPrompt = JSON.stringify(formData) + ", " + SelectedPrompt;

//     const result = await chatSession.sendMessage(FinalAIPrompt);
//     const aiResponseText = result?.response.text();
//     const aiResponseLength = aiResponseText?.length || 0;

//     if (totalUsage + aiResponseLength > (userSubscription ? 100000 : 10000)) {
//       setLoading(false);
//       setShowUpgradeAlert(true);
//       return 0;
//     }

//     setAiOutput(aiResponseText);

//     // Chỉ lưu vào cơ sở dữ liệu nếu tài khoản đã nâng cấp
//     if (userSubscription) {
//       await SaveInDb(
//         JSON.stringify(formData),
//         selectedTemplate?.slug,
//         aiResponseText
//       );
//     }

//     setLoading(false);
//     setUpdateCreditUsage(Date.now());

//     return aiResponseLength;
//   };

//   const SaveInDb = async (
//     formData: any,
//     slug: string | undefined,
//     aiResp: string
//   ) => {
//     const safeSlug = slug || "";
//     const createdBy = user?.primaryEmailAddress?.emailAddress || "";
//     const createdAt = moment().format("DD/MM/YYYY");

//     await db.insert(AIOutput).values({
//       formData: formData,
//       templateSlug: safeSlug,
//       aiResponse: aiResp,
//       createdBy: createdBy,
//       createdAt: createdAt,
//     });
//   };

//   return (
//     <div className="p-10">
//       <Link href={"/dashboard"}>
//         <Button>
//           {" "}
//           <ArrowLeft /> Quay lại
//         </Button>
//       </Link>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
//         <FromSection
//           selectedTemplate={selectedTemplate}
//           userFormInput={(v: any) => GenerateAIContent(v)}
//           loading={loading}
//         />
//         <div className="col-span-2">
//           <OutputSection aiOutput={aiOutput} />
//         </div>
//       </div>

//       {/* Alert dialog for upgrade */}
//       {showUpgradeAlert && (
//         <div className="fixed inset-0 flex items-center justify-center z-50">
//           <div className="bg-white p-5 rounded-lg shadow-md">
//             <h2 className="text-xl font-bold mb-3 text-center p-3">
//               💖Thông báo💖
//             </h2>
//             <p className="text-red-600">
//               Vui lòng nâng cấp tài khoản để tiếp tục sử dụng dịch vụ này.
//             </p>
//             <div className="flex justify-end mt-5">
//               <Button
//                 onClick={() => router.push("/dashboard/billing")}
//                 variant="secondary"
//                 className="mr-3"
//               >
//                 Nâng cấp ngay
//               </Button>
//               <Button onClick={() => setShowUpgradeAlert(false)}>Đóng</Button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default CreateNewContent;
"use client";
import React, { useContext, useState } from "react";

import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "@/app/dashboard/_components/TemplateListSection";
import moment from "moment";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Templates from "../../../(data)/Templates";
import Link from "next/link";
import { chatSession } from "@/utils/AiModal";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { TotalUsageContext } from "@/app/(context)/TotalUsafeContext";
import { useRouter } from "next/navigation";
import { UserSubscriptionContext } from "@/app/(context)/UserSubscription";
import { UpdateCreditUsageContext } from "@/app/(context)/UpdateCreditUsageContext";
import FromSection from "../_components/FormSection";

interface PROPS {
  params: {
    "template-slug": string;
  };
}

function CreateNewContent(props: PROPS) {
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>("");
  const { user } = useUser();
  const router = useRouter();
  const { totalUsage } = useContext(TotalUsageContext);
  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug == props.params["template-slug"]
  );
  const { userSubscription } = useContext(UserSubscriptionContext);
  const { setUpdateCreditUsage } = useContext(UpdateCreditUsageContext);
  const [showUpgradeAlert, setShowUpgradeAlert] = useState(false);

  const GenerateAIContent = async (formData: any) => {
    console.log("totalUsage:", totalUsage);
    if (totalUsage >= 10000 && !userSubscription) {
      console.log("Vui lòng nâng cấp tài khoản💖");
      setShowUpgradeAlert(true);
      return 0;
    }
    setLoading(true);
    const SelectedPrompt = selectedTemplate?.aiPrompt;
    const FinalAIPrompt = JSON.stringify(formData) + ", " + SelectedPrompt;

    const result = await chatSession.sendMessage(FinalAIPrompt);

    const aiResponseText = result?.response.text();
    const aiResponseLength = aiResponseText?.length || 0;

    if (totalUsage + aiResponseLength > (userSubscription ? 100000 : 10000)) {
      setLoading(false);
      setShowUpgradeAlert(true);
      return 0;
    }

    setAiOutput(aiResponseText);
    await SaveInDb(
      JSON.stringify(formData),
      selectedTemplate?.slug,
      aiResponseText
    );
    setLoading(false);
    setUpdateCreditUsage(Date.now());

    return aiResponseLength;
  };

  const SaveInDb = async (
    formData: any,
    slug: string | undefined,
    aiResp: string
  ) => {
    const safeSlug = slug || "";
    const createdBy = user?.primaryEmailAddress?.emailAddress || "";
    const createdAt = moment().format("DD/MM/YYYY");

    const result = await db.insert(AIOutput).values({
      formData: formData,
      templateSlug: safeSlug,
      aiResponse: aiResp,
      createdBy: createdBy,
      createdAt: createdAt,
    });
    console.log(result);
  };

  return (
    <div className="p-10">
      <Link href={"/dashboard"}>
        <Button>
          {" "}
          <ArrowLeft /> Quay lại
        </Button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        <FromSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => GenerateAIContent(v)}
          loading={loading}
        />
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>

      {/* Alert dialog for upgrade */}
      {showUpgradeAlert && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-3 text-center p-3">
              💖Thông báo💖
            </h2>
            <p className="text-red-600">
              Vui lòng nâng cấp tài khoản để tiếp tục sử dụng dịch vụ này.
            </p>
            <div className="flex justify-end mt-5">
              <Button
                onClick={() => router.push("/dashboard/billing")}
                variant="secondary"
                className="mr-3"
              >
                Nâng cấp ngay
              </Button>
              <Button onClick={() => setShowUpgradeAlert(false)}>Đóng</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateNewContent;
