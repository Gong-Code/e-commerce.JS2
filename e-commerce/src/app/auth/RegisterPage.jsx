import { RegisterForm } from '../../components/RegisterForm'
import { Link } from "react-router-dom"

function RegisterPage() {
  return (
    <div>
      <RegisterForm title="REGISTER" />
      <p className="mt-3 text-white">Already a member? 
          <Link className="text-blue-600 underline m-2" to="/auth/login">Log in here!</Link>
      </p>
    </div>
  )
}

export default RegisterPage