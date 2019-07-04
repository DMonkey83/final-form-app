import React, { useState } from 'react'
import Styles from './Styles'
import { Form, Field } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import { FieldArray } from 'react-final-form-arrays'

const MyForm = props => {
  const onSubmit = values => {
    console.log('var', values.confirm.initialValues(''))
  }

  return (
    <Styles>
      <h1>🏁 React Final Form - Array Fields</h1>
      <a href='https://github.com/erikras/react-final-form#-react-final-form'>
        Read Docs
      </a>
      <Form
        onSubmit={onSubmit}
        mutators={{
          ...arrayMutators
        }}
        render={({
          handleSubmit,
          form: {
            mutators: { push, pop }
          }, // injected from final-form-arrays above
          pristine,
          form,
          submitting,
          values
        }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div>
                <label>Company</label>
                <Field name='company' component='input' />
              </div>
              <div className='buttons'>
                <button
                  type='button'
                  onClick={() => push('customers', undefined)}
                >
                  Add Customer
                </button>
                <button type='button' onClick={() => pop('customers')}>
                  Remove Customer
                </button>
              </div>
              <FieldArray name='customers'>
                {({ fields }) =>
                  fields.map((name, index) => (
                    <div key={name}>
                      <label>First Name </label>
                      <Field
                        name={`${name}.firstName`}
                        component='input'
                        type='checkbox'
                        placeholder='First Name'
                      />
                      <br />
                      <label>Last Name </label>
                      <Field
                        name={`${name}.lastName`}
                        component='input'
                        placeholder='Last Name'
                        type='checkbox'
                      />
                      <span
                        onClick={() =>
                          fields.update(index, {
                            firstName: 'hello',
                            lastName: 'hello'
                          })
                        }
                        style={{ cursor: 'pointer' }}
                      >
                        ❌
                      </span>
                      <span
                        onClick={() =>
                          fields.update(index, {
                            firstName: '',
                            lastName: ''
                          })
                        }
                        style={{ cursor: 'pointer' }}
                      >
                        clear
                      </span>
                    </div>
                  ))
                }
              </FieldArray>

              <div className='buttons'>
                <button type='submit' disabled={submitting || pristine}>
                  Submit
                </button>
                <button
                  type='button'
                  onClick={form.reset}
                  disabled={submitting || pristine}
                >
                  Reset
                </button>
              </div>
              <pre>{JSON.stringify(values, 0, 2)}</pre>
            </form>
          )
        }}
      />
    </Styles>
  )
}

export default MyForm
