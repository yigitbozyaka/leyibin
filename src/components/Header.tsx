import Link from "next/link";
import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center py-10">
      <h1 className="text-3xl text-center font-bold underline underline-offset-4 decoration-dotted">
        Welcome to LeyiBin
      </h1>
      <p className="text-lg text-center">
        A website where you can store your texts and codes!
      </p>
      <div className="flex flex-row gap-3 items-center">
        <Link
          href="pastes/recents"
          className="flex flex-row items-center gap-2 mt-4 bg-secondary duration-300 hover:bg-secondary/60 rounded-lg px-5 py-2"
        >
          <ClipboardDocumentCheckIcon className="h-6 w-6" />
          <span>Recent Pastes</span>
        </Link>
        <Link
          href="pastes/personal"
          className="flex flex-row items-center gap-2 mt-4 bg-secondary duration-300 hover:bg-secondary/60 rounded-lg px-5 py-2"
        >
          <ClipboardDocumentCheckIcon className="h-6 w-6" />
          <span>My Pastes</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
