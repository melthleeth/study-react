import { useState } from "react";

const useFormInput = (validation) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const enteredValueIsValid = validation(enteredValue);
  const hasError = isTouched && !enteredValueIsValid;
  const inputClasses = hasError ? "form-control invalid" : "form-control";

  const onBlurHandler = (event) => {
    setIsTouched(true);
  };

  const onChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: enteredValueIsValid,
    hasError,
    onBlurHandler,
    onChangeHandler,
    reset,
    inputClasses,
  };
};

export default useFormInput;
