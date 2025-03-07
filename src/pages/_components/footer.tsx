import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full px-4 py-8 bg-gradient-to-br from-green-50 to-blue-50 text-gray-800">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Cột 1: Liên kết */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold text-red-600">Aithenos</h3>
          <div className="flex flex-col gap-2">
            <Link to="/about" className="hover:text-blue-600">Về Chúng Tôi</Link>
            <Link to="/faq" className="hover:text-blue-600">FAQ</Link>
            <Link to="/contact" className="hover:text-blue-600">Liên Hệ</Link>
            <Link to="/terms" className="hover:text-blue-600">Điều Khoản</Link>
            <Link to="/privacy" className="hover:text-blue-600">Chính Sách Bảo Mật</Link>
          </div>
        </div>

        {/* Cột 2: Mạng xã hội */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold text-red-600">Kết Nối Với Chúng Tôi</h3>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-6 h-6 text-blue-600 hover:text-blue-800" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-6 h-6 text-blue-600 hover:text-blue-800" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-6 h-6 text-blue-600 hover:text-blue-800" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 text-blue-600 hover:text-blue-800" />
            </a>
          </div>
        </div>

        {/* Cột 3: CTA */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold text-red-600">Tham Gia Ngay</h3>
          <Link
            to="#signup"
            className="inline-block px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Đăng Ký Dùng Thử Miễn Phí
          </Link>
        </div>
      </div>

      {/* Bản quyền */}
      <div className="mt-8 text-center text-sm text-gray-600">
        © 2025 Aithenos. All rights reserved.
      </div>
    </footer>
  );
}