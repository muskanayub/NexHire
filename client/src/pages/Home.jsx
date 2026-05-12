import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Home = () => {

  return (

    <div className='hero-bg text-white overflow-hidden'>

      <section
        className='container py-5'
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center'
        }}
      >

        <div className='row align-items-center w-100'>

          {/* LEFT SIDE */}

          <div className='col-lg-6'>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              style={{
                fontSize: '4.8rem',
                fontWeight: '800',
                lineHeight: '1.1'
              }}
            >

              Build Your

              <br />

              <span className='gradient-text'>
                Dream Career
              </span>

            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{
                maxWidth: '600px',
                fontSize: '1.1rem',
                color: '#94a3b8',
                marginTop: '25px'
              }}
            >

              Discover premium opportunities from top
              companies around the world and unlock
              your future with smarter hiring.

            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className='d-flex gap-4 mt-5 flex-wrap'
            >

              <Link to='/jobs'>

                <button
                  className='btn premium-btn px-5 py-3 fs-5'
                >

                  Explore Jobs

                </button>

              </Link>

              <Link to='/register'>

                <button
                  className='btn btn-outline-light px-5 py-3 rounded-4 fs-5'
                >

                  Get Started

                </button>

              </Link>

            </motion.div>

          </div>

          {/* RIGHT SIDE */}

          <div className='col-lg-6 mt-5 mt-lg-0'>

            <div className='position-relative d-flex justify-content-center'>

              {/* HERO IMAGE */}

              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                src='https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop'
                alt='team'
                className='img-fluid rounded-5 shadow-lg'
                style={{
                  width: '500px',
                  border: '3px solid rgba(255,255,255,0.08)'
                }}
              />

              {/* FLOATING CARD 1 */}

              <motion.div
                initial={{ opacity:0, y:40 }}
                animate={{ opacity:1, y:0 }}
                transition={{ delay:1 }}
                className='glass position-absolute p-4 rounded-4'
                style={{
                  top:'30px',
                  left:'-20px',
                  width:'240px',
                  zIndex:'10'
                }}
              >

                <h5
                  className='fw-bold'
                  style={{ color:'#7dd3fc' }}
                >
                  🚀 10K+ Opportunities
                </h5>

                <p
                  style={{
                    color:'#cbd5e1',
                    fontSize:'0.95rem'
                  }}
                >
                  Discover high-paying jobs from
                  leading global companies.
                </p>

              </motion.div>

              {/* FLOATING CARD 2 */}

              <motion.div
                initial={{ opacity:0, y:40 }}
                animate={{ opacity:1, y:0 }}
                transition={{ delay:1.2 }}
                className='glass position-absolute p-4 rounded-4'
                style={{
                  bottom:'30px',
                  right:'-20px',
                  width:'240px',
                  zIndex:'10'
                }}
              >

                <h5
                  className='fw-bold'
                  style={{ color:'#22d3ee' }}
                >
                  💼 Smart Hiring
                </h5>

                <p
                  style={{
                    color:'#cbd5e1',
                    fontSize:'0.95rem'
                  }}
                >
                  Apply instantly and connect
                  directly with recruiters.
                </p>

              </motion.div>

            </div>

          </div>

        </div>

      </section>

    </div>

  )

}

export default Home