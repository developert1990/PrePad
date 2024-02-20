import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOne, edit } from "../store/contactSlice";
import { useLocation } from "react-router-dom";
import { PrePadMainTitle } from "../components/PrePadMainTitle";
import { PrePadInputField } from "../components/PrePadInputField";
import { PrePadButton } from "../components/PrePadButton";
import { useTimer, useForm } from "../hooks/";

import { Alert } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

export const EditPage = () => {
  const dispatch = useDispatch();
  const { search } = useLocation();
  const { setCount, count, setHasSubmitted, hasSubmitted } = useTimer();

  const onSubmit = (values) => {
    const contactId = new URLSearchParams(search).get("contactId");
    const newContact = { id: contactId, ...values };
    dispatch(edit(newContact));
    if (Object.keys(formik.errors).length === 0) {
      setHasSubmitted(true);
      setCount(3);
    }
  };

  const { formik, isDisabled } = useForm({ onSubmit });

  const contact = useSelector((state) => {
    return state.contactObj.selectedContact;
  });

  useEffect(() => {
    const contactId = new URLSearchParams(search).get("contactId");
    dispatch(getOne(contactId));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (contact) {
      formik.setValues({
        email: contact.email || "",
        firstName: contact.firstName || "",
        lastName: contact.lastName || "",
      });
    }
    // eslint-disable-next-line
  }, [contact]);

  return (
    <div id="edit-page">
      {Object.keys(contact).length > 0 ? (
        <div>
          <PrePadMainTitle title="PrePad Edit Contact" />
          <PrePadInputField hasLabel target="firstName" label="First Name" formik={formik} autoFocus />
          <PrePadInputField hasLabel target="lastName" label="Last Name" formik={formik} />
          <PrePadInputField hasLabel target="email" label="Email Address" formik={formik} disabled />
          <PrePadButton text="Submit" onClick={formik.handleSubmit} isDisabled={isDisabled} type="submit" />
          {hasSubmitted && (
            <Alert className="prepad-alert" icon={<CheckIcon fontSize="inherit" />} severity="success">
              Your PrePad contacts have been updated successfully. Redirecting to the list page, please do not close <strong> {count}</strong>
            </Alert>
          )}
        </div>
      ) : (
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="error">
          Sorry, we can not find a contact information.
        </Alert>
      )}
    </div>
  );
};
