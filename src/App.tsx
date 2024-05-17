import { useState } from "react";
import logo from "./assets/Demo_Logo.svg"
import Page1 from "./pages/Page1"
import Page2 from "./pages/Page2"
import Page3 from "./pages/Page3"
import { MdOutlineMenu } from "react-icons/md";


function App() {


  const [isMenu, setisMenu] = useState(false);

  

  return (
    <div className="app overflow-auto h-screen w-full">
      <nav className= {`overflow-hidden bg-slate-700/55 absolute w-full ${isMenu? "h-[370.6px]" : "h-20"} md:h-14 flex flex-col md:flex-row md:items-center justify-between p-3 md:p-10 z-50 transition-all duration-200 ease-in-out`}>
        <img src={logo} title="Desh Yatra" className=" w-[80px] h-[50px] md:w-[100px] md:h-[60px] object-cover" alt="Logo Here" />
        <ul className="flex flex-col md:flex-row text-white gap-4 md:gap-10 *:hover:cursor-pointer text-nowrap m-4">
          <li className="hover:text-green-300 underline-offset-4 hover:underline transition-all duration-500 ease-in-out">Home</li>
          <li className="hover:text-green-300 underline-offset-4 hover:underline transition-all duration-500 ease-in-out">Our Tours</li>
          <li className="hover:text-green-300 underline-offset-4 hover:underline transition-all duration-500 ease-in-out">Gallery</li>
          <li className="hover:text-green-300 underline-offset-4 hover:underline transition-all duration-500 ease-in-out">Blog</li>
          <li className="hover:text-green-300 underline-offset-4 hover:underline transition-all duration-500 ease-in-out">About</li>
          <li className="hover:text-green-300 underline-offset-4 hover:underline transition-all duration-500 ease-in-out">Contact Us</li>
        </ul>

        <button type="button" className="px-5 py-2 text-nowrap  bg-green-600/30 border border-black font-bold hover:bg-green-400">Contact Now</button>
         <MdOutlineMenu className="absolute top-5 right-5 size-8 md:hidden" onClick={()=>{setisMenu(!isMenu)}}/>
      </nav>
      <div className="header h-screen w-full border border-cyan-900 bg-main-img absolute "></div>
      <div className="h-screen relative"></div>
      <div className="main_Content relative z-40">
        <Page1 />
        <Page2 />
        <Page3 />
      </div>
    </div>

  )
}

export default App
