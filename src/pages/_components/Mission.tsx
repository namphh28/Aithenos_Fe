import icon_0 from '../../assets/Icon-0.svg'
import icon_1 from '../../assets/Icon-1.svg'
import icon_2 from '../../assets/Icon-2.svg'
import icon_3 from '../../assets/Icon-3.svg'

const Box = [
    {
        id:1,
        icon: icon_0,
        title: "Chuyển Hoá Nội Dung Giáo Dục",
        text: "Biến tài liệu truyền thống thành nội dung số tương tác",
        color: "bg-color-1-500",
        textColor: "text-white"
    },
    {
        id:2,
        icon: icon_1,
        title: "Tăng Cường Học Tập Tự Chủ",
        text: "Cung cấp lộ trình học cá nhân hóa với AI",
        color: "bg-color-2-500",
        textColor: "text-white"

    },
    {
        id:1,
        icon: icon_2,
        title: "Thúc Đẩy Tài Năng Trẻ",
        text: "Thúc đẩy kỹ năng sáng tạo và giải quyết vấn đề",
        color: "bg-color-3-500",
        textColor: "text-white"

    },
    {
        id:1,
        icon: icon_3,
        title: "Kết Nối Giáo Viên Và Công Nghệ",
        text: "Giúp giáo viên dễ dàng đưa công nghệ vào lớp học",
        color: "bg-color-4-500",
        textColor: "text-color-4-900"

    },
];

export default function Mission() {
    return(
        <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-2 gap-4">
            {Box.map((components) => (
                <div key={components.id} className={`w-full p-[2rem] rounded-3xl ${components.color} ${components.textColor}`}>
                    <img src={components.icon} className='m-auto' />
                    <p className="text-2xl my-4 font-semibold">{components.title}</p>
                    <p className="text-xl font-thin">{components.text}</p>
                </div>
            ))}
        </div>
    );
}