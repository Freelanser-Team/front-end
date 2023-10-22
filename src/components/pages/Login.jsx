import { useFormik } from "formik";
import React from "react";
import { NavLink } from "react-router-dom";
import { initialValues, validate } from "../validation/loginValidation";

import "../../styles/Login.css";
import ApiService from "../../server/ApiService";
import { SIGN_IN } from "../../server/Constants";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Login() {
  const notify = (message, type) =>
    toast(message, {
      position: "top-right",
    });

  const onSubmit = (values) => {
    console.log("--------------->", values);
    const apiService = ApiService.getInstance();
    apiService
      .postData(SIGN_IN, values)
      .then((response) => {
        console.log("response--------------->", response?.data?.message);
        if (response?.data?.message === "success") {
          notify(response?.data?.message || "");
          localStorage.setItem("token", response.data.token);
        }
      })
      .catch((err) => {
        console.log("err--------------->", err);
      });
  };
  const formik = useFormik({ initialValues, onSubmit, validate });

  return (
    <div className="row gx-0 login">
      <div className="col-11 col-sm-8 col-md-6 col-lg-4 mx-auto">
        <div className="shadow-lg">
          <div className="bg-light p-5">
            <h1 className="fs-3 fw-bold mb-4">تسجيل الدخول</h1>
            <form action="POST" onSubmit={formik.handleSubmit}>
              <div>
                <label className="mb-3 fw-bold" htmlFor="email">
                  البريد الإلكتروني
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-control mb-3"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <p className="text-danger fw-bold     ">
                    {formik.errors.email}
                  </p>
                ) : null}
                <label className="mb-3" htmlFor="password">
                  كلمة المرور
                </label>
                <input
                  id="password"
                  type="password"
                  className="form-control mb-3"
                  name="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password ? (
                  <p className="text-danger fw-bold ">
                    {formik.errors.password}
                  </p>
                ) : null}
                <NavLink to="/forgot" className="mt-2">
                  هل نسيت كلمة المرور ؟
                </NavLink>
              </div>
              <button
                type="submit"
                className="d-block mx-auto mt-2 btn btn-primary"
              >
                تسجيل الدخول
              </button>
            </form>
          </div>
          <div className="card-footer py-3 border-0">
            <div className="text-center">
              ليس لديك حساب ؟
              <NavLink
                to="/register"
                className="me-1 text-danger fw-bold text-decoration-underline "
              >
                أنشئ حسابًا
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
