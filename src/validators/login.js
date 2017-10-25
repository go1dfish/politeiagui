import { emailValidator, isRequiredValidator } from "./util";

const validate = values => {
  const errors = {};

  if (!isRequiredValidator(values.email) || !isRequiredValidator(values.password)) {
    errors.global = "All fields are required";
  }

  if (!emailValidator(values.email)) {
    errors.global = "Invalid email address";
  }

  return errors;
};

export default validate;
