import { createContext, useState } from "react";
import { GoogleGenAI } from "@google/genai";


export const AppContext = createContext();

export default function AppContextProvider( { children } ) {

    const [message, setMessage] = useState('');
    const [res, setRes] = useState('');
    const [dark, setDark] = useState(true);


   async function callGemini(message) {
        const key = import.meta.env.VITE_API_KEY;
        const ai = new GoogleGenAI({
            apiKey: key
        });

        const response = await ai.models.generateContent({
            model: "gemini-3.8-flash",
            contents: message
        });
       setRes(response.text)
        console.log(response.text);
    }
const value = {
    message,
    setMessage,
    res,
    setRes,
    callGemini,
    dark,
    setDark,

}

return <AppContext.Provider value={value}> { children } </AppContext.Provider>

}