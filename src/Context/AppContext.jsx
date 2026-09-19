import { createContext, useState } from "react";
import { GoogleGenAI } from "@google/genai";


export const AppContext = createContext();

export default function AppContextProvider({ children }) {

    const [prompt, setPrompt] = useState('');
    const [res, setRes] = useState([]);
    const [dark, setDark] = useState(true);
    const [loading, setLoading] = useState(false);


    async function callGemini(prompt) {
        console.log(prompt);
        setRes((prev) => [
        ...prev,
        { role: "user", text: prompt},
    ]);

    setLoading(true);

        try {
            console.log('in callGemini');

            const ai = new GoogleGenAI({
                apiKey: import.meta.env.VITE_API_KEY
            });

            const response = await ai.models.generateContent({
                model: "gemini-3.8-flash",
                contents: prompt
            });

            setRes((prev) => [
                ...prev,
                {
                    role: "model",
                    text: response.text,
                },
            ]);
            
            console.log(res);

        }
        catch (error) {
            console.log(error);
            setRes((prev) => [
                ...prev,
                {
                    role: "model",
                    text: "Something went wrong.Please try again.",
                },
            ]);
        }
        
        setLoading(false);
        console.log("exit");
    }
    const value = {
        prompt,
        setPrompt,
        res,
        setRes,
        callGemini,
        dark,
        setDark,
        loading,

    }

    return <AppContext.Provider value={value}> {children} </AppContext.Provider>

}