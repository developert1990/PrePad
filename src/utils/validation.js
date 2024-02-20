export const validate = (values) => {
  const errors = {};

  errors.firstName = validateFirstName(values);
  errors.lastName = validateLastName(values);
  errors.email = validateEmail(values);

  if (!errors.firstName && !errors.lastName && !errors.email) {
    return {};
  }
  return errors;
};

const validateFirstName = (values) => {
  if (!values.firstName) {
    return "Required";
  } else if (values.firstName.length < 3 || values.firstName.length > 25) {
    return "This is a required field that has a length between 3 and 25 characters";
  } else if (!values.firstName.match(/^[A-Za-z]+$/)) {
    return "The first name must be composed entirely of alphabetic characters";
  }
};
const validateLastName = (values) => {
  if (!values.lastName) {
    return "Required";
  } else if (values.lastName.length < 2 || values.lastName.length > 30) {
    return "This is a required field that has a length between 2 and 30 characters";
  } else if (!values.lastName.match(/^[A-Za-z]+$/)) {
    return "The last name must be composed entirely of alphabetic characters";
  }
};
const validateEmail = (values) => {
  if (!values.email) {
    return "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    return "Invalid email address";
  }
};
