import './Contacts.css'
import { createElement, useContext } from 'react'
import { m } from 'motion/react'
import { ThemeContext } from '../../context/ThemeContext.jsx'
import { buttonTap, contactButtonHover, contactCardHover, itemVariants, pageVariants, sectionVariants, staggerContainer, viewport } from '../../utils/motion.js'
import { contactFields } from '../../data/contactFields.js'
import { contactObj } from '../../data/contactsobj.js'
import ReCAPTCHA from 'react-google-recaptcha'
import { useContactForm } from '../../hooks/useContactForm.js'


const MotionButton = m.button
const MotionDiv = m.div
const MotionForm = m.form
const MotionH1 = m.h1
const MotionMain = m.main
const MotionP = m.p


export default function Contacts() {
  const {
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
  } = useContactForm()

  const { theme } = useContext(ThemeContext)
  const isSendDisabled = status === 'sending' || !recaptchaToken

  return (
    <MotionMain className={`contacts-page ${theme}`} variants={pageVariants} initial="hidden" animate="show" exit="exit">
      <MotionDiv className='contact-container' variants={staggerContainer} initial="hidden" animate="show">
        <MotionDiv className="left-contacts-section" variants={staggerContainer}>
          <MotionH1 className={`contacts-title ${theme}`} variants={itemVariants}>Let's Work Together</MotionH1>
          <MotionP className={`contacts-description ${theme}`} variants={itemVariants}>I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to get in touch.
          </MotionP>
          <MotionDiv className="contact-card-section" variants={staggerContainer}>
            {contactObj.map(({ icon, titulo, value }) => (
              <MotionDiv key={titulo} className={`contact-card ${theme}`} variants={itemVariants} whileHover={contactCardHover}>
                <div className="icon-div">{createElement(icon)}</div>
                <div className="info-div">
                  <p className={theme}>{titulo}</p>
                  <p className={theme}>{value}</p>
                </div>
              </MotionDiv>
            ))}
          </MotionDiv>
        </MotionDiv>
        <MotionDiv className="right-contacts-section" variants={sectionVariants} initial="hidden" whileInView="show" viewport={viewport}>
          <MotionForm ref={formRef} className={`contact-form ${theme}`} onSubmit={handleSubmit} aria-label="Contact form" variants={staggerContainer}>
            {contactFields.map(({ id, label, ...field }) => (
              <MotionDiv className="form-field" key={id} variants={itemVariants}>
                <label className={theme} htmlFor={id}>{label}</label>

                <input
                  id={id}
                  {...field}
                  value={values[field.name]}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />

                {touched[field.name] && errors[field.name] && (
                  <p className="form-error">{errors[field.name]}</p>
                )}
              </MotionDiv>
            ))}
            <MotionDiv className="form-field" variants={itemVariants}>
              <label className={theme} htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell me about your project..."
                rows="6"
                value={values.message}
                onBlur={handleBlur}
                onChange={handleChange}
              ></textarea>

              {touched.message && errors.message && (
                <p className="form-error">{errors.message}</p>
              )}
            </MotionDiv>
            <MotionDiv className="recaptcha-field" variants={itemVariants}>
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                theme={theme === 'light' ? 'light' : 'dark'}
                onChange={handleRecaptchaChange}
                onExpired={() => handleRecaptchaChange('')}
              />

              {errors.recaptchaToken && (
                <p className="form-error">{errors.recaptchaToken}</p>
              )}
            </MotionDiv>
            <MotionButton
              className={`send-message ${theme}`}
              type="submit"
              disabled={isSendDisabled}
              variants={itemVariants}
              whileHover={isSendDisabled ? undefined : contactButtonHover}
              whileTap={isSendDisabled ? undefined : buttonTap}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </MotionButton>
            {status === 'success' && (
              <p className="form-success">Message sent successfully.</p>
            )}

            {status === 'error' && (
              <p className="form-error">Something went wrong. Please try again.</p>
            )}
          </MotionForm>
        </MotionDiv>
      </MotionDiv>
    </MotionMain>
  )
}
