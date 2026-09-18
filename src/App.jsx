import { useContext } from "react"
import Header from "./components/Header"
import Message from "./components/Message"
import { AppContext } from "./Context/AppContext"
import Chatbox from "./components/Chatbox";
export default function App() {
  const{message, dark} = useContext(AppContext);

  return (
    <div className={`w-screen h-screen flex flex-col ${ dark? "gemini-background" : "bg-gray-100" }`}>
      <Header /> 
      <div className="w-[80%] mx-auto flex justify-center items-center text-amber-50">
      <Chatbox/>
      </div>
      <div className={`flex-1 flex justify-center z-50 ${ message? "items-end mb-10" : "items-center"}`}>
        <Message />
      </div>
    </div>
  )
}
