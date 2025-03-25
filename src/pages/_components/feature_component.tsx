import { FaArrowRight } from "react-icons/fa6";


export function TeacherComponent() {
    return(
        <ul className="my-[4rem] mx-0 sm:mx-[2rem] grid w-full grid-cols-1 gap-6 md:grid-cols-2">
            <li className="border border-custom-gray-primary rounded-xl shadow-lg hover:border-color-1-500">
                <a  
                href="/"
                role="link"
                >
                    <div className="z-10 text-start w-full flex flex-col items-start justify-start rounded-lg gap-4 p-6 hover:opacity-100 hover:text-color-1-500">
                    <span className="text-3xl">💼</span>
                    <h3 className="text-xl font-semibold">Tự động hóa công việc hành chính</h3>
                    <p className="font-normal">Tự động theo dõi điểm danh và quản lý đăng ký khóa học, giảm bớt thủ tục giấy tờ. </p>
                    <div className="opacity-0 w-full duration-300 hover:opacity-100">
                    <button className="flex items-center justify-between px-4 py-2 bg-color-1-500 text-white rounded-xl gap-2">
                        <p>Thử Ngay</p>
                        <FaArrowRight />
                    </button>
                    </div>
                    </div>
                </a>

            </li>
            <li className="border border-custom-gray-primary rounded-xl shadow-lg hover:border-color-1-500">
                <a  
                href="/"
                role="link"
                >
                    <div className="z-10 text-start w-full justify-start rounded-lg flex flex-col items-start gap-2 p-6">
                    <span className="text-3xl">📊</span>
                    <h3 className="text-xl py-2 font-semibold">Đánh giá và phản hồi hiệu quả</h3>
                    <p className="font-normal">Tạo bài kiểm tra tự động và công cụ đánh giá đồng đẳng giúp đơn giản hóa quá trình kiểm tra  </p>
                    <div className="opacity-0 w-full duration-300 hover:opacity-100">
                    <button className="flex items-center justify-between px-4 py-2 bg-color-1-500 text-white rounded-xl gap-2">
                        <p>Thử Ngay</p>
                        <FaArrowRight />
                    </button>
                    </div>
                    </div>
                </a>

            </li>
        </ul>
    );
}
export function SchoolComponent() {
    return(
        <ul className="my-[4rem] mx-0 sm:mx-[2rem] grid w-full grid-cols-1 gap-6 md:grid-cols-2">
        <li className="border border-custom-gray-primary rounded-xl shadow-lg hover:border-color-1-500">
            <a  
            href="/"
            role="link"
            >
                <div className="z-10 text-start w-full flex flex-col items-start justify-start shrink-0 overflow-inherit rounded-lg gap-4 p-6 hover:opacity-100 hover:text-color-1-500">
                <span className="text-3xl">📝</span>
                <h3 className="text-xl font-semibold">Tổng hợp theo dõi tiến trình tổng quát</h3>
                <p className="font-normal">Cung cấp các báo cáo, thống kê về hoạt động học tập, giúp nhà trường đánh giá hiệu quả giảng dạy và đưa ra các chiến lược cải thiện.
                </p>
                <div className="opacity-0 w-full duration-300 hover:opacity-100">
                <button className="flex items-center justify-between px-4 py-2 bg-color-1-500 text-white rounded-xl gap-2">
                    <p>Thử Ngay</p>
                    <FaArrowRight />
                </button>
                </div>
                </div>
            </a>

        </li>
        <li className="border border-custom-gray-primary rounded-xl shadow-lg hover:border-color-1-500">
            <a  
            href="/"
            role="link"
            >
                <div className="z-10 text-start w-full justify-start shrink-0 overflow-inherit rounded-lg flex flex-col items-start gap-2 p-6">
                <span className="text-3xl">📚</span>
                <h3 className="text-xl py-2 font-semibold">Quản lý kế hoạch bài giảng</h3>
                <p className="font-normal">Giáo viên có thể đưa các kế hoạch bài giảng lên hệ thống để quản lý và yêu cầu tổ trưởng chuyên môn cùng nhà trường kiểm duyệt dễ dàng.
                </p>
                <div className="opacity-0 w-full duration-300 hover:opacity-100">
                <button className="flex items-center justify-between mt-4 px-4 py-2 bg-color-1-500 text-white rounded-xl gap-2">
                    <p>Thử Ngay</p>
                    <FaArrowRight />
                </button>
                </div>
                </div>
            </a>

        </li>
    </ul>
    );
}
export function StudentComponent() {
    return(
<ul className="my-[4rem] mx-0 sm:mx-[2rem] grid w-full grid-cols-1 gap-6 md:grid-cols-2">
        <li className="border border-custom-gray-primary rounded-xl shadow-lg hover:border-color-1-500">
            <a  
            href="/"
            role="link"
            >
                <div className="z-10 text-start w-full flex flex-col items-start justify-start shrink-0 overflow-inherit rounded-lg gap-4 p-6 hover:opacity-100 hover:text-color-1-500">
                <span className="text-3xl">🚀</span>
                <h3 className="text-xl font-semibold">Bot phản hồi theo thời gian thực</h3>
                <p className="font-normal">Gia sư AI cung cấp câu trả lời tức thì cho câu hỏi của học sinh và chỉ ra những điểm cần cải thiện. Đưa ra chỉ dẫn hướng dẫn trực tiếp.
                </p>
                <div className="opacity-0 w-full duration-300 hover:opacity-100">
                <button className="flex items-center justify-between px-4 py-2 bg-color-1-500 text-white rounded-xl gap-2">
                    <p>Thử Ngay</p>
                    <FaArrowRight />
                </button>
                </div>
                </div>
            </a>

        </li>
        <li className="border border-custom-gray-primary rounded-xl shadow-lg hover:border-color-1-500">
            <a  
            href="/"
            role="link"
            >
                <div className="z-10 text-start w-full justify-start shrink-0 overflow-inherit rounded-lg flex flex-col items-start gap-2 p-6">
                <span className="text-3xl">🤝</span>
                <h3 className="text-xl py-2 font-semibold">Cộng đồng mạnh mẽ</h3>
                <p className="font-normal">Cộng đồng trao đổi kiến thức giao lưu làm quen và định hướng.
                </p>
                <div className="opacity-0 w-full duration-300 hover:opacity-100">
                <button className="flex items-center justify-between px-4 mt-4 py-2 bg-color-1-500 text-white rounded-xl gap-2">
                    <p>Thử Ngay</p>
                    <FaArrowRight />
                </button>
                </div>
                </div>
            </a>

        </li>
    </ul>
    );
}
