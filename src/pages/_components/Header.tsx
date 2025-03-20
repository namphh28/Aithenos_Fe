import logo from "../../assets/logo.svg"; 
import buttonIcon from "../../assets/arrow.svg";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

const NavbarMenu = [
    {
        id: 1,
        title: "Tính Năng",
        path: "/upload-image",
    },
    {
        id: 2,
        title: "Hệ Sinh Thái",
        path: "#ecosystem",
    },
    {
        id: 3,
        title: "Sứ Mệnh",
        path: "#mission",
    },
    {
        id: 4,
        title: "Testimonials",
        path: "#testimonials",
    },
];
export function Header() {
    return (
        <header className="w-full px-[4rem] py-[1.5rem] z-10 bg-white sticky top-0">
            <nav className="mx-auto w-full flex items-center justify-between">
            <Link to="/" > 
            <img src={logo} alt="" />
            </Link>
            {/* menu section */}
            <div className="hidden lg:block">
                <ul className="flex items-center gap-3">
                    {NavbarMenu.map((menu) => (
                        <li key={menu.id} className="px-1">
                            <a href={menu.path} className="border border-solid border-custom-gray-primary px-5 py-2 rounded-full text-custom-black-primary hover:border-custom-black-primary relative group" >{menu.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <button className="hidden lg:flex items-center justify-between border border-solid border-color-1-500 rounded-full bg-white lg:block w-auto transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:opacity-75">
                    <p className="pl-5 text-color-1-500">Đăng Ký</p>
                    <img src={buttonIcon} className="px-4 py-3"/>
            </button>
            {/* responsive mobile */}
            <div className="lg:hidden">
                <IoMenu className="text-4xl hover:text-color-1-500"/>
            </div>
            </nav>
        </header>
    );
}
