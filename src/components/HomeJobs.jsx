import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

function HomeJobs() {
  return (
	<>
	<div className='flex flex-col items-center justify-center md:flex-row md:flex-wrap md:justify-evenly lg:flex-row'>
		<div className='relative rounded-full h-60 w-60 hover:opacity-30 mb-4 '>
			<img src='https://images.pexels.com/photos/4239037/pexels-photo-4239037.jpeg?auto=compress&cs=tinysrgb&w=600' className='rounded-full h-60 w-60 cursor-pointer'/>
			<h1 className='absolute inset-y-24 left-16 text-2xl uppercase font-bold cursor-pointer opacity-0 hover:opacity-100'>Cleaning</h1>
		</div>

		<Link to="/workers/Plumbing">
			<div className='relative rounded-full h-60 w-60 hover:opacity-30 mb-4'>
				<img src='https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&w=600' className='rounded-full h-60 w-60 cursor-pointer'/>
				<h1 className='absolute inset-y-24 left-14 text-2xl uppercase font-bold cursor-pointer opacity-0 hover:opacity-100'>Plumbing</h1>
			</div>
		</Link>

		<Link to="/workers/Carpentry">
		<div className='relative rounded-full h-60 w-60 hover:opacity-30 mb-4'>
			<img src='https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=600' className='rounded-full h-60 w-60 cursor-pointer'/>
			<h1 className='absolute inset-y-24 left-14 text-2xl uppercase font-bold cursor-pointer opacity-0 hover:opacity-100'>Carpentary</h1>
		</div>
		</Link>

		<div className='relative rounded-full h-60 w-60 hover:opacity-30 mb-4'>
			<img src='https://images.pexels.com/photos/5691590/pexels-photo-5691590.jpeg?auto=compress&cs=tinysrgb&w=600' className='rounded-full h-60 w-60 cursor-pointer'/>
			<h1 className='absolute inset-y-24 left-12 text-2xl uppercase font-bold cursor-pointer opacity-0 hover:opacity-100'>Electrician</h1>
		</div>
	</div>
	</>
  )
}

export default HomeJobs
