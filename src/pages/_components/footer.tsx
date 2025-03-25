import logo2 from "../../assets/logo2.svg";
import instagramIcon from "../../assets/ig.svg";
import facebookIcon from "../../assets/fb.svg";
import twitterIcon from "../../assets/tw.svg";
import linkedinIcon from "../../assets/lin.svg";
import { FaPaperPlane } from 'react-icons/fa6';

export default function Footer() {
    return (
        <footer className="bg-[#5E42C2] text-white py-10 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:ml-20"> 
                <div className="flex flex-col items-start space-y-4">
                    <div className="flex items-center gap-2">
                        <img src={logo2} alt="Aithenos Logo" className="w-8 h-8" />
                        <h1 className="text-2xl font-bold">Aithenos</h1>
                    </div>
                    <p className="text-sm font-light leading-relaxed">
                        Copyright © 2025 Aithenos.<br />
                        All rights reserved
                    </p>

                    <div className="flex gap-3 mt-4">
                        <img src={instagramIcon} alt="Instagram" className="w-7 h-7 cursor-pointer hover:opacity-80" />
                        <img src={facebookIcon} alt="Facebook" className="w-7 h-7 cursor-pointer hover:opacity-80" />
                        <img src={twitterIcon} alt="Twitter" className="w-7 h-7 cursor-pointer hover:opacity-80" />
                        <img src={linkedinIcon} alt="LinkedIn" className="w-7 h-7 cursor-pointer hover:opacity-80" />
                    </div>
                </div>

                <div className="flex flex-col space-y-6">
                    <div>
                        <h2 className="font-bold mb-2">Aithenos</h2>
                        <ul className="flex flex-wrap gap-4 md:gap-10 text-sm font-light">
                            <li className="hover:underline cursor-pointer">Về Chúng Tôi</li>
                            <li className="hover:underline cursor-pointer">FAQ</li>
                            <li className="hover:underline cursor-pointer">Liên Hệ</li>
                            <li className="hover:underline cursor-pointer">Điều Khoản</li>
                            <li className="hover:underline cursor-pointer">Chính Sách Bảo Mật</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="font-bold">Cập nhật liên tục</h2>
                        <div className="flex items-center bg-[#704EE7] text-white rounded-lg px-4 py-2 mt-2 w-full md:w-2/3">
                            <input
                                type="email"
                                placeholder="Điền địa chỉ email của bạn"
                                className="bg-transparent outline-none w-full placeholder-white placeholder-opacity-70"
                            />
                            <FaPaperPlane className="text-lg cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
