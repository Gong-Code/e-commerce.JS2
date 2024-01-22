import { useFormik } from "formik";
import { RegisterFormSchema } from "../../lib/Schemas";
import { useState } from "react";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


function ContactPage() {
  const [url, setUrl] = useState('https://js2-ecommerce-api.vercel.app/api/messages')

  const navigate = useNavigate()

  const form = useFormik({
      initialValues: {
        name: '',
        email: '',
        message: ''
      },
      validationSchema: RegisterFormSchema,
      onSubmit: async (values) => {
        try {
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
          });
  
          if(!response.ok) {
            throw new Error('response was not ok');
          }
  
          const data = await response.json();
          console.log(data);
    
          form.resetForm();

          toast.success('Form submitted successfully!')

          navigate('/');

        } catch (error) {
          console.error(error);
          toast.error('An error occurred.', error.message)
        }
      }
    });

  return (
    <div className="w-full h-screen max-w-md flex justify-center items-center mx-auto">
      <form onSubmit={form.handleSubmit} className="bg-emerald-800 shadow-md rounded px-12 pt-8 pb-8 w-full mb-4">
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input id="name" type="text" name="name" value={form.values.name} onChange={form.handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
          leading-tight focus:outline-none focus:shadow-outline" />
          {form.touched.name && form.errors.name && <p className="text-red-400 text-xs mt-2">{form.errors.name}</p>}
        </div>
        <div className="mb-6">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input id="email" type="email" name="email" value={form.values.email} onChange={form.handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 
          leading-tight focus:outline-none focus:shadow-outline"  />
          {form.touched.email && form.errors.email && <p className="text-red-400 text-xs">{form.errors.email}</p>}
        </div>
        <div className="mb-6">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea id="message" name="message" type="text" value={form.values.message} onChange={form.handleChange} className="shadow appearance-none border rounded w-full py-6 px-3 text-gray-700 mb-3 
          leading-tight focus:outline-none focus:shadow-outline"/>
          {form.touched.message && form.errors.message && <p className="text-red-400 text-xs">{form.errors.message}</p>}
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-orange-700 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded 
          focus:outline-none focus:shadow-outline" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}


export default ContactPage