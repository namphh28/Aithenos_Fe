import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TabButtonEcosystem } from "@/components/TabButton";
import {
  TechnologyComponent,
  DevelopmentComponent,
  EduDeviceComponent,
  ActivityComponent,
} from "./ecosystem_component";

export default function Ecosystem() {
  const tabs = ["technology", "development", "eduDevice", "activity"];
  const [tab, setTab] = useState(tabs[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTab((prevTab) => {
        const currentIndex = tabs.indexOf(prevTab);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex];
      });
    }, 50000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-[4rem] lg:flex items-start justify-center">
      <div className="max-w-[30rem] h-auto object-fill mx-[2rem] h-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
          >
            {tab === "technology" && <TechnologyComponent />}
            {tab === "development" && <DevelopmentComponent />}
            {tab === "eduDevice" && <EduDeviceComponent />}
            {tab === "activity" && <ActivityComponent />}
          </motion.div>
        </AnimatePresence>
      </div>
        <div>
        {tabs.map((tabKey) => (
          <TabButtonEcosystem key={tabKey} isActive={tab === tabKey} action={() => setTab(tabKey)}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <p>
                {tabKey === "technology"
                  ? "Công Nghệ Thông Minh"
                  : tabKey === "development"
                  ? "Phát Triển Tài Năng"
                  : tabKey === "eduDevice"
                  ? "Thiết Bị Học Tập Thông Minh"
                  : "Hoạt Động Sáng Tạo"}
              </p>
              {tab === tabKey && (
                <motion.div
                  className="text-start font-normal text-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="pt-4 text-black">
                    {tabKey === "technology"
                      ? "AI thông minh biến đổi giáo án thành nội dung học tập sinh động, giúp học sinh học nhanh và thú vị hơn."
                      : tabKey === "development"
                      ? "Thúc đẩy tài năng trẻ phát triển kỹ năng sáng tạo và giải quyết vấn đề."
                      : tabKey === "eduDevice"
                      ? "Thiết bị học tập thông minh như bộ robotics kits, bộ thí nghiệm khoa học."
                      : "Workshop, cuộc thi, sự kiện giúp học sinh luyện kỹ năng thực tế."}
                  </p>
                  <p className="pt-4 text-black">
                    {tabKey === "technology"
                      ? "Giáo viên tiết kiệm thời gian, giảng dạy sáng tạo hơn với công cụ hiện đại."
                      : tabKey === "development"
                      ? "Nuôi dưỡng thế hệ đổi mới, sẵn sàng cống hiến cho tương lai."
                      : tabKey === "eduDevice"
                      ? "Phụ huynh yên tâm theo dõi tiến độ con dễ dàng, chi phí hợp lý."
                      : "Tăng cơ hội thành công, hấp dẫn cả học sinh và phụ huynh Việt Nam."}
                  </p>
                </motion.div>
              )}
            </motion.div>
          </TabButtonEcosystem>
        ))}
        <div className="mt-[2rem] sm:flex items-center justify-center">
          <a href="https://www.linkedin.com/in/hainguyenvn/">
          <motion.button
            className="mb-4 sm:mb-[2rem] bg-color-1-500 rounded-full w-auto px-[2rem] py-4 font-semibold text-white"
            whileHover={{ scale: 1.1, opacity: 0.8 }}
          >
            Nhận Tư Vấn
          </motion.button>
          </a>
          <a href="https://www.linkedin.com/in/hainguyenvn/">
          <motion.button
            className="mb-[2rem] mx-4 bg-white border border-color-1-700 border-2 rounded-full w-auto px-[2rem] py-4 font-semibold text-color-1-700"
            whileHover={{ scale: 1.1, opacity: 0.8 }}
          >
            Dùng Thử
          </motion.button>
          </a>
        </div>
      </div>
    </div>
  );
}
