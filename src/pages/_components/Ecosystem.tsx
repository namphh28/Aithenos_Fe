import { useState, useEffect } from "react";
import {TabButtonEcosystem} from "@/components/TabButton";
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
    }, 12000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="mt-[4rem] lg:flex items-start justify-between">
        <div className="max-w-[30rem] h-auto object-fill mx-[2rem] h-auto">
          {tab === "technology" && <TechnologyComponent />}
          {tab === "development" && <DevelopmentComponent />}
          {tab === "eduDevice" && <EduDeviceComponent />}
          {tab === "activity" && <ActivityComponent />}
        </div>
        <div>
          {tabs.map((tabKey) => (
            <TabButtonEcosystem key={tabKey} isActive={tab === tabKey} action={() => setTab(tabKey)}>
              <div>
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
                  <div className="text-start font-normal text-lg">
                    <p className="pt-4 text-black">
                      {tabKey === "technology"
                        ? "AI thông minh biến đổi giáo án thành nội dung học tập sinh động, giúp học sinh học nhanh và thú vị hơn."
                        : tabKey === "development"
                        ? "Thúc đẩy tài năng trẻ phát triển kỹ năng sáng tạo và giải quyết vấn đề, khi đặt họ vào môi trường học tập tràn đầy cảm hứng qua các khóa học và hoạt động thú vị."
                        : tabKey === "eduDevice"
                        ? "Thiết bị học tập thông minh như bộ robotics kits, bộ thí nghiệm khoa học tích hợp lý tưởng tự học chủ động của Aithenos."
                        : "Workshop, cuộc thi, sự kiện giúp học sinh luyện kỹ năng thực tế, phát triển toàn diện."}
                    </p>
                    <p className="pt-4 text-black">
                      {tabKey === "technology"
                        ? "Giáo viên tiết kiệm thời gian, giảng dạy sáng tạo hơn với công cụ hiện đại, mang lại hiệu quả vượt trội."
                        : tabKey === "development"
                        ? "Nuôi dưỡng thế hệ đổi mới, sẵn sàng cống hiến cho tương lai với những cơ hội phát triển toàn diện."
                        : tabKey === "eduDevice"
                        ? "Phụ huynh yên tâm theo dõi tiến độ con dễ dàng, chi phí hợp lý, với các thiết bị hiện đại được thiết kế để khơi dậy sáng tạo."
                        : "Tăng cơ hội thành công, hấp dẫn cả học sinh và phụ huynh Việt Nam."}
                    </p>
                  </div>
                )}
              </div>
            </TabButtonEcosystem>
          ))}
          <div className="mt-[2rem] flex items-center justify-center">
             <button className="mb-[2rem] bg-color-1-500 rounded-full w-auto transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:opacity-75">
                <p className="text-white px-[2rem] py-4 font-semibold">Nhận Tư Vấn</p>
              </button>
              <button className="mb-[2rem] mx-4 bg-white border border-color-1-700 border-2 rounded-full w-auto transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:opacity-75">
                <p className="text-color-1-700 px-[2rem] py-4 font-semibold">Dùng Thử</p>
              </button>
          </div>
        </div>
      </div>
    </>
  );
}
