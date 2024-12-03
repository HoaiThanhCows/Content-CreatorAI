"use client";

import SearchSection from "@/app/dashboard/_components/SearchSection";
import TemplateListSection from "@/app/dashboard/_components/TemplateListSection";
import { stringify } from "querystring";
import React, { useState } from "react";

function Dashboard() {
  const [userSearchInput, setUserSearchInput] = useState<string>();
  return (
    <div>
      {/* Search Section */}
      <SearchSection
        onSearchInput={(value: string) => setUserSearchInput(value)}
      />

      {/* Template List Section */}
      <TemplateListSection userSearchInput={userSearchInput} />
    </div>
  );
}

export default Dashboard;
