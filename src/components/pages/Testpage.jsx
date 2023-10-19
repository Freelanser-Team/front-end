import React from "react";
import logo from "../../assets/images/logo.png";
import "../../styles/Testpage.css";
import { NavLink } from "react-router-dom";
export function Testpage() {
  return (
    <div>
      <header>
        <div className="container">
          <div className="row mb-5 ">
            <div className="col-md-6 content mb-5 align-self-center">
              <div>
                <h2>يوم الهمة</h2>
                <h4>الصفحة التجريبية</h4>
              </div>
            </div>
            <div className="col-md-6 image">
              <img src={logo} alt="logo" className=" w-100" />
            </div>
          </div>
        </div>
      </header>
      <section className="links-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-5 text-center showBtn">
              <button className="w-75">
                <a href="https://docs.google.com/spreadsheets/d/1WukkiwLfMlsOv32tva0zBFE9PqtRkMEdmcgdcvtom-8/edit?usp=drive_web&ouid=111577617897802435149">
                  ملف الاشراف
                </a>
              </button>
            </div>
            <div className="col-md-6 mb-5 text-center showBtn">
              <button className="w-75">
                <a href="https://docs.google.com/spreadsheets/d/10y3hDb4pO2wyvLA54zNGOd9epwKORHt8ATP_MOhgbBM/edit">
                  ملف الحلقات
                </a>
              </button>
            </div>
            <div className="col-md-6 text-center showBtn">
              <button className="w-75">
                <NavLink to="/QuraanDay"> عرض الجولات (طولي) </NavLink>
              </button>
            </div>
            <div className="col-md-6 text-center">
              <button className="w-75">عرض الشاشات (افقي)</button>
            </div>
          </div>
        </div>
      </section>
      <div className="btns text-center mt-5 pb-5">
        <button className="firstBtn">شروحات البرنامج</button>
        <button className="secondBtn">الصفحة التجريبيه</button>
      </div>
    </div>
  );
}
