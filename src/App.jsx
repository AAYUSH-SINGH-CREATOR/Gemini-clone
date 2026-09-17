import Header from "./components/Header"
import Message from "./components/Message"
export default function App() {

  return (
    <div className="w-screen h-screen bg-zinc-950 flex flex-col">
      <Header />
      <div className="flex-1 flex justify-center items-center ">
        <Message />
      </div>
    </div>
  )
}
