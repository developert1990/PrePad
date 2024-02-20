import { useFormik } from "formik";
import { validate } from "../utils/validation";

export const useForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validate,
    onSubmit: onSubmit,
  });

  const isDisabled = formik.values.email === "" || formik.values.firstName === "" || formik.values.lastName === "" || Object.keys(formik.errors).length > 0;

  return { formik, isDisabled };
};
