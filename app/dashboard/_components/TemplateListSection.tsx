import React, { useEffect, useState } from "react";
import TemplateCard from "./TemplateCard";
import Templates from "../../(data)/Templates";

export interface TEMPLATE {
  name: string;
  desc: string;
  icon: string;
  category: string;
  slug: string;
  aiPrompt: string;
  form?: FORM[];
}

export interface FORM {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}
function TemplateListSection({ userSearchInput }: any) {
  const [templateList, setTemplateList] = useState(Templates);
  useEffect(() => {
    if (userSearchInput) {
      const filterData = Templates.filter((item) =>
        item.name.toLowerCase().includes(userSearchInput.toLowerCase())
      );
      setTemplateList(filterData);
    } else {
      setTemplateList(Templates);
    }
    console.log(userSearchInput);
  }, [userSearchInput]);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 p-10">
      {templateList.map((item: TEMPLATE, index: number) => (
        // eslint-disable-next-line react/jsx-key
        <TemplateCard {...item} />
      ))}
    </div>
  );
}

export default TemplateListSection;
