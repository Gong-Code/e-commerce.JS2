import * as Yup from 'yup';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const RegisterFormSchema = Yup.object({
    name: Yup.string()
        .required("You need to enter a name")
        .min(3, "Your name must be atleast 3 character long"),
    
    email: Yup.string()
        .required("You need to enter an email address")
        .matches(emailRegex, "You need to enter a valid email address"),
    
    message: Yup.string()
        .required("this text field can not be empty")
        .min(3, "The text field must be atleast 3 letters long")
        .max(50, "The text is too long")
    
})