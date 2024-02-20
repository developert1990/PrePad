import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/contactSlice";
import { Alert } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { PrePadMainTitle } from "../components/PrePadMainTitle";
import { PrePadButton } from "../components/PrePadButton";
import { PrePadInputField } from "../components/PrePadInputField";
import { useTimer, useForm } from "../hooks";

export const CreatePage = () => {
  const dispatch = useDispatch();
  const { setCount, count, setHasSubmitted, hasSubmitted } = useTimer();

  const onSubmit = (values) => {
    dispatch(add(values));
    if (Object.keys(formik.errors).length === 0) {
      setHasSubmitted(true);
      setCount(3);
    }
  };

  const { formik, isDisabled } = useForm({ onSubmit });
  return (
    <div id="create-page">
      <PrePadMainTitle title="PrePad Create a Contact" />
      <PrePadInputField hasLabel={true} target="firstName" label="First Name" formik={formik} autoFocus={true} />
      <PrePadInputField hasLabel={true} target="lastName" label="Last Name" formik={formik} />
      <PrePadInputField hasLabel={true} target="email" label="Email Address" formik={formik} />
      <PrePadButton text="Submit" onClick={formik.handleSubmit} isDisabled={isDisabled} type="submit" />
      {hasSubmitted && (
        <Alert className="prepad-alert" icon={<CheckIcon fontSize="inherit" />} severity="success">
          Your PrePad contacts have been saved successfully. Redirecting to the list page, please do not close <strong> {count}</strong>
        </Alert>
      )}
    </div>
  );
};
