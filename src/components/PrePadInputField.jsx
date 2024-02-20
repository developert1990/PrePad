import { useEffect, useRef } from "react";

export const PrePadInputField = ({ hasLabel, target, label, formik, autoFocus, disabled }) => {
  const { handleChange, values, errors } = formik;
  const inputRef = useRef(null);
  useEffect(() => {
    if (autoFocus) {
      inputRef.current.focus({ preventScroll: true });
    }
  }, [autoFocus]);
  return (
    <div id="prepad-input-field">
      {hasLabel && <label htmlFor={target}>{label}</label>}
      <input id={target} name={target} type="text" onChange={handleChange} value={values[target]} ref={inputRef} disabled={disabled} />
      {errors[target] ? <div className="error-field">{errors[target]}</div> : null}
    </div>
  );
};
