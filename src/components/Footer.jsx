import { useState } from "react";
import { Link } from "react-router-dom";
import Social from "../assets/Social.png";

function Footer() {
    return (
        <div className="cursor-pointer bg-black">
            <div className="p-4">
                <h1 className="text-[#BFBFBF]">Site</h1>
                <ul className="text-[#FFFFFF]">
                    <li><Link to="/" className="cursor-pointer hover:text-amber-400 transition">Home</Link></li>
                    <li><Link to="/about" className="cursor-pointer hover:text-amber-400 transition">About us</Link></li>
                    <li><Link to="/components" className="cursor-pointer hover:text-amber-400 transition">Components</Link></li>
                    <li><Link to="/contact" className="cursor-pointer hover:text-amber-400 transition">Contact</Link></li>

                </ul>
            </div>
            <div className="p-4">
                <h1 className="text-[#BFBFBF] mt-5">Socials</h1>
                <ul className="text-[#FFFFFF]">
                    <li><Link to="/instagram" className="cursor-pointer hover:text-[#FF9B51] transition">Instagram</Link></li>
                    <li><Link to="/linkedin" className="cursor-pointer hover:text-amber-400 transition">Linkedin</Link></li>
                    <li><Link to="/twitter" className="cursor-pointer hover:text-amber-400 transition">Twitter(X)</Link></li>

                </ul>
            </div>
            <div className="text-[#BFBFBF] p-4 mt-5">
                <h1>WireframeAI</h1>
                <h2>@2026 All right reserved.</h2>
            </div>
            <div className="bg-white h-160 mt-3  flex flex-col items-center justify-center">

                <h1 className="font-bold text-[22px] text-center max-w-[260px] leading-snug m-6" >
                    \\\  <br /> Let the creativity flow <br /> from within, <br />
                    Your next project <br /> starts from here

                </h1>

                <div className="m-2"><img src={Social} alt="Social" /></div>
                <div className="bg-blue-300 h-105 rounded-2xl mt-4 w-95 mb-4"></div>
            </div>
        </div>

    )
}
export default Footer;