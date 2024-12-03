"use client";

import { TEMPLATE } from "@/app/dashboard/_components/TemplateListSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2Icon } from "lucide-react";
import Image from "next/image";
import React, { useContext, useState } from "react";

import { UserSubscriptionContext } from "@/app/(context)/UserSubscription";
import { TotalUsageContext } from "@/app/(context)/TotalUsafeContext";

interface PROPS {
  selectedTemplate?: TEMPLATE;
  userFormInput: (formData: any) => Promise<number>; // Cập nhật kiểu dữ liệu của userFormInput
  loading: boolean;
}

function FromSection({ selectedTemplate, userFormInput, loading }: PROPS) {
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const { userSubscription } = useContext(UserSubscriptionContext);
  const maxWords = userSubscription ? 100000 : 10000;

  const [formData, setFormData] = useState<any>();
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const createdWords = await userFormInput(formData);

      if (createdWords === 0) {
        setErrorMessage("");
      } else {
        setErrorMessage("");
        setTotalUsage(totalUsage + createdWords);
      }
    } catch (error) {
      console.error("Error creating content:", error);
      setErrorMessage("Đã có lỗi xảy ra khi tạo nội dung.");
    }
  };

  return (
    <div className="p-5 shadow-md border rounded-lg bg-white">
      {/* @ts-ignore */}
      <Image src={selectedTemplate?.icon} alt="icon" width={70} height={70} />
      <h2 className="font-bold text-2xl mb-2 text-green-400">
        {selectedTemplate?.name}
      </h2>
      <p className="text-gray-500 text-sm">{selectedTemplate?.desc}</p>

      <form className="mt-6" onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((item, index) => (
          <div key={index} className="my-2 flex flex-col gap-2 mb-7">
            <label className="font-bold">{item.label}</label>
            {item.field === "input" ? (
              <Input
                name={item.name}
                required={item?.required}
                onChange={handleInputChange}
              />
            ) : item.field === "textarea" ? (
              <>
                <Textarea
                  name={item.name}
                  required={item?.required}
                  rows={5}
                  maxLength={2000}
                  onChange={handleInputChange}
                />
                <label className="text-xs text-gray-400">
                  Note: 2000 Words
                </label>
              </>
            ) : null}
          </div>
        ))}
        <Button type="submit" className="w-full py-6" disabled={loading}>
          {loading && <Loader2Icon className="animate-spin" />}
          Tạo nội dung
        </Button>
      </form>

      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
}

export default FromSection;
