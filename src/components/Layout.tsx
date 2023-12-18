import Image from "next/image";
import Link from "next/link";
import {
  PlusCircleIcon,
  ClipboardDocumentCheckIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
    }
  };

  return (
    <div className="w-full bg-primary relative top-0 px-4">
      <div className="container mx-auto flex flex-row justify-between items-center">
        <Link href="/" className="flex flex-row items-center gap-3">
          <Image src="/logo-512.png" width={40} height={40} alt="logo" />
          <h2 className="text-2xl font-bold">LeyiBin</h2>
        </Link>
        <div className="z-30 cursor-pointer" onClick={handleMenuClick}>
          <Bars3Icon className="h-6 w-6" />
        </div>
      </div>
      {isMenuOpen && (
        <div className="w-full h-screen animate-fade-down animate-duration-500 z-20 absolute top-0 left-0 bg-primary flex flex-col items-center justify-center gap-10">
          <Link href="/" className="flex flex-row items-center gap-3">
            <Image src="/logo-512.png" width={40} height={40} alt="logo" />
            <h2 className="text-2xl font-bold">LeyiBin</h2>
          </Link>
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                href="/"
                className="text-lg font-medium flex flex-row items-center justify-center gap-1 bg-secondary rounded-lg duration-300 hover:bg-secondary px-4 py-2"
              >
                <PlusCircleIcon className="h-6 w-6" />
                <span>Create Paste</span>
              </Link>
            </li>
            <li>
              <Link
                href="/pastes/recents"
                className="text-lg font-medium flex flex-row items-center justify-center gap-1 bg-secondary rounded-lg duration-300 hover:bg-secondary px-4 py-2"
              >
                <ClipboardDocumentCheckIcon className="h-6 w-6" />
                <span>Recent Pastes</span>
              </Link>
            </li>
            <li>
              <Link
                href="/pastes/personal"
                className="text-lg font-medium flex flex-row items-center justify-center gap-1 bg-secondary rounded-lg duration-300 hover:bg-secondary px-4 py-2"
              >
                <ClipboardDocumentCheckIcon className="h-6 w-6" />
                <span>My Pastes</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Layout;
