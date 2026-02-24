import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import styles from './ContactForm.module.css'

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'The name must be at least 3 characters')
    .max(50, 'The name must be at most 50 characters')
    .required('The name is required'),
  number: Yup.string()
    .matches(
      /^[0-9\s\-\+\(\)]+$/,
      'Please enter a valid phone number'
    )
    .min(7, 'The phone number must be at least 7 characters')
    .max(20, 'The phone number must be at most 20 characters')
    .required('The phone number is required'),
})

export default function ContactForm({ onSubmit }) {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values)
        resetForm()
      }}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="name" className={styles.label}>
              name    </label>
            <Field
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              autoComplete="name"
              className={styles.input}
            />
            <ErrorMessage name="name" component="span" className={styles.error} />
          </div>

          <div className={styles.field}>
            <label htmlFor="number" className={styles.label}>
              number
            </label>
            <Field
              id="number"
              name="number"
              type="tel"
              placeholder="+1 (555) 123-4567"
              autoComplete="tel"
              className={styles.input}
            />
            <ErrorMessage name="number" component="span" className={styles.error} />
          </div>

          <button type="submit" className={styles.button} disabled={isSubmitting}>
            Add Contact
          </button>
        </Form>
      )}
    </Formik>
  )
}
