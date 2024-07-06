import React, { useContext } from 'react'
import Banner from './Banner'
import HomeJobs from './HomeJobs'
import { AuthContext } from '../context/AuthContext'

function Body() {
	const {user} = useContext(AuthContext)
  return (
	<div>
		<Banner />
		<br />
		<div className='flex items-center justify-center'>
			{/* <input placeholder='search job...' className='border p-1 rounded-sm '/> */}
			
			{/* <button className='flex items-center justify-center bg-blue-200 p-1 rounded-sm cursor-pointer text-sm h-8'>Search</button> */}
		</div>
		<br />
		<HomeJobs />
	</div>
  )
}

export default Body
