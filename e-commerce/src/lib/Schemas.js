import * as Yup from 'yup';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


export const ContactSchema = Yup.object({
    name: Yup.string()
        .required("You need to enter a name")
        .min(3, "Your name must be atleast 3 character long"),
    
    email: Yup.string()
        .required("You need to enter an email address")
        .matches(emailRegex, "You need to enter a valid email address"),
    
    message: Yup.string()
        .required("this text field can not be empty")
        .min(3, "The text field must be atleast 3 letters long")
        .max(50, "The text is too long"), 
    
})

export const UserRegistrationSchema = Yup.object({
    email: Yup.string()
    .required("You need to enter an email address")
    .matches(emailRegex, "You need to enter a valid email address"),

    password: Yup.string()
    .required('You need to enter a password')
    .matches(passwordRegex,'Your password needs to have one Uppercase, one lowercase, one number and a special character'),

    confirmPassword: Yup.string()
    .required('You need to confirm your password')
    .oneOf([Yup.ref('password'), null], 'Password must match')
})

export const UserLoginSchema = Yup.object({
    email: Yup.string()
    .required("You need to enter an email address")
    .matches(emailRegex, "You need to enter a valid email address"),

    password: Yup.string()
    .required('You need to enter a password')
    .matches(passwordRegex,'Your password needs to have one Uppercase, one lowercase, one number and a special character'),
})