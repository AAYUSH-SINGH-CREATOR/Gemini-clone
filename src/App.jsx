import { useContext } from "react"
import Header from "./components/Header"
import Message from "./components/Message"
import { AppContext } from "./Context/AppContext"
import Chatbox from "./components/Chatbox";

export default function App() {
  const{prompt, dark} = useContext(AppContext);

  return (
    <div className={`w-screen h-screen flex flex-col overflow-hidden ${ dark? "gemini-background" : "bg-gray-100" }`}>
      <Header /> 
      <div className="flex-1 overflow-y-auto w-full md:w-[80%] max-w-4xl mx-auto p-4">
      <Chatbox/>
      </div>
      <div className={`flex justify-center w-full justify-center z-50 ${ prompt? "items-end mb-10" : "items-center"}`}>
        <Message />
      </div>
    </div>
  )
}
