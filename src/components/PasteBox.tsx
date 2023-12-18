import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

interface PasteData {
  id: string;
  lang: string;
  title: string;
}

const PasteBox = ({ id, lang, title }: PasteData) => {
  return (
    <Link
      href={`/${id}`}
      className="bg-secondary/80 min-w-[16rem] drop-shadow-[0_10px_10px_rgba(87,97,142,0.4)] flex flex-col items-center justify-center px-6 py-5 rounded-lg gap-6"
    >
      <div>
        Id: <span className="font-bold">{id}</span>
      </div>
      <div className="text-center flex flex-row gap-2">
        <ClipboardDocumentCheckIcon className="h-6 w-6" />
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <i
          className={`devicon-${
            lang.charAt(0).toLowerCase() + lang.slice(1)
          }-plain colored text-2xl`}
        ></i>
        <span>{lang.charAt(0).toUpperCase() + lang.slice(1)} </span>
      </div>
    </Link>
  );
};

export default PasteBox;
