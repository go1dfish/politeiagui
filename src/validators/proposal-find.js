import { isRequiredValidator } from "./util";

const validate = values => {
  const errors = {};
  if (!isRequiredValidator(values.censorship)) {
    errors.global = "Please enter a censorship token";
  }

  return errors;
};

export default validate;
