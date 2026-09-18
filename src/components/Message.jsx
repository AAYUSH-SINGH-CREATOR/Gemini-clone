import { useContext, useState } from "react"
import {AppContext} from "../Context/AppContext"

export default function Message () {
      
    const[question, setQuestion] = useState('');
    const {setMessage, callGemini} = useContext(AppContext);

    function inputHandler () {
        if (!question.trim()) return;
       console.log(question);
       setMessage(question);
       callGemini(question);
       setQuestion('');
    }
function handleKeyDown (e) {
        if (e.key === 'Enter') {
            inputHandler();
        }
    }
    return(
        <div className="bg-zinc-800 p-3 rounded-full  w-full max-w-2xl h-15 flex justify-between items-center">
            <input type="text" placeholder="Ask Gemini" className= "outline-none m-2 text-white  w-full h-full" value={question} onChange={(event)=> {setQuestion(event.target.value)}} onKeyDown={handleKeyDown}/>
            <select className="text-white bg-zinc-800 rounded-full outline-none">
                <option value="3.5">3.5 Flash Lite</option>
                <option value="3.6">3.6 Flash</option>
                <option value="3.1">3.1 pro</option>
            </select>
            <button className="text-white m-2" onClick={inputHandler}>ASK</button>
        </div>
    )
}


