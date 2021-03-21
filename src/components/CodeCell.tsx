import { useEffect, useState } from 'react';
import { CodeEditor } from './CodeEditor';
import { Preview } from './Preview';
import { bundle } from '../bundler';
import { Resizable } from './Resizable';

const CodeCell = () => {
    const [input, setInput] = useState('');
    const [code, setCode] = useState('');

    useEffect(() => {
        const timer = setTimeout(async () => {
            setCode(await bundle(input));
        },1000)

        return () => {
            clearTimeout(timer);
        }
    }, [input])


    return (
        <Resizable direction='vertical'>
            <div className='flex h-full'>
                <Resizable direction='horizontal'>
                    <CodeEditor
                        onEditorChange={(value) => setInput(value)}
                        initialValue=""
                    />
                </Resizable>
                {/* <button
                    onClick={onClick}
                    className="bg-red-600 text-white py-1 px-3 rounded-md"
                >
                    Submit
                </button> */}
                {/* <code>{input}</code> */}
                <Preview code={code} />
            </div>
        </Resizable>
    );
};

export default CodeCell;
