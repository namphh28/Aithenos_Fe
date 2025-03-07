import { Link } from "react-router-dom";
import { NavHeader } from "./_components/nav-header"; // Giả sử NavHeader ở file riêng
import Footer from "./_components/footer"; // Giả sử Footer ở file riêng

export default function Homepage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header */}
      <NavHeader />

      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-br from-white to-gray-100 text-center flex items-center justify-center min-h-[80vh]">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-red-600 mb-6 tracking-tight animate-fade-in">
            Bứt Phá Học Tập Cùng Aithenos
          </h1>
          <p className="text-xl md:text-2xl text-gray-800 mb-6 leading-relaxed">
            Trải nghiệm tự học cá nhân hóa và mạnh mẽ với AI tiên tiến
          </p>
          <p className="text-lg md:text-xl italic text-orange-600 mb-8 font-medium animate-pulse">
            Đừng lo học hành chậm chạp, Aithenos giúp tiết kiệm thời gian, học nhanh, đỗ cao – thử ngay!
          </p>
          <div className="flex justify-center gap-6">
            <Link
              to="#signup"
              className="px-8 py-4 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
            >
              Đăng Ký Dùng Thử Miễn Phí
            </Link>
            <Link
              to="#features"
              className="px-8 py-4 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
            >
              Xem Demo Ngay
            </Link>
          </div>
        </div>
      </section>

      {/* Giới Thiệu Aithenos */}
      <section id="intro" className="w-full py-20 bg-white">
        <div className="mx-auto max-w-5xl text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-8 tracking-wide">
            Khám Phá Aithenos
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
            Aithenos là hệ sinh thái giáo dục số hóa tiên phong, ứng dụng AI để chuyển hóa giáo án, tạo lộ trình học tập cá nhân hóa, và cung cấp công cụ tương tác thông minh.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Dựa trên 4 sứ mệnh: chuyển hóa nội dung giáo dục, tăng cường học tập tự định hướng, khuyến khích đổi mới sáng tạo, và kết nối giáo viên với công nghệ.
          </p>
        </div>
      </section>

      {/* Hệ Sinh Thái Aithenos */}
      <section id="ecosystem" className="w-full py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="mx-auto max-w-5xl text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-10 tracking-wide">
            Hệ Sinh Thái Giáo Dục Toàn Diện
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: "Tech", desc: "Công nghệ AI tiên tiến" },
              { title: "Edu Device", desc: "Thiết bị giáo dục thông minh" },
              { title: "Web App", desc: "Ứng dụng web hiện đại" },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sứ Mệnh */}
      <section id="mission" className="w-full py-20 bg-white">
        <div className="mx-auto max-w-5xl text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-10 tracking-wide">
            Sứ Mệnh Của Chúng Tôi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Chuyển Hóa Giáo Dục", desc: "Biến tài liệu truyền thống thành nội dung số tương tác" },
              { title: "Tự Học Tự Chủ", desc: "Cung cấp lộ trình học cá nhân hóa với AI" },
              { title: "Đổi Mới Sáng Tạo", desc: "Thúc đẩy kỹ năng sáng tạo và giải quyết vấn đề" },
              { title: "Kết Nối Công Nghệ", desc: "Hỗ trợ giáo viên tích hợp công nghệ dễ dàng" },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 bg-gray-50 rounded-xl shadow-md hover:bg-yellow-50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-yellow-600 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tính Năng Nổi Bật */}
      <section id="features" className="w-full py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="mx-auto max-w-5xl text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-10 tracking-wide">
            Các Tính Năng Cốt Lõi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Số Hóa Giáo Án", desc: "Chuyển đổi giáo án thành nội dung số hóa tương tác" },
              { title: "Lộ Trình Cá Nhân", desc: "Tạo lộ trình học tập thông minh phù hợp từng học sinh" },
              { title: "Theo Dõi Tiến Độ", desc: "Dashboard trực quan theo dõi tiến độ học tập" },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="w-full py-20 bg-white">
        <div className="mx-auto max-w-5xl text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-10 tracking-wide">
            Các Câu Chuyện Thành Công
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "Aithenos giúp tôi quản lý lớp học dễ dàng hơn.", role: "Giáo Viên" },
              { quote: "Học với Aithenos thật thú vị, tôi ghi nhớ tốt hơn!", role: "Học Sinh" },
              { quote: "Tôi yên tâm theo dõi tiến độ của con.", role: "Phụ Huynh" },
            ].map((item) => (
              <div
                key={item.role}
                className="p-6 bg-gray-50 rounded-xl shadow-md hover:bg-blue-50 transition-all duration-300"
              >
                <p className="italic text-gray-700 mb-4">"{item.quote}"</p>
                <p className="font-semibold text-blue-600">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="signup" className="w-full py-20 bg-gradient-to-br from-green-50 to-blue-50 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6 tracking-wide">
            Tham Gia Cùng Aithenos Ngay Hôm Nay
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            Đăng ký để trải nghiệm học tập cá nhân hóa với AI!
          </p>
          <Link
            to="#signup"
            className="px-8 py-4 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
          >
            Đăng Ký Dùng Thử Miễn Phí
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

// CSS tùy chỉnh (nếu cần thêm ngoài Tailwind)
const customStyles = `
  @keyframes fade-in {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fade-in 1s ease-out forwards;
  }
`;

export function addCustomStyles() {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = customStyles;
  document.head.appendChild(styleSheet);
}

// Gọi hàm này trong useEffect nếu cần (khuyến nghị để thêm animation)