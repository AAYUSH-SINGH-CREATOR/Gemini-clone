import { useContext, useState } from "react"
import {AppContext} from "../Context/AppContext"

export default function Message () {
      
    const[question, setQuestion] = useState('');
    const {setPrompt, callGemini, dark} = useContext(AppContext);

    function inputHandler () {
        if (!question.trim()) return;
        question.trim();
       setPrompt(question);
       callGemini(question);
       setQuestion('');
    }
function handleKeyDown (e) {
        if (e.key === 'Enter') {
            inputHandler();
        }
    }
    return(
        <div className={`p-3 rounded-full  w-full max-w-2xl h-15 flex justify-between items-center  ${dark? "bg-zinc-800" : "bg-gray-200"} `}>
            <input type="text" placeholder="Ask Gemini" className= {`outline-none m-2  w-full h-full ${dark? " text-white": "text-black" }`} value={question} onChange={(event)=> {setQuestion(event.target.value)}} onKeyDown={handleKeyDown}/>
            <select className={`rounded-full outline-none ${dark? "text-white bg-zinc-800": "text-black bg-gray-200"}`}>
                <option value="3.5">3.5 Flash Lite</option>
                <option value="3.6">3.6 Flash</option>
                <option value="3.1">3.1 pro</option>
            </select>
            <button className={`m-2 ${dark? "text-white" : "text-black"} `} onClick={inputHandler}>ASK</button>
        </div>
    )
}


