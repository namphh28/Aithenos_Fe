import { NavHeader } from "./_components/nav-header";
import Footer from "./_components/footer";
import { Helmet } from 'react-helmet';
import './landingpage.css';

export default function Homepage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header */}
      <NavHeader />

      <Helmet>
        <title>Aithenos - Hệ Sinh Thái Giáo Dục Số Hóa</title>
        <meta name="description" content="Trải nghiệm tự học cá nhân hóa và mạnh mẽ với Aithenos – hệ sinh thái giáo dục số hóa tiên tiến ứng dụng AI." />
      </Helmet>

      <div className="landingpage-landingpage">
        {/* Section 1 */}
        <div className="landingpage-section1">
          <div className="landingpage-title">
            <div className="landingpage-frame11">
              <span className="landingpage-text62">
                <span className="landingpage-text63">
                  Bứt phá học tập cùng
                  <span dangerouslySetInnerHTML={{ __html: ' ' }} />
                </span>
                <span className="landingpage-text-aithenos">Aithenos</span>
              </span>
              <img
                src="/external/vector2524-7sz.svg"
                alt="Decorative vector graphic"
                className="landingpage-vector12"
                loading="lazy"
              />
            </div>
            <span className="landingpage-text65">
              Trải nghiệm tự học cá nhân hóa và mạnh mẽ với AI tiên tiến
            </span>
            <span className="landingpage-text66">
              Đừng lo học hành chậm chạp, Aithenos giúp tiết kiệm thời gian, học nhanh, đỗ cao – thử ngay!
            </span>
            <div className="landingpage-frame19">
              <div className="landingpage-frame18">
                <span className="landingpage-text67">Đăng ký dùng thử miễn phí</span>
                <div className="landingpage-arrow5">
                  <img
                    src="/external/arrowuprightsvgrepocom1i252-tvep.svg"
                    alt="Arrow pointing up-right"
                    className="landingpage-arrowuprightsvgrepocom15"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="landingpage-frame17">
                <div className="landingpage-frame14">
                  <img
                    src="/external/ellipse1i252-fvha-200h.png"
                    alt="Ellipse decorative icon"
                    className="landingpage-ellipse12"
                    loading="lazy"
                  />
                  <img
                    src="/external/polygon2i252-2as8.svg"
                    alt="Polygon play button"
                    className="landingpage-polygon22"
                    loading="lazy"
                  />
                </div>
                <span className="landingpage-text68">Xem demo ngay</span>
              </div>
            </div>
          </div>
          <div className="landingpage-frame20">
            <img
              src="/external/ellipse1192525-pmyn-200h.png"
              alt="Ellipse background"
              className="landingpage-ellipse1191"
              loading="lazy"
            />
            <div className="landingpage-maskgroup1">
              <img
                src="/external/ellipse1192525-4crb-200h.png"
                alt="Ellipse overlay"
                className="landingpage-ellipse1192"
                loading="lazy"
              />
              <img
                src="/external/image152525-ttmd-200h.png"
                alt="Illustration of Aithenos feature"
                className="landingpage-image15"
                loading="lazy"
              />
            </div>
          </div>
          <div className="landingpage-frame21">
            <img
              src="/external/abstractlinewavy2streamlinebeveledscribbles2525-v64.svg"
              alt="Abstract wavy line decoration"
              className="landingpage-abstract-line-wavy2-streamline-beveled-scribbles3"
              loading="lazy"
            />
            <div className="landingpage-maskgroup2">
              <img
                src="/external/image162527-zebm-300w.png"
                alt="Illustration of Aithenos platform"
                className="landingpage-image16"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="landingpage-section2">
          <div className="landingpage-frame22">
            <span className="landingpage-text10">
              <span className="landingpage-text11">
                Khám Phá
                <span dangerouslySetInnerHTML={{ __html: ' ' }} />
              </span>
              <span className="landingpage-text-aithenos-gold">Aithenos</span>
            </span>
            <span className="landingpage-text13">
              Aithenos là hệ sinh thái giáo dục số hóa tiên phong, ứng dụng AI để chuyển hóa giáo án, tạo lộ trình học tập cá nhân hóa, và cung cấp công cụ tương tác thông minh.
            </span>
            <span className="landingpage-text14">
              Dựa trên 4 sứ mệnh: chuyển hóa nội dung giáo dục, tăng cường học tập tự định hướng, khuyến khích đổi mới sáng tạo, và kết nối giáo viên với công nghệ.
            </span>
          </div>
          <img
            src="/external/highlight052530-8ari.svg"
            alt="Highlight decoration"
            className="landingpage-highlight051"
            loading="lazy"
          />
        </div>

        {/* Section 3 */}
        <div className="landingpage-section3">
          <span className="landingpage-text15">
            <span className="landingpage-text16">Sứ mệnh của</span>
            <span className="landingpage-text17">
              <span dangerouslySetInnerHTML={{ __html: ' ' }} />
            </span>
            <span>chúng tôi</span>
          </span>
          <div className="landingpage-frame31">
            <div className="landingpage-frame2710">
              <div className="landingpage-frame2711">
                <div className="landingpage-icon1">
                  <img
                    src="/external/discountsvgrepocom2i588-dfoj.svg"
                    alt="Discount icon background"
                    className="landingpage-discountsvgrepocom21"
                    loading="lazy"
                  />
                  <img src="/external/frame1i588-fmwl.svg" alt="Frame decoration" className="landingpage-frame12" loading="lazy" />
                  <img src="/external/frame27i588-d0bh.svg" alt="Frame overlay" className="landingpage-frame2712" loading="lazy" />
                </div>
                <span className="landingpage-text19">Chuyển Hóa Giáo Dục</span>
                <span className="landingpage-text20">
                  Biến tài liệu truyền thống thành nội dung số tương tác
                </span>
              </div>
            </div>
            <div className="landingpage-frame30">
              <div className="landingpage-frame2713">
                <div className="landingpage-icon2">
                  <img
                    src="/external/discountsvgrepocom25888-siql.svg"
                    alt="Discount icon background"
                    className="landingpage-discountsvgrepocom22"
                    loading="lazy"
                  />
                  <img src="/external/frame15889-h8sn.svg" alt="Frame decoration" className="landingpage-frame13" loading="lazy" />
                  <img src="/external/artificialintelligencebrainsvgrepocom15890-c9ro.svg" alt="AI brain icon" className="landingpage-artificialintelligencebrainsvgrepocom1" loading="lazy" />
                </div>
                <span className="landingpage-text21">Tự Học Tự Chủ</span>
                <span className="landingpage-text22">
                  Cung cấp lộ trình học cá nhân hóa với AI
                </span>
              </div>
            </div>
            <div className="landingpage-frame29">
              <div className="landingpage-frame2715">
                <div className="landingpage-icon3">
                  <img
                    src="/external/discountsvgrepocom25891-m6ls.svg"
                    alt="Discount icon background"
                    className="landingpage-discountsvgrepocom23"
                    loading="lazy"
                  />
                  <img src="/external/frame15891-9pm8.svg" alt="Frame decoration" className="landingpage-frame15" loading="lazy" />
                  <img src="/external/lightbulbsvgrepocom15892-p9m3.svg" alt="Lightbulb icon" className="landingpage-lightbulbsvgrepocom1" loading="lazy" />
                </div>
                <span className="landingpage-text23">Đổi Mới Sáng Tạo</span>
                <span className="landingpage-text24">
                  Thúc đẩy kỹ năng sáng tạo và giải quyết vấn đề
                </span>
              </div>
            </div>
            <div className="landingpage-frame28">
              <div className="landingpage-frame2717">
                <div className="landingpage-icon4">
                  <img
                    src="/external/discountsvgrepocom25893-n71.svg"
                    alt="Discount icon background"
                    className="landingpage-discountsvgrepocom24"
                    loading="lazy"
                  />
                  <img src="/external/frame15893-ha7b.svg" alt="Frame decoration" className="landingpage-frame16" loading="lazy" />
                  <img src="/external/teachersvgrepocom15894-ezw4.svg" alt="Teacher icon" className="landingpage-teachersvgrepocom1" loading="lazy" />
                </div>
                <span className="landingpage-text25">Kết Nối Công Nghệ</span>
                <span className="landingpage-text26">
                  Hỗ trợ giáo viên tích hợp công nghệ dễ dàng
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Frame 44 */}
        <div className="landingpage-frame44">
          <div className="landingpage-title-wrapper">
            <span className="landingpage-text27">
              <span className="landingpage-text28">Hệ Sinh Thái Giáo Dục</span>
              <span className="landingpage-text-gold"> Toàn Diện</span>
            </span>
          </div>
          <div className="landingpage-frame44-content">
            <div className="landingpage-img">
              <img src="/external/rectangle82i581-del7-200h.png" alt="Background rectangle" className="landingpage-rectangle82" loading="lazy" />
              <img src="/external/rectangle83i581-4l8-200h.png" alt="Background rectangle" className="landingpage-rectangle83" loading="lazy" />
              <img src="/external/rectangle84i581-2p8l-200h.png" alt="Background rectangle" className="landingpage-rectangle84" loading="lazy" />
              <img src="/external/abstractlinewavy2streamlinebeveledscribblesi581-uzbk.svg" alt="Abstract wavy line" className="landingpage-abstract-line-wavy2-streamline-beveled-scribbles1" loading="lazy" />
              <img src="/external/image18i581-qt3-200w.png" alt="Feature illustration" className="landingpage-image18" loading="lazy" />
              <img src="/external/discountsvgrepocom2i581-kh3n.svg" alt="Discount icon" className="landingpage-discountsvgrepocom25" loading="lazy" />
              <img src="/external/highlightquoteleftstreamlinebeveledscribblesi581-aqf.svg" alt="Highlight quote" className="landingpage-highlight-quote-left-streamline-beveled-scribbles" loading="lazy" />
              <img src="/external/image17i581-72el-300h.png" alt="Feature illustration" className="landingpage-image17" loading="lazy" />
              <img src="/external/image19i581-anjq-200w.png" alt="Feature illustration" className="landingpage-image19" loading="lazy" />
            </div>
            <div className="landingpage-frame43">
              <div className="landingpage-frame38">
                <div className="landingpage-frame34">
                  <img src="/external/ellipse245815-hk4q-200h.png" alt="Ellipse icon" className="landingpage-ellipse241" loading="lazy" />
                  <div className="landingpage-group721">
                    <img src="/external/rectangle515815-u43g-200h.png" alt="Rectangle decoration" className="landingpage-rectangle511" loading="lazy" />
                    <img src="/external/rectangle535815-x3t-200h.png" alt="Rectangle decoration" className="landingpage-rectangle531" loading="lazy" />
                    <img src="/external/rectangle525815-bl98-200h.png" alt="Rectangle decoration" className="landingpage-rectangle521" loading="lazy" />
                    <img src="/external/rectangle545815-kw6b-200h.png" alt="Rectangle decoration" className="landingpage-rectangle541" loading="lazy" />
                  </div>
                </div>
                <div className="landingpage-frame37">
                  <span className="landingpage-text30">Tech</span>
                  <span className="landingpage-text31">Công nghệ AI tiên tiến</span>
                </div>
              </div>
              <div className="landingpage-frame40">
                <div className="landingpage-frame35">
                  <img src="/external/ellipse245815-9s6q-200h.png" alt="Ellipse icon" className="landingpage-ellipse242" loading="lazy" />
                  <div className="landingpage-group722">
                    <img src="/external/rectangle515815-lo9i-200h.png" alt="Rectangle decoration" className="landingpage-rectangle512" loading="lazy" />
                    <img src="/external/rectangle535815-h5k-200h.png" alt="Rectangle decoration" className="landingpage-rectangle532" loading="lazy" />
                    <img src="/external/rectangle525815-74vv-200h.png" alt="Rectangle decoration" className="landingpage-rectangle522" loading="lazy" />
                    <img src="/external/rectangle545815-2i8k-200h.png" alt="Rectangle decoration" className="landingpage-rectangle542" loading="lazy" />
                  </div>
                </div>
                <div className="landingpage-frame39">
                  <span className="landingpage-text32">Edu Device</span>
                  <span className="landingpage-text33">Thiết bị giáo dục thông minh</span>
                </div>
              </div>
              <div className="landingpage-frame42">
                <div className="landingpage-frame36">
                  <img src="/external/ellipse245815-gjd9-200h.png" alt="Ellipse icon" className="landingpage-ellipse243" loading="lazy" />
                  <div className="landingpage-group723">
                    <img src="/external/rectangle515815-xb3-200h.png" alt="Rectangle decoration" className="landingpage-rectangle513" loading="lazy" />
                    <img src="/external/rectangle535815-a9kb-200h.png" alt="Rectangle decoration" className="landingpage-rectangle533" loading="lazy" />
                    <img src="/external/rectangle525815-j3st-200h.png" alt="Rectangle decoration" className="landingpage-rectangle523" loading="lazy" />
                    <img src="/external/rectangle545815-jxd9-200h.png" alt="Rectangle decoration" className="landingpage-rectangle543" loading="lazy" />
                  </div>
                </div>
                <div className="landingpage-frame41">
                  <span className="landingpage-text34">Web App</span>
                  <span className="landingpage-text35">Ứng dụng web hiện đại</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Frame 48 */}
        <div className="landingpage-frame48">
          <span className="landingpage-text36">
            <span className="landingpage-text37">Các Tính Năng</span>
            <span> Cốt Lõi</span>
          </span>
          <div className="landingpage-frame47">
            <div className="landingpage-fearture1">
              <img
                src="/external/rectangle855815-yroj-300h.png"
                alt="Feature image"
                className="landingpage-rectangle851"
                loading="lazy"
              />
              <div className="landingpage-frame461">
                <span className="landingpage-text39">Số Hóa Giáo Án</span>
                <span className="landingpage-text40">
                  Chuyển đổi giáo án thành nội dung số hóa tương tác
                </span>
                <div className="landingpage-frame451">
                  <span className="landingpage-text41">Learn more</span>
                  <div className="landingpage-arrow1">
                    <img
                      src="/external/arrowuprightsvgrepocom15815-hlff.svg"
                      alt="Arrow pointing up-right"
                      className="landingpage-arrowuprightsvgrepocom11"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="landingpage-fearture2">
              <img
                src="/external/rectangle855816-eson-300h.png"
                alt="Feature image"
                className="landingpage-rectangle852"
                loading="lazy"
              />
              <div className="landingpage-frame462">
                <span className="landingpage-text42">Lộ Trình Cá Nhân</span>
                <span className="landingpage-text43">
                  Tạo lộ trình học tập thông minh phù hợp từng học sinh
                </span>
                <div className="landingpage-frame452">
                  <span className="landingpage-text44">Learn more</span>
                  <div className="landingpage-arrow2">
                    <img
                      src="/external/arrowuprightsvgrepocom15816-9f5.svg"
                      alt="Arrow pointing up-right"
                      className="landingpage-arrowuprightsvgrepocom12"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="landingpage-fearture3">
              <img
                src="/external/rectangle855816-je3i-300h.png"
                alt="Feature image"
                className="landingpage-rectangle853"
                loading="lazy"
              />
              <div className="landingpage-frame463">
                <span className="landingpage-text45">Theo Dõi Tiến Độ</span>
                <span className="landingpage-text46">
                  Dashboard trực quan theo dõi tiến độ học tập
                </span>
                <div className="landingpage-frame453">
                  <span className="landingpage-text47">Learn more</span>
                  <div className="landingpage-arrow3">
                    <img
                      src="/external/arrowuprightsvgrepocom15816-xhxd.svg"
                      alt="Arrow pointing up-right"
                      className="landingpage-arrowuprightsvgrepocom13"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Frame 49 */}
        <div className="landingpage-frame49">
          <span className="landingpage-text48">
            <span className="landingpage-text49">Các Câu Chuyện</span>
            <span> Thành Công</span>
          </span>
          <div className="landingpage-frame49-content">
            <div className="landingpage-mask-group">
              <img
                src="/external/smilingwomanwithafroposingpinksweater15817-jnz8-600w.png"
                alt="Smiling woman in pink sweater"
                className="landingpage-smilingwomanwithafroposingpinksweater1"
                loading="lazy"
              />
            </div>
            <div className="landingpage-group5394">
              <img
                src="/external/rectangle285817-c73n-600w.png"
                alt="Background rectangle"
                className="landingpage-rectangle28"
                loading="lazy"
              />
              <img
                src="/external/rectangle305817-xrph-200w.png"
                alt="Decorative rectangle"
                className="landingpage-rectangle30"
                loading="lazy"
              />
              <span className="landingpage-text51">
                <span>"Aithenos giúp tôi quản lý lớp học dễ dàng hơn."</span>
              </span>
              <span className="landingpage-text54">Giáo Viên</span>
              <span className="landingpage-text55">Nguyễn Văn A</span>
              <span className="landingpage-text56">12 reviews at Yelp</span>
              <div className="landingpage-group29">
                <img
                  src="/external/star15817-ukn1g.svg"
                  alt="Star rating"
                  className="landingpage-star1"
                  loading="lazy"
                />
                <img
                  src="/external/star25817-uidh.svg"
                  alt="Star rating"
                  className="landingpage-star2"
                  loading="lazy"
                />
                <img
                  src="/external/star35817-ylun.svg"
                  alt="Star rating"
                  className="landingpage-star3"
                  loading="lazy"
                />
                <img
                  src="/external/star45817-ep88.svg"
                  alt="Star rating"
                  className="landingpage-star4"
                  loading="lazy"
                />
                <img
                  src="/external/star55817-l25d.svg"
                  alt="Star rating"
                  className="landingpage-star5"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Frame 52 */}
        <div className="landingpage-frame52">
          <div className="landingpage-frame51">
            <div className="landingpage-group17">
              <img
                src="/external/confidentteacherexplaininglessonpupils15814-8vts-600w.png"
                alt="Teacher explaining lesson"
                className="landingpage-confidentteacherexplaininglessonpupils1"
                loading="lazy"
              />
              <div className="landingpage-playbutton">
                <img
                  src="/external/ellipse15814-2x8h-200w.png"
                  alt="Play button circle"
                  className="landingpage-ellipse11"
                  loading="lazy"
                />
                <img
                  src="/external/polygon25814-n5ec.svg"
                  alt="Play button triangle"
                  className="landingpage-polygon21"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="landingpage-frame50">
            <span className="landingpage-text57">
              <span className="landingpage-text58">Tham Gia Cùng Aithenos</span>
              <span> Ngay Hôm Nay</span>
            </span>
            <span className="landingpage-text60">
              Đăng ký để trải nghiệm học tập cá nhân hóa với AI!
            </span>
            <div className="landingpage-frame2719">
              <span className="landingpage-text61">Đăng ký dùng thử miễn phí</span>
              <div className="landingpage-arrow4">
                <img
                  src="/external/arrowuprightsvgrepocom1i581-15qc.svg"
                  alt="Arrow pointing up-right"
                  className="landingpage-arrowuprightsvgrepocom14"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}