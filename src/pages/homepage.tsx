import { Header } from "./_components/Header";
import Footer from "./_components/footer";
import { Helmet } from 'react-helmet';
import { ButtonRegisterDefault, ButtonRegisterVariant1 } from "../components/ui/buttonRegister";
import { Text } from "./_components/text";
import Mission from "./_components/Mission";
import Ecosystem from "./_components/Ecosystem";
import Feature from "./_components/Feature";
// import JoinUs from "./_components/JoinUs";
import { CommentsList } from "./_components/Comments";
import { Stories } from "./_components/Stories";
import { Team } from "./_components/Team";
import TrialSignup from "./_components/TrialSignup";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

//img
import picture1 from "../assets/picture1.png";
import picture2 from "../assets/picture2.svg";
import arrow from "../assets/Arrow_05.svg";
import highlight from "../assets/Vector.svg";
import { BsTriangleFill } from "react-icons/bs";
import picture3 from "../assets/img.jpg";
import './landingpage.css';

export default function Homepage() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      <Helmet>
        <title>Aithenos - Hệ Sinh Thái Giáo Dục Số Hóa</title>
        <meta name="description" content="Trải nghiệm tự học cá nhân hóa và mạnh mẽ với Aithenos – hệ sinh thái giáo dục số hóa tiên tiến ứng dụng AI." />
      </Helmet>
      {/* Main */}
      <main id="main">
        {/* section 1 */}
        <motion.section
          id="hero-section"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid-container">
            <div className="item1 hidden lg:block">
              <motion.img
                src={picture1}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
              />
            </div>
            <div className="item2">
              <div className=" xl:flex items-start pb-[2rem]">
                <motion.h1
                  className="text-6xl text-center font-semibold"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
                >
                  Bứt phá học tập cùng
                </motion.h1>
                <div className="text-Aithenos lg:mx-0">
                  <motion.h1
                    className="mt-2 lg:mt-0"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }}
                  >
                    Aithenos
                  </motion.h1>
                  <motion.img
                    src={highlight}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } }}
                  />
                </div>
              </div>
              <motion.h3
                className="text-center py-[2rem] text-3xl text-gray "
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.6 } }}
              >
                Trải nghiệm tự học cá nhân hóa và mạnh mẽ với AI tiên tiến
              </motion.h3>
              <motion.p
                className="text-center text-color-1-500 text-xl pb-[2rem]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.8 } }}
              >
                Đừng lo học hành chậm chạp, Aithenos giúp tiết kiệm thời gian, học nhanh, đỗ cao – thử ngay!
              </motion.p>
              <motion.div
                className="ButtonRegister lg:mx-0 flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 1 } }}
              >
                <a href="#trial-signup">
                  <ButtonRegisterDefault />
                  <ButtonRegisterVariant1 />
                </a>
                <a href="#features-section" className="max-w-[12rem] mb-[0rem] lg:mt-0  sm:ml-[2rem] flex items-center justify-center gap-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:opacity-75">
                  <button className="w-15 h-15 bg-white border border-color-1-500 rounded-full ">
                    <BsTriangleFill className="m-[1rem] rotate-90 text-color-1-500 " />
                  </button>
                  <p className="hidden sm:block">Xem tính năng</p>
                </a>
              </motion.div>
            </div>
            <div className="hidden lg:block">
              <motion.img
                src={picture2}
                className="my-[4rem]"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
              />
              <motion.img
                src={arrow}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } }}
              />
            </div>
          </div>
        </motion.section>
        {/* section 2 */}
        <motion.section
          id="discover-section"
          ref={ref}
          variants={sectionVariants}
          initial="hidden"
          animate={controls}
          className="section"
        >
          <div className="container">
            <motion.h2
              className="title"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
            >
              Khám Phá Aithenos
            </motion.h2>
            <div className="mx-[5%]">
              <motion.div
                className="border rounded-xl border-solid bg-white border-color-1-500 p-[2rem] mt-[2rem]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }}
              >
                <p>Hệ sinh thái Aithenos ra đời với sứ mệnh tiên phong trong lĩnh vực giáo dục chuyển hóa, mang đến giải pháp toàn diện giúp cá nhân hóa hành trình học tập, tối ưu hóa hiệu quả giảng dạy và thúc đẩy sự phát triển và sáng tạo không giới hạn của thế hệ trẻ.</p>
              </motion.div>
              <motion.div
                className="border rounded-xl border-solid bg-white border-color-1-500 p-[2rem] mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } }}
              >
                <p>Với công nghệ tự học thông minh, lộ trình học thích ứng, và tốc độ tăng trưởng học tập vượt trội, chúng tôi giúp trẻ phát triển kỹ năng tự học, tích lũy các kỹ năng thiết yếu cho thế kỷ 21 như tư duy sáng tạo, giải quyết vấn đề, và kỹ năng số. nơi mọi học sinh và giáo viên có thể tiếp cận các công cụ AI tiên tiến để tự học linh hoạt, thích ứng với nhu cầu cá nhân, và tăng tốc tiến bộ học tập. Aithenos không chỉ định hình tương lai giáo dục mà còn phù hợp với chiến lược phát triển bền vững của Chính phủ Việt Nam.</p>
              </motion.div>
            </div>
          </div>
        </motion.section>
        {/* section 3 */}
        <section id="mission-section" className="section">
          <div className="container">
            <p className="title">Sứ Mệnh Của Chúng Tôi</p>
            <Mission />
          </div>
        </section>
        {/* section 4 */}
        <section id="goverment-section" className="section">
            <div className="container">
                <h2 className="title text-center text-3xl font-bold mb-6 mb-[2rem]">
                    Thông Tư Từ Chính Phủ Việt Nam
                </h2>
                <div className="flex flex-col items-center justify-center lg:justify-around">
                    <img src={picture3} alt="img" className=" w-full max-w-[40rem] my-10 rounded-xl" />
                    <Text />
                </div>
            </div>
        </section>
        {/* section 5 */}
        <section id="ecosystem-section" className="section">
          <div className="container">
            <h2 className="title">Hệ Sinh Thái Giáo Dục Toàn Diện</h2>
            <Ecosystem />
          </div>
        </section>
        {/* section 6 */}
        <section id="features-section" className="section">
          <div className="container">
          <h2 className="title">Các Tính Năng Cốt Lõi</h2>
          <Feature />
          </div>
        </section>
        {/* section 7 */}
        <section id="news-section" className="section">
          <div className="container">
            <p className="title">Tin Tức</p>
            <Stories />
          </div>
        </section>
        {/* section 8 */}
        <section id="comment-section" className="section">
          <div className="container">
            <p className="title">Trải nghiệm Thực Tế Từ Người Dùng</p>
            <CommentsList />
          </div>
        </section>
        {/* section 9 */}
        <section id="adviser-section" className="section">
          <div className="container">
            <p className="title">Hội Đồng Cố Vấn</p>
            <Team />
          </div>
        </section>
        {/* section 10 */}
        <section id="trial-signup" className="section bg-[#F2EAFF]">
          <div className="container w-screen min-h-screen px-10">
            <p className="title">Đăng Ký Dùng Thử</p>
            <TrialSignup />
          </div>
        </section>
        {/* section 11 */}
        {/* <section id="section">
          <div className="container">
            <JoinUs />
          </div>
        </section> */}
       </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
