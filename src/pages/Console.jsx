import { motion } from "motion/react"
import Sidebar from "../components/Console/sidebar"
import ConsoleBody from "../components/Console/body"
const Console = () => {
  return (
    <div className="flex">
      <section>
        <Sidebar />
      </section>
      <section className="flex-1">
        <ConsoleBody/>
      </section>
    </div>
  )
}
export default Console