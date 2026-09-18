import { useContext } from "react"
import { AppContext } from "../Context/AppContext"
import { MdDarkMode } from "react-icons/md";
import { BsSun } from "react-icons/bs";

export default function Header(){

    const{dark ,setDark} = useContext(AppContext)

    function themeHandler(){
        if(dark){
            setDark(false);
        }
        else{
            setDark(true)
        }
    }

    return(
        <div className="flex justify-between m-4">
            <div className="flex items-center m-1">
            <img src="https://imgs.search.brave.com/Ay1St93MenLC5FJmlz77Bgpv1gS6IOUMoRjnFusL57s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yYXcu/Z2l0aHVidXNlcmNv/bnRlbnQuY29tL2xv/YmVodWIvbG9iZS1p/Y29ucy9yZWZzL2hl/YWRzL21hc3Rlci9w/YWNrYWdlcy9zdGF0/aWMtcG5nL2xpZ2h0/L2dlbWluaS1jb2xv/ci5wbmc" alt="" className="w-12 h-12"/>
            <p className={`ml-2  ${dark? "text-amber-50": "text-black" }`}>Gemini</p>
            </div>
            <div>
                <button className="text-white h-8 w-8" onClick={themeHandler}>
                    {
                        dark? <BsSun className="w-full h-full"/>: <MdDarkMode className="text-black w-full h-full"/>
                     }
                </button>
            </div>
        </div>
    )
}