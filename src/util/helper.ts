export const EMAIL_VALIDATION_REGEX =
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export const validateEmail = (email: string) =>
  EMAIL_VALIDATION_REGEX.test(email);

export const validatePassword = (value: string) => !!(value?.length >= 8);
