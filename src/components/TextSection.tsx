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
import { useState, useCallback } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const TextSection = () => {
    const router = useRouter()

    const [lang, setLang] = useState("javascript");
    const [title, setTitle] = useState("");
    const [value, setValue] = useState("console.log('Hello World!');");
    const [creatingStatus, setCreatingStatus] = useState(false);

    const onChange = useCallback((val: string) => {
        setValue(val);
    }, []);

    const createPaste = async () => {
        setCreatingStatus(true);
        const res = await axios.post('/api/create', {
            lang: lang,
            title: title,
            content: value
        });

        const storedPastes = localStorage.getItem('pastes');
        const existingPastes = storedPastes ? JSON.parse(storedPastes) : [];

        const newPaste = { id: res.data[0].id, lang: res.data[0].lang, title: res.data[0].title };
        existingPastes.push(newPaste);

        localStorage.setItem('pastes', JSON.stringify(existingPastes));

        router.push(`/${res.data[0].id}`);
        setCreatingStatus(false);
    }

    return (
        <>
            <div className='text-xl w-11/12 md:w-8/12 2xl:w-5/12'>
                <CodeMirror
                    basicSetup={{
                        highlightActiveLine: false,
                    }}
                    value={value}
                    theme={tokyoNightStormInit({
                        settings: {
                            selection: '#434964',
                        }
                    })}

                    height="400px"
                    extensions={[lang.toLowerCase() == "javascript" ? javascript() : lang.toLowerCase() == "python" ? python() : lang.toLowerCase() == "java" ? java() : lang.toLowerCase() == "cpp" ? cpp() : lang.toLowerCase() == "csharp" ? csharp() : lang.toLowerCase() == "html" ? html() : lang.toLowerCase() == "css" ? css() : lang.toLowerCase() == "json" ? json() : markdown()]}
                    onChange={onChange}
                />
            </div>
            <div className='flex flex-col md:flex-row gap-4 py-8'>
                <select
                    name="lang"
                    id="langSelect"
                    className='bg-transparent text-quaternary border-2 border-secondary rounded-lg px-2 py-1 focus:outline-none'
                    onChange={(e) => setLang(e.target.value)}
                    value={lang}
                >
                    <option className='bg-primary' value="JavaScript">Javascript</option>
                    <option className='bg-primary' value="Python">Python</option>
                    <option className='bg-primary' value="Java">Java</option>
                    <option className='bg-primary' value="Cpp">C++</option>
                    <option className='bg-primary' value="CSharp">C#</option>
                    <option className='bg-primary' value="HTML">HTML</option>
                    <option className='bg-primary' value="CSS">CSS</option>
                    <option className='bg-primary' value="JSON">JSON</option>
                    <option className='bg-primary' value="Markdown">Markdown</option>
                </select>
                <input
                    placeholder='Paste title...'
                    type="text"
                    className='bg-transparent focus:outline-none border-2 border-secondary rounded-lg w-32 px-2 py-1'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button onClick={createPaste} disabled={creatingStatus} className='bg-secondary duration-300 hover:bg-secondary/60 rounded-lg px-5 py-1'>
                    {creatingStatus ? "Creating..." : "Create"}
                </button>

            </div>
        </>
    );
}

export default TextSection