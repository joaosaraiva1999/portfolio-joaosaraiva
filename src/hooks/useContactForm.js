import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { validateForm } from '../utils/validateForm.js'

const initialContactValues = {
  name: '',
  email: '',
  message: '',
}

export const useContactForm = () => {
  const formRef = useRef(null)
  const recaptchaRef = useRef(null)

  const [values, setValues] = useState(initialContactValues)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle')
  const [recaptchaToken, setRecaptchaToken] = useState('')

  const validateValues = (
    nextValues = values,
    nextRecaptchaToken = recaptchaToken,
  ) => validateForm({
    ...nextValues,
    recaptchaToken: nextRecaptchaToken,
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    const nextValues = {
      ...values,
      [name]: value,
    }

    setValues(nextValues)
    setStatus('idle')

    if (touched[name]) {
      setErrors(validateValues(nextValues))
    }
  }

  const handleBlur = (event) => {
    const { name } = event.target

    setTouched((currentTouched) => ({
      ...currentTouched,
      [name]: true,
    }))

    setErrors(validateValues())
  }

  const handleRecaptchaChange = (token) => {
    const nextToken = token || ''

    setRecaptchaToken(nextToken)
    setStatus('idle')

    if (errors.recaptchaToken) {
      setErrors(validateValues(values, nextToken))
    }
  }

  const resetContactForm = () => {
    setValues(initialContactValues)
    setErrors({})
    setTouched({})
    setRecaptchaToken('')
    recaptchaRef.current?.reset()
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const nextErrors = validateValues()

    setErrors(nextErrors)
    setTouched({
      name: true,
      email: true,
      message: true,
    })

    if (Object.keys(nextErrors).length > 0) {
      return
    }

    try {
      setStatus('sending')

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      )

      setStatus('success')
      resetContactForm()
    } catch (error) {
      const formData = new FormData(formRef.current)

      console.error('EmailJS send failed')
      console.error('Status:', error?.status)
      console.error('Text:', error?.text)
      console.error('Message:', error?.message)
      console.error('Form fields:', Array.from(formData.keys()))

      setStatus('error')
      setRecaptchaToken('')
      recaptchaRef.current?.reset()
    }
  }

  return {
    formRef,
    recaptchaRef,
    values,
    errors,
    touched,
    status,
    recaptchaToken,
    handleChange,
    handleBlur,
    handleSubmit,
    handleRecaptchaChange,
  }
}
