import { useFormik } from "formik";
import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/Login.css";
export function Login() {
  const initialValues = { Email: "", Password: "" };
  const onSubmit = (values) => {
    return values;
  };
  const validate = (values) => {
    const errors = {};
    if (!values.Email) {
      errors.Email = "* هذا الحقل مطلوب ادخاله";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)
    ) {
      errors.Email = " * قم بادخال بريد الكترونى صحيح";
    }

    if (!values.Password) {
      errors.Password = "* هذا الحقل مطلوب ادخاله";
    } else if (values.Password.length < 8) {
      errors.Password = "* من فضلك قم بأدخال كلمة مرور صحيحة";
    }

    return errors;
  };
  const formik = useFormik({ initialValues, onSubmit, validate });
  return (
    <div className="row gx-0 login">
      <div className="col-11 col-sm-8 col-md-6 col-lg-4 mx-auto">
        <div className="shadow-lg">
          <div className="bg-light p-5">
            <h1 className="fs-3 fw-bold mb-4">تسجيل الدخول</h1>
            <form onSubmit={formik.handleSubmit}>
              <div>
                <label className="mb-3 fw-bold" htmlFor="email">
                  البريد الإلكتروني
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-control mb-3"
                  name="Email"
                  onChange={formik.handleChange}
                  value={formik.values.Email}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.Email && formik.errors.Email ? (
                  <p className="text-danger fw-bold     ">
                    {formik.errors.Email}
                  </p>
                ) : null}
                <label className="mb-3" htmlFor="password">
                  كلمة المرور
                </label>
                <input
                  id="password"
                  type="password"
                  className="form-control mb-3"
                  name="Password"
                  onChange={formik.handleChange}
                  value={formik.values.Password}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.Password && formik.errors.Password ? (
                  <p className="text-danger fw-bold ">
                    {formik.errors.Password}
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
    </div>
  );
}
