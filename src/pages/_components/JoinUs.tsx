import { FaCircleArrowUp } from 'react-icons/fa6';
import joinus from "../../assets/joinus.svg";

export default function JoinUs() {
    return (
        <div className="flex flex-col md:flex-row items-center gap-10 px-6 md:px-24">
            <div className="w-full md:w-3/5">
                <img
                    src={joinus}
                    alt="Học tập cùng Aithenos"
                    className="rounded-lg"
                />
            </div>

            <div className="w-full md:w-2/5 text-left">
                <h2 className="text-3xl font-bold text-[#4C359D] mt-2">
                    Tham Gia Cùng Aithenos Ngay Hôm Nay
                </h2>
                <p className="text-[#696984] mt-4 text-lg font-light">
                    Đăng ký để trải nghiệm học tập cá nhân hóa với AI!
                </p>

                <button
                    className="mt-6 bg-[#704EE7] text-white py-3 px-6 rounded-full hover:bg-[#4A32D4] transition-all flex items-center gap-2"
                >
                    Đăng Ký Dùng Thử Miễn Phí
                    <div className="rounded-full w-7 h-7 flex items-center justify-center">
                        <FaCircleArrowUp 
                            className="text-[white] text-lg rotate-45 transition-transform duration-300 ease-in-out group-hover:rotate-90"
                        />
                    </div>
                </button>
            </div>
        </div>
    );
}
