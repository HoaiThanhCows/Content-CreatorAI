import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div id="clerk-captcha"></div>
      <SignUp />
    </div>
  );
}
