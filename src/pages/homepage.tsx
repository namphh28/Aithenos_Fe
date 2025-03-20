import {Header} from "./_components/Header";
import Footer from "./_components/footer";
import { Helmet } from 'react-helmet';
import ButtonRegister from "../components/ui/buttonRegister";

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
            <div className="item1" >  
              <img src={picture1}/>            
            </div>
            <div className="item2">
              <div className=" xl:flex items-start pb-[2rem]">
                <p className="text-6xl text-center">Bứt phá học tập cùng </p>
                <div className="text-Aithenos">
                  <p>Aithenos</p>
                  <img src={highlight}/>
                </div>
              </div>
              <p className="text-center py-[2rem] text-3xl text-custom-gray-primary ">Trải nghiệm tự học cá nhân hóa và mạnh mẽ với AI tiên tiến</p>
              <p className="text-center text-color-1-500 text-xl pb-[2rem]">Đừng lo học hành chậm chạp, Aithenos giúp tiết kiệm thời gian, học nhanh, đỗ cao – thử ngay!</p>
              <div className="mt-[2rem] flex items-center justify-center">
                <ButtonRegister />
                <div className="max-w-[12rem] ml-[2rem] flex items-center justify-center gap-2">
                <button className="w-15 h-15 bg-white border border-color-1-500 rounded-full">
                  <BsTriangleFill className="m-[1rem] rotate-90 text-color-1-500"/>
                </button>
                <p>Xem tính năng</p>
                </div>
              </div>
            </div>
            <div> 
              <img src={picture2} className="my-[4rem]" />
              <img src={arrow} />
            </div>
          </div>
        </section>
        {/* section 2 */}
        <section id="section2">
          <div className="container">

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
