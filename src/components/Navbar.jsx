import { useState } from "react";
import profile from "../assets/profile.png";
import { MenuIcon } from "lucide-react"
import { Link } from "react-router-dom";
function Navbar() {
    const [open, setOpen] = useState(false);
    const isLoggedIn = false;

    return (
        <div className="w-full  h-16 flex items-center justify-between px-4 
     text-white relative ">

            <div className="text-5xl cursor-pointer"
                onClick={() => setOpen(true)}
            >
                <MenuIcon />
                {/* side bar */}
                <div className={` h-40 w-fit absolute flex items-center z-20 text-sm transform ${!open ? "-translate-x-40" : "translate-x-0"} transition-all`}>
                    <ul className="space-y-4">
                        <li className="cursor-pointer bg-gray-900 rounded-2xl w-17 text-center">
                            <Link to="/">Home</Link>
                        </li>

                        <li className="cursor-pointer bg-amber-300 rounded-2xl w-21 text-center">
                            <Link to="/about">About us</Link>
                        </li>

                        <li className="cursor-pointer bg-amber-300 rounded-2xl w-28 text-center">
                            <Link to="/components">Components</Link>
                        </li>
                    </ul>
                </div>

            </div>
            <h1 className="absolute left-1/2 transform -translate-x-1/2 text-lg font-semibold">
                WireframeAI
            </h1>

            {isLoggedIn ? (
  <img
    src={profile}
    alt="profile"
    className="w-10 h-10 rounded-full object-cover"
  />
) : (
  <Link
    to="/Signup"
    className="px-2 py-1 border font-serif border-white rounded-2xl text-white hover:bg-white hover:text-black transition"
  >
    Sign In
  </Link>
)}
            {open && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-xs z-10"
                    onClick={() => setOpen(false)}
                ></div>
            )}

        </div>
    );
}

export default Navbar;