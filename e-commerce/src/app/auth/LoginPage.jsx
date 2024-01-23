import { LoginForm } from "../../components/LoginForm"
import { Link } from "react-router-dom"



function LoginPage() {

  return (
    <div>
        <LoginForm title="LOGIN"/>
        <p className="mt-3 text-white">Not a member? 
          <Link className="text-blue-600 underline m-2" to="/auth/register">Create an account here!</Link>
        </p>
    </div>
  )
}

export default LoginPage