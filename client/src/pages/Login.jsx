import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e) => {

    e.preventDefault()

    try {
const res = await axios.post(
  `${import.meta.env.VITE_API_URL}/api/auth/login`,
  {
    email,
    password
  }
);
      localStorage.setItem(
        'token',
        res.data.token
      )

      alert(res.data.message)

      navigate('/')

    } catch (error) {

      alert(
        error.response?.data?.message ||
        'Login Failed'
      )

    }

  }

  return (

    <div
      className='d-flex justify-content-center align-items-center hero-bg'
      style={{
        minHeight: '100vh'
      }}
    >

      <div
        className='glass p-5 rounded-5 shadow-lg'
        style={{
          width: '430px'
        }}
      >

        <h1 className='display-3 fw-bold mb-4 text-info text-center'>
          Login
        </h1>

        <form onSubmit={handleLogin}>

          <input
            type='email'
            placeholder='Enter Email'
            className='form-control custom-input p-3 mb-4'
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type='password'
            placeholder='Enter Password'
            className='form-control custom-input p-3 mb-4'
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className='btn premium-btn w-100 py-3 fw-bold'>
            Login
          </button>

        </form>

        <p className='text-center mt-4 text-light'>

          Don’t have an account?{' '}

          <Link
            to='/register'
            className='text-info fw-bold text-decoration-none'
          >
            Register Now
          </Link>

        </p>

      </div>

    </div>
  )
}

export default Login