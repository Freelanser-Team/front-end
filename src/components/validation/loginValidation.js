const initialValues = { email: "", password: "" };

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "* هذا الحقل مطلوب ادخاله";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = " * قم بادخال بريد الكترونى صحيح";
  }

  if (!values.password) {
    errors.password = "* هذا الحقل مطلوب ادخاله";
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,30}$/i.test(values.password)
  ) {
    errors.password = "*  قم بادخال كلمة مرور صحيحة ";
  }

  return errors;
};
export { initialValues, validate };
