import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {

  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = async (e) => {

    e.preventDefault()

    try {

      const res = await axios.post(
        'http://localhost:5000/api/auth/register',
        {
          name,
          email,
          password
        }
      )

      alert(res.data.message)

      navigate('/login')

    } catch (error) {

      alert(
        error.response?.data?.message ||
        'Registration Failed'
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
          Register
        </h1>

        <form onSubmit={handleRegister}>

          <input
            type='text'
            placeholder='Enter Name'
            className='form-control custom-input p-3 mb-4'
            onChange={(e) => setName(e.target.value)}
          />

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
            Register
          </button>

        </form>

        <p className='text-center mt-4 text-light'>

          Already have an account?{' '}

          <Link
            to='/login'
            className='text-info fw-bold text-decoration-none'
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  )
}

export default Register