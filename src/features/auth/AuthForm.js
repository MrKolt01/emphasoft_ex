import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import { useSelector } from 'react-redux'
import AuthSelector from './authSelectors'
import FormHelperText from '@material-ui/core/FormHelperText'

const validate = (values) => {
  const errors = { username: '', password: '' }
  const requiredFields = ['username', 'password']
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'required'
    }
  })

  return errors
}

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
)

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    width: '100%',
    maxWidth: '450px',
    backgroundColor: '#202020',
    boxSizing: 'border-box',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}))

const AuthForm = ({ handleSubmit, pristine, submitting }) => {
  const styles = useStyles()

  const errors = useSelector(AuthSelector.getErrors)
  const isLoading = useSelector(AuthSelector.getIsLoading)

  return (
    <Paper className={styles.formWrapper}>
      <form
        className={styles.form}
        noValidate
        autoComplete={'off'}
        onSubmit={handleSubmit}
      >
        <Field
          name={'username'}
          component={renderTextField}
          label={'Username'}
          variant="filled"
        />
        <Field
          name={'password'}
          component={renderTextField}
          label={'Password'}
          variant="filled"
          type={'password'}
        />
        {errors.map((e) => (
          <FormHelperText key={e} error={true}>
            {e}
          </FormHelperText>
        ))}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={pristine || submitting}
        >
          Login
        </Button>
      </form>
    </Paper>
  )
}

export default reduxForm({ form: 'login', validate })(AuthForm)
