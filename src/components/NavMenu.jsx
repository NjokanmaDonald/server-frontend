import React from 'react'
import { Link } from 'react-router-dom'

function NavMenu() {
  return (
	<div className='flex flex-col items-center justify-center bg-slate-200 h-full w-screen z-10 overflow-hidden'>
		<div className='flex items-center justify-center hover:bg-violet-200 w-full'>
			<h3 className='m-5 cursor-pointer'><Link to="/">Home</Link></h3>
		</div>
		<div className='flex items-center justify-center hover:bg-violet-200 w-full'>
			<h3 className='m-5 cursor-pointer'><Link to="/client-request">Requests</Link></h3>
		</div>
		<div className='flex items-center justify-center hover:bg-violet-200 w-full'>
			<h3 className='m-5 cursor-pointer'>Jobs</h3>
		</div>
		<div className='flex items-center justify-center hover:bg-violet-200 w-full'>
			<h3 className='m-5 cursor-pointer'>Support</h3>
		</div>
		<div className='flex items-center justify-center hover:bg-violet-200 w-full'>
			<h3 className='m-5 cursor-pointer'>Settings</h3>
		</div>
	</div>
  )
}

export default NavMenu