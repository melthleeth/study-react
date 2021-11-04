import useFormInput from "../hooks/use-form-input";

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    onBlurHandler: firstNameBlurHandler,
    onChangeHandler: firstNameChangeHandler,
    reset: resetFirstNameInput,
    inputClasses: firstNameInputClasses,
  } = useFormInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    onBlurHandler: lastNameBlurHandler,
    onChangeHandler: lastNameChangeHandler,
    reset: resetLastNameInput,
    inputClasses: lastNameInputClasses,
  } = useFormInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    onBlurHandler: emailBlurHandler,
    onChangeHandler: emailChangeHandler,
    reset: resetEmailInput,
    inputClasses: emailInputClasses,
  } = useFormInput((value) => value.includes("@"));

  const formIsValid =
    enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid;

  const submitFormHandler = (event) => {
    event.preventDefault();

    console.log(enteredFirstName, enteredLastName, `(${enteredEmail})`);

    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredFirstName}
            onBlur={firstNameBlurHandler}
            onChange={firstNameChangeHandler}
          />
          {firstNameInputHasError && (
            <p className="error-text">First name must not be empty.</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={enteredLastName}
            onBlur={lastNameBlurHandler}
            onChange={lastNameChangeHandler}
          />
          {lastNameInputHasError && (
            <p className="error-text">Last name must not be empty.</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={enteredEmail}
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
        />
        {emailInputHasError && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
