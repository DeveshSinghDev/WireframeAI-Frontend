import { motion } from "motion/react"
import { Editor } from "@monaco-editor/react"
import { useState } from "react"
import { Code, Code2 } from "lucide-react"
import Preview from "./preview"
import Wireframe from "./wireframe"
const ConsoleBody = ({theme})=>{
  const [leftwidth,setleftwidth] = useState(50)
  const [leftwindowMode,setleftwinndowMode] = useState(0)

  const handleMouseDown = () => {
    const handleMouseMove = (e) => {
      setleftwidth(Math.max(30, Math.min(80,(e.clientX / window.innerWidth)*100)));
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };
  return(
    <div className="flex items-center text-(--text)">
      <div className="bg-(--bg-dark) flex flex-col items-center min-w-0 h-screen" style={{width:`${leftwidth}%`}}>
        <div className="flex gap-5">
          <button onClick={()=>{setleftwinndowMode(0)}} className={`${leftwindowMode == 0?"bg-red-500":""}`}>Preview</button>
          <button onClick={()=>{setleftwinndowMode(1)}} className={`${leftwindowMode == 1?"bg-red-500":""}`}>Wireframe</button>
        </div>
        {leftwindowMode == 0?<Preview/>:<Wireframe/>}
      </div>
      {/* <motion.div drag="x" dragMomentum={false} onDrag={(event,info)=>{console.log(info.offset.x); setleftwidth(prev=>Math.max(900,prev+info.delta.x))}} className="bg-gray-500 h-screen w-10">drag me </motion.div> */}
      <div onMouseDown={(e)=>{e.preventDefault();handleMouseDown()}}   className="h-screen w-2 cursor-col-resize"></div>
      <div className="bg-[#1E1E1E] h-screen rounded-3xl overflow-hidden flex-1 min-w-0 flex flex-col " >
        <h1 className="py-5 px-6 flex gap-2 text-white"><Code2 size={25} color="white" className="bg-red-500 rounded-[6px]"/>Code editor</h1>
        <Editor defaultLanguage="javascript" width="100%" height="100%" theme={`${theme == "dark"?"vs-dark":"light"}`} defaultValue="//Your code will appear here"></Editor>
      </div>
    </div>
  )
}
export default ConsoleBody