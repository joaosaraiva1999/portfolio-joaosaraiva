export const validateForm = ({ name, email, message, recaptchaToken }) => {
  const errors = {}

  if (!name.trim()) {
    errors.name = 'Name is Required'
  }

  if (!email.trim()) {
    errors.email = 'Email is Required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Enter a valid Email'
  }

  if (!message.trim()) {
    errors.message = 'Message is Required'
  } else if (message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters'
  }

  if (!recaptchaToken) {
    errors.recaptchaToken = 'Please complete the recaptcha'
  }


  return errors
}
