import { useFormik } from 'formik'
import { UserRegistrationSchema } from '../lib/Schemas'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext, useAuthContext,  } from '../context/AuthContext';
import toast from 'react-hot-toast';


export const RegisterForm = ({ title }) => {

    const { register } = useAuthContext(AuthContext)

    const navigate = useNavigate()

    const form = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: UserRegistrationSchema,
        onSubmit: async (values) => {
            console.log(values)
            try {
                await register(values)
                form.resetForm()
                toast.success('Registration successful!', { duration: 5000 })
                navigate('/')
            } catch (error) {
                console.error('Registration failed:', error);
                toast.error('Registration failed!')
            }
        }
        })
        
        return (
            <form onSubmit={form.handleSubmit} className='p-4 shadow-xl rounded-lg w-[400px] bg-emerald-800'>
                <h3 className='text-white mb-8 text-2xl flex justify-center'>{ title }</h3>
                <div className='mb-4'>
                    <label htmlFor='email' className='block text-white'>Email</label>
                    <input id='email' value={form.values.email} onChange={form.handleChange} type='email'
                    className=' rounded-md w-full px-2 py-1'/>
                    {form.touched.email && form.errors.email && <p className="text-red-400 text-xs">{form.errors.email}</p>}
                </div>
                <div className='mb-4'>
                    <label htmlFor='password' className='block text-white'>Password</label>
                    <input id='password' value={form.values.password} onChange={form.handleChange} type='text'
                    className=' rounded-md w-full px-2 py-1'/>
                    {form.touched.password && form.errors.password && <p className="text-red-400 text-xs">{form.errors.password}</p>}
                </div>
                <div className='mb-4'>
                    <label htmlFor='confirmPassword' className='block text-white'>Confirm password</label>
                    <input id='confirmPassword' value={form.values.confirmPassword} onChange={form.handleChange} type='text'
                    className=' rounded-md w-full px-2 py-1'/>
                    {form.touched.confirmPassword && form.errors.confirmPassword && <p className="text-red-400 text-xs">{form.errors.confirmPassword}</p>}
                </div>
                <button type="submit" className="bg-blue-700 w-full py-1.5 rounded-md 
                text-white hover:bg-orange-700 transition-colors">Register</button>
                <Link to="/" className="bg-green-700 w-full py-1.5 rounded-md text-white hover:bg-orange-700 transition-colors block text-center mt-4">Back</Link>
            </form>
        )
}

