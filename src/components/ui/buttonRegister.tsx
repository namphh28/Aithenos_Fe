import { FaCircleArrowUp } from "react-icons/fa6";

export default function ButtonRegister() {
    return(
        <button className="flex items-center justify-between bg-color-1-500 rounded-full w-auto transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:opacity-75">
            <p className="text-white pl-[2rem]">Đăng ký dùng thử miễn phí</p>
            <FaCircleArrowUp className=" text-2xl m-[1rem] rotate-45 text-white hover:rotate-90 hover:delay-150 duration-300  hover:ease-in-out  " />
        </button>
    );
}