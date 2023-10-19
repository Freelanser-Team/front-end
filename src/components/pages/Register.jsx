import React from "react";

export function Register() {
  return (
    <section className="h-100">
      <div className="container h-100">
        <div className="row justify-content-sm-center h-100">
          <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
            <div className="card shadow-lg">
              <div className="card-body p-5">
                <h1 className="fs-4 card-title fw-bold mb-4">
                  {" "}
                  التسجيل للمشرفين
                </h1>
                <form
                  method="POST"
                  className="needs-validation"
                  novalidate=""
                  autocomplete="off"
                >
                  <div className="mb-3">
                    <label className="mb-2 text-muted" for="name">
                      الاسم
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="form-control"
                      name="name"
                      value=""
                      required
                      autofocus
                    />
                    <div className="invalid-feedback">الاسم مطلوب</div>
                  </div>

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
                    />
                    <div className="invalid-feedback">
                      البريد الإلكتروني غير صالح
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="mb-2 text-muted" for="password">
                      كلمة المرور
                    </label>
                    <input
                      id="password"
                      type="password"
                      className="form-control"
                      name="password"
                      required
                    />
                    <div className="invalid-feedback">كلمة المرور مطلوبة</div>
                  </div>

                  <p className="form-text text-muted mb-3">
                    بالتسجيل، أنت توافق على شروطنا وأحكامنا.
                  </p>

                  <div className="align-items-center d-flex">
                    <button type="submit" className="btn btn-primary ms-auto">
                      سجل
                    </button>
                  </div>
                </form>
              </div>
              <div className="card-footer py-3 border-0">
                <div className="text-center">
                  هل لديك حساب بالفعل؟{" "}
                  <a href="index.html" className="text-dark">
                    تسجيل الدخول
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
