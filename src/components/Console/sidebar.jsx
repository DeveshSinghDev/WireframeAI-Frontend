import { motion } from "motion/react"
import { BoxesIcon, LeafIcon, Search, Settings, User } from "lucide-react"
import { BiQuestionMark } from "react-icons/bi"
import { RiAiGenerate } from "react-icons/ri"

const Sidebar = () => {
  return (
    <div className="bg-red-700 flex flex-col w-15 py-5 h-screen justify-between items-center">
      <div className="flex flex-col gap-5 *:bg-amber-200 *:rounded-full *:h-10 *:w-10 *:flex *:justify-center *:items-center">
        <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.9}} className="cursor-pointer">
          <LeafIcon />
        </motion.button>

        <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.9}} className="cursor-pointer">
          <Search />
        </motion.button>

        <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.9}} className="cursor-pointer">
          <RiAiGenerate  size={20}/>
        </motion.button>

        <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.9}} className="cursor-pointer">
          <BoxesIcon />
        </motion.button>
      </div>
      <div className="flex flex-col gap-5 *:bg-amber-200 *:rounded-full *:h-10 *:w-10 *:flex *:justify-center *:items-center">

        <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.9}} className="cursor-pointer">
          <Settings />
        </motion.button>

        <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.9}} className="cursor-pointer">
          <BiQuestionMark />
        </motion.button>

        <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.9}} className="cursor-pointer">
          <User />
        </motion.button>
      </div>
    </div>
  )
}
export default Sidebar