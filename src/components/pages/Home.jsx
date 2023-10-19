import React from "react";
import imgLogo from "../../assets/images/ic_Home_logo.png";
import "../../styles/Home.css";
export function Home() {
  return (
    <div className="home">
      <header>
        <div className="container">
          <div className="main-content mb-5 text-center">
            <h2>يوم الهمة</h2>
            <h4 className="my-5">موقع تفاعلي ليوم قرآني مميز</h4>
            <p>
              يخدم موقع "يوم الهمة" حلقات تحفيظ القرآن الكريم، لأولئك الذين
              يرغبون في قضاء يوم مميز مع القرآن.
            </p>
          </div>

          <div className="btns text-center">
            <button className="btn btn-primary m-2 text-center">
              تجربة الخدمة
            </button>
            <button className=" btn bg-light border   m-2 text-center">
              الصفحة التجريبية
            </button>
          </div>
          <div className="mt-5 text-center">
            <img src={imgLogo} alt="صورة" className="header-image" />
          </div>
        </div>
      </header>

      <section className="video">
        <div className="container homeContainer">
          <iframe
            width="100%"
            height="550px"
            jsname="L5Fo6c"
            className="YMEQtf"
            sandbox="allow-scripts allow-popups allow-forms allow-same-origin allow-popups-to-escape-sandbox allow-downloads allow-modals"
            frameborder="0"
            title="YouTube Video: برنامج يوم الهمة لحلقات التحفيظ"
            src="https://www.youtube.com/embed/9RJyYDS3NAg"
            allowfullscreen=""
          ></iframe>
          <div className=" text-center mt-5">
            <button className="btn btn-primary m-2">شروحات البرنامج</button>
            <button className="btn btn-light m-2">الصفحة التجريبيه</button>
          </div>
        </div>
      </section>
    </div>
  );
}
