import React from "react";

export default function Form(props) {
const { values, submit, change, disabled, errors } = props

const onSubmit = evt => {
    evt.preventDefault()
    submit()
}

const onChange = evt => {
    const { name, value, checked, type } = evt.target
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse)
}

return (
    <form className="form container" onSubmit={onSubmit}>
        <div className="form-group submit">
            <h2>Add a User</h2>
            <button disabled={disabled} id="submitButton">Submit</button>
            <div className="errors">
                <div>{errors.firstName}</div>
                <div>{errors.lastName}</div>
                <div>{errors.username}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
            </div>
        </div>

        <div className="form-group inputs">
            <h4>General Information</h4>
            <label>First Name
                <input 
                    value={values.firstName}
                    onChange={onChange}
                    name="firstName"
                    type='text'
                />
            </label>

            <label>Last Name
                <input 
                    value={values.lastName}
                    onChange={onChange}
                    name="lastName"
                    type='text'
                />
            </label>

            <label>Username
                <input 
                    value={values.username}
                    onChange={onChange}
                    name="username"
                    type='text'
                />
            </label>

            <label>Email
                <input 
                    value={values.email}
                    onChange={onChange}
                    name="email"
                    type='email'
                />
            </label>

            <label>Password
                <input 
                    value={values.password}
                    onChange={onChange}
                    name="password"
                    type='password'
                />
            </label>

            <label>Terms of Services
                <input 
                    type='checkbox'
                    name='terms'
                    checked={values.terms}
                    onChange={onChange}
                />
            </label>
        </div>
    </form>
)
};