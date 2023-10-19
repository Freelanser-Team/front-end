import React from "react";
import { Statistics } from "../../components";
import "../../styles/QuraanDay.css";
export function QuraanDay() {
  return (
    <div className="container mt-5">
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            className="nav-link active"
            id="nav-home-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-home"
            type="button"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            الرئيسية
          </button>
          <button
            className="nav-link"
            id="nav-profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-profile"
            type="button"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
          >
            المشاركون
          </button>
        </div>
      </nav>
      <div className="tab-content mt-5" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
          tabIndex="0"
        >
          <h2>اليوم القراني</h2>
          <p>الصفحة التجربيية</p>
          <div className="row">
            <div className="col col-xs-6 col-md-4 mb-4">
              <div className="card p-3 text-center">
                <h4>عدد المعلمين</h4>
                <p>4</p>
              </div>
            </div>
            <div className="col col-xs-6 col-md-4 mb-4">
              <div className="card p-3 text-center">
                <h4>عدد المعلمين</h4>
                <p>4</p>
              </div>
            </div>
            <div className="col col-xs-6 col-md-4 mb-4">
              <div className="card p-3 text-center">
                <h4>عدد المعلمين</h4>
                <p>4</p>
              </div>
            </div>
            <div className="col col-xs-6 col-md-4 mb-4">
              <div className="card p-3 text-center">
                <h4>عدد المعلمين</h4>
                <p>4</p>
              </div>
            </div>
            <div className="col col-xs-6 col-md-4 mb-4">
              <div className="card p-3 text-center">
                <h4>عدد المعلمين</h4>
                <p>4</p>
              </div>
            </div>
            <div className="col col-xs-6 col-md-4 mb-4">
              <div className="card p-3 text-center">
                <h4>عدد المعلمين</h4>
                <p>4</p>
              </div>
            </div>
            <div className="col col-xs-6 col-md-4 mb-4">
              <div className="card p-3 text-center">
                <h4>عدد المعلمين</h4>
                <p>4</p>
              </div>
            </div>
            <div className="col col-xs-6 col-md-4 mb-4">
              <div className="card p-3 text-center">
                <h4>عدد المعلمين</h4>
                <p>4</p>
              </div>
            </div>
            <div className="col col-xs-6 col-md-4 mb-4">
              <div className="card p-3 text-center">
                <h4>عدد المعلمين</h4>
                <p>4</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
          tabIndex="0"
        >
          <div className="border p-4">
            <div className="row">
              <div className="col-12 col-sm-6 mb-3">
                <div className="input-field">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="arrowDown w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                    />
                  </svg>

                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="ringName"
                  >
                    <option selected hidden>
                      الحلقات
                    </option>
                    <option value="./excel/1-20.xlsx">الحلفة 1 - 20</option>
                    <option value="./excel/21-40.xlsx">الحلفة 21 - 40</option>
                    <option value="./excel/41-60.xlsx">الحلفة 41 - 60</option>
                  </select>
                </div>
              </div>
              <div className="col-12 col-sm-6 mb-3">
                <div className="input-field">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="arrowDown w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                    />
                  </svg>

                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>اسم المعلم</option>
                    <option value="1">احمد</option>
                    <option value="2">محمد</option>
                    <option value="3">ابراهيم</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="table-responsive">
              <table
                className="table table-borderless mt-5"
                id="excelDataTable"
              ></table>
            </div>
            <h4 className="lastPage">
              <a href="testPage.html">الصفحه السابقة</a>
            </h4>
          </div>
        </div>
      </div>
      <Statistics />
    </div>
  );
}
