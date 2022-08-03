import React from 'react'
import { Link } from 'react-router-dom'
import '../components/Navbar.css'
// import { useState } from 'react'

const Navbar = () => {
	// let [ham,setHam]=useState(false);
  return (
    <div className='aa' >
	<div><h2>Portfolio</h2></div>
	<div className='bb'>
		<Link to="/">Home</Link>
		<Link to="/aboutme">About Me</Link>
		<Link to="/skillss">Skills</Link>
		{/* <Link to="/projectss">Projects</Link> */}
		<Link to="/contactss">Contact Me</Link>
	</div>
    </div>
  )
}

export default Navbar

