import { useState } from 'react'
import axios from 'axios'

const jobsData = [

  {
    id: 1,
    title: 'Frontend Developer',
    company: 'Google',
    location: 'Bangalore',
    salary: '₹12 LPA',
    type: 'Full Time',
    skills: 'React, JavaScript, CSS'
  },

  {
    id: 2,
    title: 'Backend Engineer',
    company: 'Amazon',
    location: 'Hyderabad',
    salary: '₹15 LPA',
    type: 'Remote',
    skills: 'Node.js, Express, MongoDB'
  },

  {
    id: 3,
    title: 'UI/UX Designer',
    company: 'Adobe',
    location: 'Mumbai',
    salary: '₹10 LPA',
    type: 'Hybrid',
    skills: 'Figma, Adobe XD'
  },

  {
    id: 4,
    title: 'DevOps Engineer',
    company: 'Microsoft',
    location: 'Pune',
    salary: '₹18 LPA',
    type: 'Full Time',
    skills: 'Docker, AWS, CI/CD'
  },

  {
    id: 5,
    title: 'Data Scientist',
    company: 'Netflix',
    location: 'Remote',
    salary: '₹22 LPA',
    type: 'Remote',
    skills: 'Python, ML, TensorFlow'
  }

]

const extraTitles = [
  'Site Reliability Engineer',
  'Data Engineer',
  'AR/VR Developer',
  'Cloud Engineer',
  'Network Engineer',
  'Technical Writer',
  'Prompt Engineer',
  'Business Analyst',
  'SAP Consultant',
  'Java Developer',
  'Python Developer',
  'QA Engineer',
  'iOS Developer',
  'Android Developer',
  'Systems Engineer',
  'Database Administrator',
  'IT Support Engineer',
  'Security Engineer',
  'Automation Engineer',
  'Software Architect',
  'Machine Learning Engineer',
  'Game Developer',
  'Product Manager',
  'Full Stack Developer',
  'Software Tester',
  'Embedded Systems Engineer',
  'IoT Developer',
  'Ethical Hacker',
  'Computer Vision Engineer',
  'Big Data Engineer'
]

extraTitles.forEach((title, index) => {

  jobsData.push({

    id: 6 + index,

    title,

    company: `TechCorp ${index + 1}`,

    location: [
      'Remote',
      'Bangalore',
      'Pune',
      'Hyderabad',
      'Mumbai'
    ][index % 5],

    salary: `₹${12 + index} LPA`,

    type: [
      'Remote',
      'Full Time',
      'Hybrid'
    ][index % 3],

    skills: [
      'JavaScript, APIs',
      'React, Node.js',
      'Cloud, AWS',
      'Python, AI',
      'MongoDB, Express'
    ][index % 5]

  })

})

const Jobs = () => {

  const [appliedJobs, setAppliedJobs] = useState([])

  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('All')

  const handleApply = async (job) => {

    try {

      const applicantEmail = prompt(
        'Enter your email to apply'
      )

      if (!applicantEmail) return

      await axios.post(
        'http://localhost:5000/api/applications/apply',
        {
          jobTitle: job.title,
          company: job.company,
          applicantEmail
        }
      )

      alert('Application Submitted 🚀')

      setAppliedJobs([
        ...appliedJobs,
        job.id
      ])

    } catch (error) {

      alert('Something went wrong')

    }

  }

  const filteredJobs = jobsData.filter((job) => {

  const matchesSearch =

    job.title.toLowerCase().includes(search.toLowerCase()) ||

    job.company.toLowerCase().includes(search.toLowerCase()) ||

    job.location.toLowerCase().includes(search.toLowerCase())

  const matchesFilter =

    filter === 'All' ||

    job.type === filter

  return matchesSearch && matchesFilter

})

  return (

    <div
      className='container-fluid py-5 hero-bg'
      style={{
        minHeight: '100vh'
      }}
    >

      <div className='container'>

        <h1
          className='fw-bold text-center gradient-text mb-4'
          style={{
            fontSize: '4rem',
            marginTop: '120px'
          }}
        >

          Explore Careers

        </h1>

        {/* SEARCH BAR */}

        {/* SEARCH + FILTER */}

<div
  className='d-flex flex-column flex-lg-row gap-3 justify-content-center align-items-center mb-5'
>

  {/* SEARCH */}

  <input
    type='text'
    placeholder='Search jobs, companies, locations...'
    className='form-control custom-input p-3'
    style={{
      maxWidth: '550px',
      borderRadius: '18px'
    }}
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />

  {/* FILTER */}

  <select
  className='form-select custom-filter p-3'
  style={{
    maxWidth: '220px',
    borderRadius: '18px'
  }}
  value={filter}
  onChange={(e) => setFilter(e.target.value)}
>

  <option value='All'>
    All Types
  </option>

  <option value='Full Time'>
    Full Time
  </option>

  <option value='Remote'>
    Remote
  </option>

  <option value='Hybrid'>
    Hybrid
  </option>

</select>

</div>

        {/* JOBS */}

        <div className='row g-4'>

          {filteredJobs.map((job) => (

            <div
              className='col-lg-4 col-md-6'
              key={job.id}
            >

              <div className='glass p-4 h-100 job-card'>

                <h2 className='fw-bold text-light mb-4'>
                  {job.title}
                </h2>

                <h5 className='text-info'>
                  🏢 {job.company}
                </h5>

                <p className='text-secondary'>
                  📍 {job.location}
                </p>

                <p className='text-light'>
                  💰 {job.salary}
                </p>

                <p className='text-light'>
                  🧑‍💻 {job.type}
                </p>

                <p className='text-light'>
                  ⚡ {job.skills}
                </p>

                <button
                  className='btn premium-btn mt-3 w-100 py-3 fw-bold'
                  onClick={() => handleApply(job)}
                >

                  {appliedJobs.includes(job.id)
                    ? 'Applied Successfully'
                    : 'Apply Now'}

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  )

}

export default Jobs