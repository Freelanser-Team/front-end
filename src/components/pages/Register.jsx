import React from "react";
import "../../styles/Register.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { initialValues, validate } from "../validation/RegisterValidation";
import ApiService from "../../server/ApiService";
import { SIGN_UP } from "../../server/Constants";
import { ToastContainer, toast } from "react-toastify";

export function Register() {
  const navigate = useNavigate();
  const notify = (message) =>
    toast(message, {
      position: "top-right",
    });

  const onSubmit = (values) => {
    const apiServer = ApiService.getInstance();
    apiServer
      .postData(SIGN_UP, values)
      .then((response) => {
        console.log("response--------------->", response?.data?.message);
        if (response?.data?.message === "success") {
          notify("لقد تم تسجيل دخولك بنجاح");
          console.log(response.data);

          setTimeout(() => {
            navigate("/login");
          }, 3000);
        }
      })
      .catch((err) => {
        console.log("err--------------->", err);

        if (err.response.data.err === "Email Already Existed") {
          notify(
            "هذا البريد الإلكتروني مستخدم بالفعل - رجاءً أدخل بريدًا إلكترونيًا آخر"
          );
        }
      });
  };
  const formik = useFormik({ initialValues, onSubmit, validate });
  return (
    <div className="row gx-0 register ">
      <div className="col-11 col-sm-8 col-md-6 col-lg-4 mx-auto">
        <div className="card shadow-lg">
          <div className="card-body p-5">
            <h1 className="fs-3 fw-bold mb-4 text-center">التسجيل للمشرفين</h1>
            <form onSubmit={formik.handleSubmit}>
              <label className="mb-3 fw-bold" htmlFor="name">
                الاسم
              </label>
              <input
                id="name"
                type="text"
                className="form-control mb-3"
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
                name="name"
              />
              {formik.touched.name && formik.errors.name ? (
                <p className="text-danger fw-bold my-2">{formik.errors.name}</p>
              ) : null}
              <label className="mb-3 fw-bold" htmlFor="email">
                عنوان البريد الإلكتروني
              </label>
              <input
                id="email"
                type="email"
                className="form-control mb-3"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
                name="email"
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="text-danger fw-bold my-2">
                  {formik.errors.email}
                </p>
              ) : null}
              <label className="mb-3 fw-bold" htmlFor="password">
                كلمة المرور
              </label>
              <input
                id="password"
                type="password"
                className="form-control mb-3"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
                name="password"
              />
              {formik.touched.password && formik.errors.password ? (
                <p className="text-danger fw-bold my-2">
                  {formik.errors.password}
                </p>
              ) : null}
              <p className="mb-3">بالتسجيل، أنت توافق على شروطنا وأحكامنا.</p>

              <button type="submit" className="btn btn-primary d-block mx-auto">
                سجل
              </button>
            </form>
          </div>
          <div className="card-footer py-3 border-0 text-center">
            هل لديك حساب بالفعل؟
            <NavLink
              to="/login"
              className="text-dark text-decoration-underline  "
            >
              تسجيل الدخول
            </NavLink>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
