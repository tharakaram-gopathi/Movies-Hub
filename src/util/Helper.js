/* Email Validation */
const emailValidation = (input) => {
  const validEmailRegexPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const emailValid = input.match(validEmailRegexPattern) ? true : false;
  return emailValid
}

/* Password Validation */
const passwordValidation = (input) => {
  if (input.length < 8) {
    return "Password should be at least 8 characters.";
  }
  if (input.length > 15) {
    return "Password should be maximum 15 Characters only.";
  }
  const isContainsUppercase = /^(?=.*[A-Z]).*$/;
  if (!isContainsUppercase.test(input)) {
    return "Password must have at least one Capital Letter.";
  }
  const isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
  if (!isContainsSymbol.test(input)) {
    return "Password must contain at least one Special Character.";
  }
  return null;
}


export { emailValidation, passwordValidation }