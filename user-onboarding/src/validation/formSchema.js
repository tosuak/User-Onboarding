import * as yup from 'yup'

const formSchema = yup.object().shape({
    firstName: yup.string().trim().required('Please enter your First Name!'),
    lastName: yup.string().trim().required('Please enter your Last Name!'),
    username: yup.string().trim().required('Please enter a valid UserName!').min(5, 'Username must be at least 5 characters!'),
    email: yup.string().email('Must be a valid Email Address!').required('Please enter a valid Email Address'),
    password: yup.string().trim().required('Please enter a valid Password!').min(5, 'Password must be at least 5 characters!'),
    terms: yup.boolean()
})

export default formSchema;