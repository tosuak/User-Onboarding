import React, { useState, useEffect } from 'react';
import Form from './Components/Form';
import User from './Components/User'
import schema from './validation/formSchema';
import axios from 'axios';
import * as yup from 'yup';
import './App.css';

const initialFormValues = {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  password: '',
  terms: false
}
const initialFormErrors = {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  password: ''
}
const initialUser = [];
const initialDisabled = true;

function App() {
  const [user, setUser] = useState(initialUser);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
    .then(resp => {
      setUser(resp.data)
    })
    .catch(err => console.log(err))
  }

  const postNewUsers = newUsers => {
    axios.post('https://reqres.in/api/users', newUsers)
    .then(resp => {
      setUser([resp.data, ...user])
    })
    .catch(err => console.log(err))
    .finally(() => setFormValues(initialFormValues))
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: ''}))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value})
  }

  const formSubmit = () => {
    const newUser = {
      firstName: formValues.firstName.trim(),
      lastName: formValues.lastName.trim(),
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    }
    postNewUsers(newUser);
  }

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])


  return (
    <div className="container">
      <header className="App-header">
        <h1>Users OnBoard</h1>
        </header>
        <Form 
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
        />

        {
          user.map(users => {
            return (
              <User key={user.id} details={user} />
            )
          })
        }
    </div>
  );
}

export default App;
