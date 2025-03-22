import { FaCircleArrowUp } from "react-icons/fa6";

interface CardProps {
  title: string;
  link: string;
}

const Card = ({ title, link }: CardProps) => {
  return (
    <div className="bg-white border-4 border-white shadow-lg rounded-2xl overflow-hidden">
      <div className="bg-gray-300 h-40 w-full"></div>
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
      title: "Phân Biệt Dạy Học Trực Tuyến Không Đồng Bộ Và Dạy Học Trực Tuyến Đồng Bộ",
      link: "#",
    },
    {
      title: "Gợi Ý 5 Cách Tương Tác Với Học Sinh Online",
      link: "#",
    },
    {
      title: "Triển Khai Dạy Học Trực Tuyến Cần Chuẩn Bị Gì?",
      link: "#",
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
