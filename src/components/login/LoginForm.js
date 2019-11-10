import React, { Component} from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './LoginForm.css';


/**
 * @description make a simple login with redux-form
 */
class LoginForm extends Component {
  
    renderField = (field) => (
        <div className="form-group">
          <div>
            <TextField  type={field.type} label={field.label} placeholder={field.label} error={field.meta.touched && field.meta.invalid} helperText={field.meta.touched && field.meta.error} {...field.input} {...field.custom}/>
          </div>    
        </div>
      )
      /**
       * @description signin button
       */
      onSubmit = (values) => {
            // simple username and password for login----> admin admin
            if (!['admin'].includes(values.username)) {
              throw new SubmissionError({
                username: 'User does not exist',
                _error: 'Login failed!'
              })
            } else if (values.password !== 'admin') {
              throw new SubmissionError({
                password: 'Wrong password',
                _error: 'Login failed!'
              })
            } else {
              window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
              this.props.history.push('/asanshahr');
    
            }
        }
    
  render(){
      const { error, handleSubmit, pristine, reset, submitting }= this.props;
    return (
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="form-login">
            <div>
                <h3>SingnIn</h3>
                <p>in this example username: <strong>admin</strong> and password: <strong>admin</strong> </p>
            </div>
          <Field
            name="username"
            type="text"
            component={this.renderField}
            label="Username"
          />
          <Field
            name="password"
            type="password"
            component={this.renderField}
            label="Password"
          />
          {/* {error && <strong>{error}</strong>} */}
          <div className="form-button">
                <Button type="submit" className="login-btn" disabled={submitting} variant="contained"  color="primary" size="large">
                Log In
                </Button>
                <Button type="submit" disabled={submitting} variant="contained"  color="secondary" size="large" disabled={pristine || submitting} onClick={reset}>
                Clear Values
                </Button>
          </div>
        </form>
      )
  }
}

const validate = values => {

const errors ={};
//validate input:
const requiredFields = [
    'username',
    'password'
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  if (
    !values.username /* &&!/^[A-Z0-9]/i.test(values.username)*/) {
    errors.username = 'Invalid username'
  }
  else if (
   ! values.password
  ) {
    errors.username = 'Invalid password'
  }
//if error is empty the form is fine to submit
return errors;
}




export default reduxForm({
    validate,
  form: 'submitValidation' // a unique identifier for this form
})(LoginForm)
