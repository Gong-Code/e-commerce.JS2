import { useFormik } from "formik";


function ContactPage() {
  const form = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    onSubmit: values => {
      console.log(values)
    }
  });
  
  return (
    <div className="w-full h-screen max-w-md flex justify-center items-center mx-auto">
      <form onSubmit={form.handleSubmit} className="bg-gray-500 shadow-md rounded px-12 pt-8 pb-8 w-full mb-4">
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" name="name">
            Name
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
          leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" />
        </div>
        <div className="mb-6">
          <label className="block text-white text-sm font-bold mb-2" email="email">
            Email
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 
          leading-tight focus:outline-none focus:shadow-outline" id="password" type="email" />
        </div>
        <div className="mb-6">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea className="shadow appearance-none border rounded w-full py-6 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="message" />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded 
          focus:outline-none focus:shadow-outline" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}


export default ContactPage