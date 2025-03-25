import logo from "../../assets/logo.svg";
import buttonIcon from "../../assets/arrow.svg";
import { IoMenu, IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const NavbarMenu = [
    {
        id: 1,
        title: "Tính Năng",
        sectionId: "features-section", 
    },
    {
        id: 2,
        title: "Giới Thiệu",
        sectionId: "mission-section", 
    },
    {
        id: 3,
        title: "Hệ Sinh Thái",
        sectionId: "ecosystem-section", 
    },
    {
        id: 4,
        title: "Tin Tức",
        sectionId: "news-section", 
    },
];

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <header className="w-full pl-[2rem] pr-4 sm:px-[4rem] py-[1.5rem] z-10 bg-white sticky top-0 opacity-90">
                <nav className="mx-auto w-full flex items-center justify-between">
                    <a href="/" className="max-w-[10rem]">
                        <img src={logo} alt="Logo" />
                    </a>
                    
                    {/* Menu Navbar */}
                    <div className="hidden lg:block">
                        <ul className="flex items-center gap-3">
                            {NavbarMenu.map((menu) => (
                                <li key={menu.id} className="px-1">
                                    <button
                                        onClick={() => scrollToSection(menu.sectionId)}
                                        className="border border-solid border-custom-gray-primary px-5 py-2 rounded-full text-custom-black-primary hover:border-custom-black-primary relative group"
                                    >
                                        {menu.title}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button
                        onClick={() => scrollToSection("trial-signup")}
                        className="hidden bg-white lg:flex items-center justify-between border border-solid border-color-1-500 rounded-full bg-white lg:block w-auto transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:opacity-75"
                    >
                        <p className="pl-5 text-color-1-500">Đăng Ký</p>
                        <img src={buttonIcon} className="px-4 py-3" alt="button icon" />
                    </button>

                    {/* Responsive Mobile */}
                    <button className="bg-white lg:hidden" onClick={handleMenuToggle}>
                        {isMenuOpen ? (
                            <IoClose className="text-4xl hover:text-color-1-500" />
                        ) : (
                            <IoMenu className="text-4xl hover:text-color-1-500" />
                        )}
                    </button>
                </nav>
            </header>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.header
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-[5rem] opacity-90 left-0 w-full bg-white shadow-md p-4 lg:hidden z-20"
                    >
                        <ul className="flex flex-col items-center gap-5 mb-4">
                            {NavbarMenu.map((menu) => (
                                <li key={menu.id} className="px-1">
                                    <button
                                        onClick={() => {
                                            scrollToSection(menu.sectionId);
                                            setIsMenuOpen(false);
                                        }}
                                        className="px-5 py-2 font-semibold rounded-full bg-white text-custom-black-primary hover:text-color-1-500 relative group"
                                    >
                                        {menu.title}
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <hr />
                        <button
                            onClick={() => {
                                scrollToSection("trial-signup");
                                setIsMenuOpen(false);
                            }}
                            className="flex mt-4 items-center justify-center border border-solid border-color-1-500 rounded-full bg-white lg:hidden w-auto transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:opacity-75 mx-auto"
                        >
                            <p className="pl-5 text-color-1-500">Đăng Ký</p>
                            <img src={buttonIcon} className="px-4 py-3" alt="button icon" />
                        </button>
                    </motion.header>
                )}
            </AnimatePresence>
        </>
    );
}
