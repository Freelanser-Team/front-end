import React from "react";
import "../../styles/Register.css";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
export function Register() {
  const initialValues = { Name: "", Email: "", Password: "" };
  const onSubmit = (values) => {
    return values;
  };

  const validate = (values) => {
    const errors = {};
    // name validation
    if (!values.Name) {
      errors.Name = "* هذا الحقل مطلوب ادخاله";
    } else if (values.Name.length < 3) {
      errors.Name = "* من فضلك قم بادخال اسم صحيح على الاقل ثلاثة أحرف";
    } else if (values.Name.length > 8) {
      errors.Name = "*  من فضلك قم بادخال اسم صحيح اقل من 8 أحرف";
    }

    // Email validation
    if (!values.Email) {
      errors.Email = "* هذا الحقل مطلوب ادخاله";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)
    ) {
      errors.Email = " * قم بادخال بريد الكترونى صحيح";
    }
    // password validation
    if (!values.Password) {
      errors.Password = "* هذا الحقل مطلوب ادخاله";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,30}$/i.test(values.Password)
    ) {
      errors.Password = "*  قم بادخال كلمة مرور صحيحة ";
    }

    return errors;
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
                value={formik.values.Name}
                onBlur={formik.handleBlur}
                name="Name"
              />
              {formik.touched.Name && formik.errors.Name ? (
                <p className="text-danger fw-bold my-2">{formik.errors.Name}</p>
              ) : null}
              <label className="mb-3 fw-bold" htmlFor="email">
                عنوان البريد الإلكتروني
              </label>
              <input
                id="email"
                type="email"
                className="form-control mb-3"
                onChange={formik.handleChange}
                value={formik.values.Email}
                onBlur={formik.handleBlur}
                name="Email"
              />
              {formik.touched.Email && formik.errors.Email ? (
                <p className="text-danger fw-bold my-2">
                  {formik.errors.Email}
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
                value={formik.values.Password}
                onBlur={formik.handleBlur}
                name="Password"
              />
              {formik.touched.Password && formik.errors.Password ? (
                <p className="text-danger fw-bold my-2">
                  {formik.errors.Password}
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
    </div>
  );
}
