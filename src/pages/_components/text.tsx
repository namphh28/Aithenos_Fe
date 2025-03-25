import icon from '../../assets/icon.svg'
import { FaCircleArrowUp } from "react-icons/fa6";



const Content = [
    {
        id:1,
        title: "Luật học tập cả đời",
        text: "Khuyến khích học tập liên tục để phát triển kỹ năng trong thời đại mới. Nhà trường cần tích hợp tư duy tự học và kỹ năng phản biện vào giảng dạy.",
        link: "https://moet.gov.vn/tintuc/Pages/tin-tong-hop.aspx?ItemID=9865",
    },
    {
        id:2,
        title: "Xây dựng dữ liệu học sinh",
        text: "Thu thập dữ liệu từ lớp 1-12 để hoạch định chiến lược nguồn nhân lực, cần đầu tư hệ thống quản lý dữ liệu và đào tạo nhân viên.",
        link: "https://baochinhphu.vn/xay-dung-co-so-du-lieu-ve-giao-duc-va-dao-tao-102300951.htm",
    },
    {
        id:3,
        title: "Chuyển đổi số trong giáo dục",
        text: "Ứng dụng công nghệ vào giảng dạy và quản lý giáo dục, cần nâng cấp cơ sở hạ tầng và trang bị kỹ năng số cho học sinh, giáo viên.",
        link: "https://moet.gov.vn/giaoducquocdan/tang-cuong-ung-dung-cntt/pages/default.aspx",
    },
    {
        id:4,
        title: "Luật cấm dạy thêm",
        text: "Giảm gánh nặng tài chính và đảm bảo công bằng giáo dục, cần cung cấp lớp bổ trợ miễn phí hoặc tài liệu học tập trực tuyến.",
        link: "https://baochinhphu.vn/bo-gddt-ban-hanh-quy-dinh-moi-ve-day-them-hoc-them-102250103192752482.htm",
    },
];

export function Text() {
    return (
        <div>
        {Content.map((component) => (
            <li key={component.id} className="list-none flex items-start justify-center ">
                <img src={icon} className="max-w-[6rem] hidden sm:block" />
                <div className="ml-[1.5rem] sm:ml-0 text-start max-w-[30rem]">
                <p className="pt-5 text-color-1-700 text-2xl font-semibold">{component.title}</p>
                <p className="py-4 text-lg">{component.text}</p>
                <a href={component.link} className="max-w-[10rem] flex items-center justify-between text-color-1-500">
                    <p>Tìm hiểu thêm</p>
                    <FaCircleArrowUp className="text-xl m-[1rem] rotate-45 hover:rotate-90 hover:delay-150 duration-300  hover:ease-in-out " />
                </a>
                </div>
            </li>
        ))}
    </div>
    );
}