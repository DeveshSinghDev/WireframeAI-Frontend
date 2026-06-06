import { useState } from "react";
import { Link } from "react-router-dom";
import image from "../assets/image1.png";
import Sphoto from "../assets/Sphoto.png";
import Dphoto from "../assets/Dphoto.png";
import Social from "../assets/Social.png";
import Back from "../assets/back.png";
import Navbar from '../components/Navbar';


function About() {
    return (
        <>
        <Navbar />
        <div className="m-5">
            <h2 className="text-[#FFFFFF]">• ABOUT US</h2>
            <h1 className="text-[#FFFFFF] text-[26px] mt-5 font-bold leading-tight">
                <span className="text-[#FF9B51]">Welcome to WireframeAI:</span>
                <br /> Build UI With Ease

            </h1>
            <p className="text-[#FFFFFF] mt-3 text-[16px]">
                WireframeAI turns ideas into production-ready <br />
                code—instanly.Skip the hassle of converting <br />
                wirefram into frontend builds. Our AI <br />
                understands your designs and genertes clean, <br />
                responsive code in seconds.Build faster, <br />
                smarter, and focus on what truly matters— <br />
                creating.

            </p>
            <div className="mt-15 mb-10">

                <img className="w-full object-cover" src={image}
                    alt="image" />
            </div>

            {/* Key People */}
            <div className="">
                <p className="text-[#FFFFFF] ">// KEY PEOPLE</p>
                <h1 className="text-[#FFFFFF] font-bold text-[24px] mt-5">Satyabrata Padhiary
                </h1>
                <span className="text-[#FF9B51] text-[16px]">Co-Founder & Full Stack Developer</span>
            </div>
            <div className="relative overflow-hidden w-full">
                <img className=" w-full h-full object-cover mt-5" src={Sphoto}
                    alt="Sphoto" />

                <p className="text-[#FFFFFF] absolute leading-tight bottom-4 left-4 right-4 text-xs sm:text-sm md:text-base max-w-[120%] sm:max-w-[80%]">Passionate full-stack developer driven by <br />
                    the vision of making design-to-code <br />
                    workflows seamless.Satyabrata focuses on <br />
                    building the AI engine that powers <br />
                    WireframeAI's core capabilities.</p>
            </div>
            <div>
                <h1 className="text-[#FFFFFF] font-bold text-[24px] mt-15">Devesh Singh
                </h1>
                <span className="text-[#FF9B51]">Co-Founder & Full Stack Developer</span>
            </div>
            <div className="relative w-full overflow-hidden ">
                <img className="w-full object-cover mt-5" src={Dphoto} alt="Dphoto" />
                <p className="text-[#FFFFFF] leading-tight absolute bottom-4 left-4 right-4 text-xs sm:text-sm md:text-base max-w-[120%] sm:max-w-[80%]">
                    A creative technologist who believes in <br />
                    reducing repetitive development tasks <br />
                    through intelligent automation. Devesh <br />
                    brings deep expertise in frontend <br />
                    engineering and AI integration to <br />
                    WireframeAI.</p>
            </div>

            {/* Footer */}

            <div className="cursor-pointer bg-black mt-15">
                        <div className="p-4 ">
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
                            <div className="bg-blue-300 h-105 rounded-2xl mt-4 w-95 mb-4">prasoon is a good boy but hawasi</div>
                        </div>
                    </div>
        </div>
        </>
    );
}
export default About;