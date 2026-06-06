import { motion } from "motion/react"
import { useState } from "react"
const ConsoleBody = ()=>{
  const [leftwidth,setleftwidth] = useState(50)

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
    <div className="flex">
      <div className="bg-green-400 h-screen" style={{width:`${leftwidth}%`}}>

      </div>
      {/* <motion.div drag="x" dragMomentum={false} onDrag={(event,info)=>{console.log(info.offset.x); setleftwidth(prev=>Math.max(900,prev+info.delta.x))}} className="bg-gray-500 h-screen w-10">drag me </motion.div> */}
      <div onMouseDown={(e)=>{e.preventDefault();handleMouseDown()}}   className="bg-gray-500 h-screen w-2 cursor-col-resize"></div>
      <div className="bg-blue-400 h-screen flex-1" >

      </div>
    </div>
  )
}
export default ConsoleBody