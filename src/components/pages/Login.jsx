import React from "react";

export function Login() {
  return (
    <section className="h-100">
      <div className="container h-100">
        <div className="row justify-content-sm-center h-100">
          <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
            <div className="card shadow-lg">
              <div className="card-body p-5">
                <h1 className="fs-4 card-title fw-bold mb-4">تسجيل الدخول</h1>
                <form
                  method="POST"
                  className="needs-validation"
                  novalidate=""
                  autocomplete="off"
                >
                  <div className="mb-3">
                    <label className="mb-2 text-muted" for="email">
                      عنوان البريد الإلكتروني
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="form-control"
                      name="email"
                      value=""
                      required
                      autofocus
                    />

                    <div className="invalid-feedback">
                      البريد الإلكتروني غير صالح
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="mb-2 w-100">
                      <label className="text-muted" for="password">
                        كلمة المرور
                      </label>
                      <a href="forgot.html" className="float-end">
                        نسيت كلمة المرور؟
                      </a>
                    </div>
                    <input
                      id="password"
                      type="password"
                      className="form-control"
                      name="password"
                      required
                    />
                    <div className="invalid-feedback">كلمة المرور مطلوبة</div>
                  </div>

                  <div className="d-flex align-items-center">
                    <button type="submit" className="btn btn-primary ms-auto">
                      تسجيل الدخول
                    </button>
                  </div>
                </form>
              </div>
              <div className="card-footer py-3 border-0">
                <div className="text-center">
                  ليس لديك حساب؟{" "}
                  <a href="register.html" className="text-dark">
                    أنشئ حسابًا
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
