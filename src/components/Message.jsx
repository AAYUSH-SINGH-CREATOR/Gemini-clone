import { useContext, useState } from "react"
import {AppContext} from "../Context/AppContext"

export default function Message () {
      
    const[question, setQuestion] = useState('');
    const {setMessage, callGemini} = useContext(AppContext);

    function inputHandler () {
       console.log(question);
       setMessage(question);
       callGemini(question)
       setQuestion('');
    }

    return(
        <div className="bg-zinc-800 p-3 rounded-full w-[30%] flex justify-between">
            <input type="text" placeholder="Ask Gemini" className="text-white outline-none m-2 w-full h-full" value={question} onChange={(event)=> {setQuestion(event.target.value)}}/>
            <button className="text-white m-2" onClick={inputHandler}>ASK</button>
        </div>
    )
}