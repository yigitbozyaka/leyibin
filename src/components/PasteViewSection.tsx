import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { java } from '@codemirror/lang-java';
import { cpp } from '@codemirror/lang-cpp';
import { csharp } from '@replit/codemirror-lang-csharp';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { json } from '@codemirror/lang-json';
import { markdown } from '@codemirror/lang-markdown';
import { tokyoNightStormInit } from '@uiw/codemirror-theme-tokyo-night-storm';
import { ClipboardDocumentIcon, ClipboardDocumentCheckIcon, PlusCircleIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from "next/navigation";

type PasteProps = {
    lang: string,
    content: string,
}

const PasteViewSection = ({ lang, content }: PasteProps) => {
    const [copiedText, setCopiedText] = useState(false);
    const [copiedUrl, setCopiedUrl] = useState(false);

    const pathName = usePathname();

    const handleCopyText = () => {
        navigator.clipboard.writeText(content);
        setCopiedText(true);
        setTimeout(() => setCopiedText(false), 5000);
    }

    const handleCopyUrl = () => {
        navigator.clipboard.writeText("https://leyibin.yigitbozyaka.com" + pathName);
        setCopiedUrl(true);
        setTimeout(() => setCopiedUrl(false), 5000);
    }
    return (
        <>
            <div className='text-xl w-11/12 md:w-8/12 2xl:w-5/12'>
                <CodeMirror
                    basicSetup={{
                        highlightActiveLine: false,
                    }}
                    readOnly={true}
                    value={content}
                    theme={tokyoNightStormInit({
                        settings: {
                            selection: '#434964',
                        }
                    })}

                    height="400px"
                    extensions={[lang?.toLowerCase() == "javascript" ? javascript() : lang?.toLowerCase() == "python" ? python() : lang?.toLowerCase() == "java" ? java() : lang?.toLowerCase() == "cpp" ? cpp() : lang?.toLowerCase() == "csharp" ? csharp() : lang?.toLowerCase() == "html" ? html() : lang?.toLowerCase() == "css" ? css() : lang?.toLowerCase() == "json" ? json() : markdown()]}
                />
            </div>
            <div className="flex flex-col">
                <div className='flex flex-col md:flex-row gap-4 py-8 text-lg'>
                    <button onClick={handleCopyText} className='bg-secondary duration-300 hover:bg-secondary/60 rounded-lg px-7 py-1.5'>
                        {copiedText ? <p className='flex flex-row items-center justify-center gap-2'><ClipboardDocumentCheckIcon className='w-6 h-6' /> <span>Text Copied!</span></p> : <p className='flex flex-row items-center justify-center gap-2'><ClipboardDocumentIcon className='w-6 h-6' /> <span>Copy Text</span></p>}
                    </button>
                    <button onClick={handleCopyUrl} className='bg-secondary duration-300 hover:bg-secondary/60 rounded-lg px-7 py-1.5'>
                        {copiedUrl ? <p className='flex flex-row items-center justify-center gap-2'><ClipboardDocumentCheckIcon className='w-6 h-6' /> <span>Url Copied!</span></p> : <p className='flex flex-row items-center justify-center gap-2'><ClipboardDocumentIcon className='w-6 h-6' /> <span>Copy Paste Url</span></p>}
                    </button>
                    <Link
                        className='flex flex-row items-center gap-2 bg-secondary duration-300 hover:bg-secondary/60 rounded-lg mx-auto px-7 py-1.5'
                        href="/"
                    >
                        <PlusCircleIcon className='h-6 w-6' /><span>Create Paste</span>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default PasteViewSection