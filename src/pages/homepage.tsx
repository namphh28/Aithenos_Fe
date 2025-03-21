import {Header} from "./_components/Header";
import Footer from "./_components/footer";
import { Helmet } from 'react-helmet';
import {ButtonRegisterDefault, ButtonRegisterVariant1} from "../components/ui/buttonRegister";

//img
import picture1 from "../assets/picture1.png";
import picture2 from "../assets/picture2.svg";
import arrow from "../assets/Arrow_05.svg";
import highlight from "../assets/Vector.svg";
import { BsTriangleFill } from "react-icons/bs";


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
                <p className="text-6xl text-center font-semibold">Bứt phá học tập cùng </p>
                <div className="text-Aithenos md:mx-[25%] lg:mx-0">
                  <p className="mt-2 lg:mt-0">Aithenos</p>
                  <img src={highlight}/>
                </div>
              </div>
              <p className="text-center py-[2rem] text-3xl text-gray ">Trải nghiệm tự học cá nhân hóa và mạnh mẽ với AI tiên tiến</p>
              <p className="text-center text-color-1-500 text-xl pb-[2rem]">Đừng lo học hành chậm chạp, Aithenos giúp tiết kiệm thời gian, học nhanh, đỗ cao – thử ngay!</p>
              <div className="mt-[2rem] mx-[25%] lg:mx-0 md:flex items-center justify-center">
                <ButtonRegisterDefault />
                <ButtonRegisterVariant1 />
                <div className="max-w-[12rem] mb-[0rem] lg:mt-0  sm:ml-[2rem] flex items-center justify-center gap-2">
                <button className="w-15 h-15 bg-white border border-color-1-500 rounded-full">
                  <BsTriangleFill className="m-[1rem] rotate-90 text-color-1-500"/>
                </button>
                <p>Xem tính năng</p>
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
        <section id="section2">
          <div className="container">
            <div className="col-span-4 col-start-2 col-end-10 text-center">
            <p className="mx-auto my-[2rem] font-extrabold text-color-1-500 text-6xl">Khám Phá Aithenos </p>
            <div className="mx-[5%]">
              <div className="border rounded-xl border-solid bg-white border-color-1-500 p-[2rem] mt-[2rem]">
                <p>Aithenos là một hệ sinh thái tiên phong về giáo dục chuyển hóa, sử dụng sức mạnh của AI để mang đến trải nghiệm học tập đột phá cho giáo viên, học sinh, và phụ huynh tại Việt Nam. Với công nghệ tự học thông minh, lộ trình học thích ứng, và tốc độ tăng trưởng học tập vượt trội, chúng tôi giúp trẻ phát triển kỹ năng tự học, tích lũy các kỹ năng thiết yếu cho thế kỷ 21 như tư duy sáng tạo, giải quyết vấn đề, và kỹ năng số.</p>
              </div>
              <div className="border rounded-xl border-solid bg-white border-color-1-500 p-[2rem] mt-4">
                <p>Chúng tôi hướng tới việc trở thành hệ sinh thái giáo dục chuyển hóa tiên phong tại Việt Nam, nơi mọi học sinh và giáo viên có thể tiếp cận các công cụ AI tiên tiến để tự học linh hoạt, thích ứng với nhu cầu cá nhân, và tăng tốc tiến bộ học tập. Aithenos không chỉ định hình tương lai giáo dục mà còn phù hợp với chiến lược phát triển bền vững của Chính phủ Việt Nam.</p>
              </div>
            </div>
            </div>
          </div>
        </section>
        {/* section 3 */}
        <section id="section3">
          <div className="container">

          </div>
        </section>
        {/* section 4 */}
        <section id="section4">
          <div className="container">

          </div>
        </section>
        {/* section 5 */}
        <section id="section5">
          <div className="container">

          </div>
        </section>
        {/* section 6 */}
        <section id="section6">
          <div className="container">

          </div>
        </section>
        {/* section 7 - Loan code 7+8+9+10+11+footer */}
        <section id="section7">
          <div className="container">

          </div>
        </section>
        {/* section 8 */}
        <section id="section8">
          <div className="container">

          </div>
        </section>
        {/* section 9 */}
        <section id="section9">
          <div className="container">

          </div>
        </section>
        {/* section 10 */}
        <section id="section10">
          <div className="container">

          </div>
        </section>
        {/* section 11 */}
        <section id="section11">
          <div className="container">

          </div>
        </section>
       </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
