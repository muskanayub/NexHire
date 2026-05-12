import { Link } from 'react-router-dom'

const Navbar = () => {

  return (

    <nav
      className='navbar navbar-expand-lg fixed-top glass py-3'
    >

      <div className='container'>

        <Link
          className='navbar-brand fw-bold fs-2 gradient-text'
          to='/'
        >

          NexHire

        </Link>

        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
        >

          <span className='navbar-toggler-icon'></span>

        </button>

        <div
          className='collapse navbar-collapse'
          id='navbarNav'
        >

          <ul className='navbar-nav ms-auto gap-4'>

            <li className='nav-item'>
              <Link className='nav-link text-light' to='/'>
                Home
              </Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link text-light' to='/jobs'>
                Jobs
              </Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link text-light' to='/login'>
                Login
              </Link>
            </li>

          </ul>

        </div>

      </div>

    </nav>

  )
}

export default Navbar