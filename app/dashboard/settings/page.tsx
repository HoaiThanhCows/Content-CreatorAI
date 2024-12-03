// import { UserProfile } from "@clerk/nextjs";
// import React from "react";

// function settings() {
//   return (
//     <div className="flex items-center justify-center h-full">
//       <UserProfile />
//     </div>
//   );
// }

// export default settings;
import { UserProfile } from "@clerk/nextjs";
import React from "react";

function Settings() {
  return (
    <div className="flex items-center justify-center h-full">
      <UserProfile routing="hash" />{" "}
      {/* Add 'routing="hash"' if not using a catch-all route */}
    </div>
  );
}

export default Settings;
