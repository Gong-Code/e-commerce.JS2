import { useFormik } from 'formik'
import { UserLoginSchema } from '../lib/Schemas'
import { Link } from 'react-router-dom';
import { AuthContext, useAuthContext,  } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';

export const LoginForm = ({ title }) => {
    const { login, token } = useAuthContext(AuthContext)

    const navigate = useNavigate()

    const form = useFormik({
    initialValues: {
        email: '',
        password: ''
    },
    validationSchema: UserLoginSchema,
    onSubmit: async (values) => {
        console.log(values)
        try {
            await login(values)
            if(token){
                navigate('/private')
                form.resetForm()
                toast.success('Login successful!', { duration: 4000 })
            }
        } catch (error) {
            console.error('Login failed:', error);
            toast.error('Login failed!')
        }
    }
    })

    return (
        <form onSubmit={form.handleSubmit} className='p-4 shadow-xl rounded-lg w-[400px] bg-emerald-800'>
            <h3 className='text-white mb-8 text-2xl flex justify-center'>{ title }</h3>
            <div className='mb-4'>
                <label htmlFor='email' className='block text-white'>Email</label>
                <input id='email' value={form.values.email} onChange={form.handleChange} type='text'
                className=' rounded-md w-full px-2 py-1'/>
                {form.touched.email && form.errors.email && <p className="text-red-400 text-xs">{form.errors.email}</p>}
            </div>
            <div className='mb-4'>
                <label htmlFor='password' className='block text-white'>Password</label>
                <input id='password' value={form.values.password} onChange={form.handleChange} type='text'
                className=' rounded-md w-full px-2 py-1'/>
                {form.touched.password && form.errors.password && <p className="text-red-400 text-xs">{form.errors.password}</p>}
            </div>
            <button type="submit" className="bg-blue-700 w-full py-1.5 rounded-md 
            text-white hover:bg-orange-700 transition-colors">Login</button>
            <Link to="/" className="bg-green-700 w-full py-1.5 rounded-md text-white hover:bg-orange-700 transition-colors block text-center mt-4">Back</Link>
        </form>
    )
}
