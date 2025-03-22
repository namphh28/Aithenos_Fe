import { Header } from "./_components/Header";
import Footer from "./_components/footer";
import { Helmet } from 'react-helmet';
import {ButtonRegisterDefault, ButtonRegisterVariant1} from "../components/ui/buttonRegister";
import { Text } from "./_components/text";
import Mission from "./_components/Mission";
import Ecosystem from "./_components/Ecosystem";
import Feature from "./_components/Feature";
import { CommentsList } from "./_components/Comments";
import { Stories } from "./_components/Stories";
import { Team } from "./_components/Team";
import TrialSignup from "./_components/TrialSignup";
import JoinUs from "./_components/JoinUs";

//img
import picture1 from "../assets/picture1.png";
import picture2 from "../assets/picture2.svg";
import arrow from "../assets/Arrow_05.svg";
import highlight from "../assets/Vector.svg";
import { BsTriangleFill } from "react-icons/bs";
import picture3 from "../assets/img.svg";

// import {motion} from "framer-motion";
import './landingpage.css';

export default function Homepage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header/>

      <Helmet>
        <title>Aithenos - Hệ Sinh Thái Giáo Dục Số Hóa</title>
        <meta name="description" content="Trải nghiệm tự học cá nhân hóa và mạnh mẽ với Aithenos – hệ sinh thái giáo dục số hóa tiên tiến ứng dụng AI." />
      </Helmet>
      {/* Main */}
       <main id="main">
        {/* section 1 */}
        <section id="hero-section" >
          <div className="grid-container">
            <div className="item1 hidden lg:block" >  
              <img src={picture1}/>            
            </div>
            <div className="item2">
              <div className=" xl:flex items-start pb-[2rem]">
                <h1 className="text-6xl text-center font-semibold">Bứt phá học tập cùng </h1>
                <div className="text-Aithenos lg:mx-0">
                  <h1 className="mt-2 lg:mt-0">Aithenos</h1>
                  <img src={highlight}/>
                </div>
              </div>
              <h3 className="text-center py-[2rem] text-3xl text-gray ">Trải nghiệm tự học cá nhân hóa và mạnh mẽ với AI tiên tiến</h3>
              <p className="text-center text-color-1-500 text-xl pb-[2rem]">Đừng lo học hành chậm chạp, Aithenos giúp tiết kiệm thời gian, học nhanh, đỗ cao – thử ngay!</p>
              <div className="ButtonRegister lg:mx-0 flex items-center justify-center">
                <ButtonRegisterDefault />
                <ButtonRegisterVariant1 />
                <div className="max-w-[12rem] mb-[0rem] lg:mt-0  sm:ml-[2rem] flex items-center justify-center gap-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:opacity-75">
                <button className="w-15 h-15 bg-white border border-color-1-500 rounded-full ">
                  <BsTriangleFill className="m-[1rem] rotate-90 text-color-1-500 "/>
                </button>
                <p className="hidden sm:block">Xem tính năng</p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block"> 
              <img src={picture2} className="my-[4rem]" />
              <img src={arrow} />
            </div>
          </div>
        </section>
        {/* section 2 */}
        <section id="section">
          <div className="container">
            <h2 className="title">Khám Phá Aithenos </h2>
            <div className="mx-[5%]">
              <div className="border rounded-xl border-solid bg-white border-color-1-500 p-[2rem] mt-[2rem]">
                <p>Aithenos là một hệ sinh thái tiên phong về giáo dục chuyển hóa, sử dụng sức mạnh của AI để mang đến trải nghiệm học tập đột phá cho giáo viên, học sinh, và phụ huynh tại Việt Nam. Với công nghệ tự học thông minh, lộ trình học thích ứng, và tốc độ tăng trưởng học tập vượt trội, chúng tôi giúp trẻ phát triển kỹ năng tự học, tích lũy các kỹ năng thiết yếu cho thế kỷ 21 như tư duy sáng tạo, giải quyết vấn đề, và kỹ năng số.</p>
              </div>
              <div className="border rounded-xl border-solid bg-white border-color-1-500 p-[2rem] mt-4">
                <p>Chúng tôi hướng tới việc trở thành hệ sinh thái giáo dục chuyển hóa tiên phong tại Việt Nam, nơi mọi học sinh và giáo viên có thể tiếp cận các công cụ AI tiên tiến để tự học linh hoạt, thích ứng với nhu cầu cá nhân, và tăng tốc tiến bộ học tập. Aithenos không chỉ định hình tương lai giáo dục mà còn phù hợp với chiến lược phát triển bền vững của Chính phủ Việt Nam.</p>
              </div>
            </div>
          </div>
        </section>
        {/* section 3 */}
        <section id="section">
          <div className="container">
            <h2 className="title">Thông Tư Từ Chính Phủ Việt Nam</h2>
            <div className="flex items-center justify-around">
            <Text />
            <img src={picture3} alt="img" className="hidden lg:block"/>
            </div>
          </div>
        </section>
        {/* section 4 */}
        <section id="section">
          <div className="container">
            <p className="title">Sứ Mệnh Của Chúng Tôi</p>
            <Mission />
          </div>
        </section>
        {/* section 5 */}
        <section id="section">
          <div className="container">
            <h2 className="title">Hệ Sinh Thái Giáo Dục Toàn Diện</h2>
            <Ecosystem />
          </div>
        </section>
        {/* section 6 */}
        <section id="section">
          <div className="container">
          <h2 className="title">Các Tính Năng Cốt Lõi</h2>
          <Feature />
          </div>
        </section>
        {/* section 7 - Loan code 7+8+9+10+11+footer */}
        <section id="section">
          <div className="container">
            <p className="title">Trải nghiệm Thực Tế Từ Người Dùng</p>
            <CommentsList />
          </div>
        </section>
        {/* section 8 */}
        <section id="section">
          <div className="container">
            <p className="title">Câu Chuyện Thành Công</p>
            <Stories />
          </div>
        </section>
        {/* section 9 */}
        <section id="section">
          <div className="container">
            <p className="title">Hội Đồng Cố Vấn</p>
            <Team />
          </div>
        </section>
        {/* section 10 */}
        <section id="section">
          <div className="container bg-[#F2EAFF] w-screen min-h-screen p-10">
            <p className="title">Đăng Ký Dùng Thử</p>
            <TrialSignup />
          </div>
        </section>
        {/* section 11 */}
        <section id="section">
          <div className="container">
            <JoinUs />
          </div>
        </section>
       </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
