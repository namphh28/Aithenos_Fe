import { FaCircleArrowUp } from "react-icons/fa6";
import Hackathon from "../../assets/StrotiesImg/GDSCGHackathon.jpg"
import VSIC from "../../assets/StrotiesImg/VSIC.jpg"
import FPT from "../../assets/StrotiesImg/Festival.png"

interface CardProps {
  title: string;
  link: string;
  picture: string;
}

const Card = ({ title, link, picture }: CardProps) => {
  return (
    <div className="bg-white border-4 border-white shadow-lg rounded-2xl overflow-hidden">
      <img src={picture} className="w-full h-[15rem] object-cover" />
      <div className="p-7 text-left">
        <h3 className="font-semibold text-lg text-gray-900 mb-2">{title}</h3>
        <a
          href={link}
          className="max-w-[10rem] flex items-center gap-2 text-color-1-500 group"
        >
          <p>Đọc thêm</p>
          <FaCircleArrowUp className="text-xl rotate-45 transition-transform duration-300 ease-in-out group-hover:rotate-90" />
        </a>
      </div>
    </div>
  );
};

export function Stories() {
  const data: CardProps[] = [
    {
      title: "Sinh viên Trường Đại học FPT và dự án ứng dụng AI tái chế rác thải thành đồ dùng",
      link: "https://tapchigiaoduc.edu.vn/article/88770/217/sinh-vien-truong-dai-hoc-fpt-va-du-an-ung-dung-ai-tai-che-rac-thai-thanh-do-dung/?fbclid=IwY2xjawJO7-tleHRuA2FlbQIxMAABHRgrYYuHzHdDDQ--0wKKgMS9NRo5tqVyiA1OwfIHdrZkTsodrQCjDoU6rg_aem_NSG0R0gxMu7EFx8Me_VYSg",
      picture: Hackathon,
    },
    {
      title: "Chung kết miền Bắc cuộc thi “Thử thách sáng tạo Việt Nam lần thứ 13",
      link: "https://diendandothi.kinhtedothi.vn/chung-ket-mien-bac-cuoc-thi-thu-thach-sang-tao-viet-nam-lan-thu-13-5059.html?fbclid=IwY2xjawJO7_BleHRuA2FlbQIxMAABHbQRZvHTT41zgKm7M5DzV5iY03HdHKHRNpKar49TSmmetfasiAN_qq4iQA_aem_rrH4gVpiHy9MMOgQK0a4Yg",
      picture: VSIC,

    },
    {
      title: "Tuần Định Hướng năm học 2024 - 2025  FPT School Hà Nam",
      link: "https://hanam-school.fpt.edu.vn/",
      picture: FPT,

    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {data.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
}
