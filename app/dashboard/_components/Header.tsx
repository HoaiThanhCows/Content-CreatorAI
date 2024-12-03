import { UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";
import React from "react";

function Header() {
  return (
    <div className="p-5 shadow-sm border-b-2 flex bg-white justify-between item-c">
      <div
        className="flex gap-2 items-center 
      p-2  rounded-md max-w-lg bg-white"
      >
        <h1 className="text-3xl text-green-400    font-bold">
          CONTENT GENERATOR
        </h1>
      </div>
      <div className="flex gap-5 items-center">
        <UserButton />
      </div>
    </div>
  );
}

export default Header;
