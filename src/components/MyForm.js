import React from 'react'
import Styles from './Styles'
import { Form, Field } from 'react-final-form'

const MyForm = props => {
  const onSubmit = values => {
    props.updateValues(values)
  }
  return (
    <Styles>
      <h1>🏁 React Final Form Example</h1>
      <h2>Synchronous Record-Level Validation</h2>
      <a href='https://github.com/erikras/react-final-form#-react-final-form'>
        Read Docs
      </a>
      <Form
        onSubmit={onSubmit}
        validate={values => {
          const errors = {}
          if (!values.username) {
            errors.username = 'Required'
          }
          if (!values.password) {
            errors.password = 'Required'
          }
          if (!values.confirm) {
            errors.confirm = 'Required'
          } else if (values.confirm !== values.password) {
            errors.confirm = 'Must match'
          }
          return errors
        }}
        render={({ handleSubmit, reset, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <Field name='username'>
              {({ input, meta }) => (
                <div>
                  <label>Username</label>
                  <input {...input} type='text' placeholder='Username' />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name='password'>
              {({ input, meta }) => (
                <div>
                  <label>Password</label>
                  <input {...input} type='password' placeholder='Password' />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name='confirm'>
              {({ input, meta }) => (
                <div>
                  <label>Confirm</label>
                  <input {...input} type='password' placeholder='Confirm' />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <div className='buttons'>
              <button type='submit' disabled={submitting}>
                Submit
              </button>
              <button
                type='button'
                onClick={reset}
                disabled={submitting || pristine}
              >
                Reset
              </button>
            </div>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      />
    </Styles>
  )
}

export default MyForm
