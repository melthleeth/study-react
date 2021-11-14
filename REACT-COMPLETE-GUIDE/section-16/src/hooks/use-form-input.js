import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT")
    return {
      value: action.value,
      isTouched: state.isTouched,
    };
  else if (action.type === "BLUR")
    return { value: state.value, isTouched: true };
  else if (action.type === "RESET") return { value: "", isTouched: false };

  return inputStateReducer;
};

const useFormInput = (validation) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const enteredValueIsValid = validation(inputState.value);
  const hasError = inputState.isTouched && !enteredValueIsValid;
  const inputClasses = hasError ? "form-control invalid" : "form-control";

  const onBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const onChangeHandler = (event) => {
    dispatch({
      type: "INPUT",
      value: event.target.value,
    });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValid: enteredValueIsValid,
    hasError,
    onBlurHandler,
    onChangeHandler,
    reset,
    inputClasses,
  };
};

export default useFormInput;
