import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";

const MobileNav = () => {
  return (
    <header className="header">
      <Link href="/" className="flex items-center gap-2 md:py-2"></Link>
      {/* <Image src={"/logo.svg"} alt="logo" width={90} height={90} /> */}
    </header>
  );
};

export default MobileNav;
