export default (values) => {
  let errors = {};
  let hasErrors = false;
  let { username, password } = values

  if (!username || username.trim() === "") {
    errors.username = "You must enter a username.";
    hasErrors = true;
  }

  if (!password || password.trim() === "") {
    errors.password = "You must enter a password.";
    hasErrors = true;
  }

  return hasErrors && errors;
}
