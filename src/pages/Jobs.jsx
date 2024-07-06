import { Link } from '@mui/material'
import React from 'react'

function Jobs() {
  return (
	<div>
		<br />
		<br />
		<div className='flex items-center justify-center'>
			<input placeholder='search job...' className='border p-1 rounded-sm '/>
			<button className='flex items-center justify-center bg-blue-200 p-1 rounded-sm cursor-pointer text-sm h-8'>Search</button>
		</div>
		<br />
		<br />
		<div className='flex flex-col items-center justify-center md:flex-row md:flex-wrap md:justify-evenly lg:flex-row'>
				<div className='relative rounded-lg h-60 w-60 hover:opacity-30 m-4 hover:scale-110'>
					<img src='https://images.pexels.com/photos/4239037/pexels-photo-4239037.jpeg?auto=compress&cs=tinysrgb&w=600' className='rounded-lg h-60 w-60 cursor-pointer '/>
					<h1 className='absolute inset-y-24 left-16 text-2xl uppercase font-bold cursor-pointer opacity-0 hover:opacity-100'>Cleaning</h1>
				</div>

				<div className='relative rounded-full h-60 w-60 hover:opacity-30 m-4 hover:scale-110'>
					<img src='https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&w=600' className='rounded-lg h-60 w-60 cursor-pointer'/>
					<h1 className='absolute inset-y-24 left-14 text-2xl uppercase font-bold cursor-pointer opacity-0 hover:opacity-100'>Plumbing</h1>
				</div>

				<Link to="/workers/carpentry">
					<div className='relative rounded-full h-60 w-60 hover:opacity-30 m-4 hover:scale-110'>
						<img src='https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=600' className='rounded-lg h-60 w-60 cursor-pointer'/>
						<h1 className='absolute inset-y-24 left-16 text-2xl uppercase font-bold cursor-pointer opacity-0 hover:opacity-100'>Carpentry</h1>
					</div>
				</Link>

				<div className='relative rounded-full h-60 w-60 hover:opacity-30 m-4 hover:scale-110'>
					<img src='https://images.pexels.com/photos/5691590/pexels-photo-5691590.jpeg?auto=compress&cs=tinysrgb&w=600' className='rounded-lg h-60 w-60 cursor-pointer'/>
					<h1 className='absolute inset-y-24 left-12 text-2xl uppercase font-bold cursor-pointer opacity-0 hover:opacity-100'>Electrician</h1>
				</div>
				<div className='relative rounded-full h-60 w-60 hover:opacity-30 m-4 hover:scale-110'>
					<img src='https://images.pexels.com/photos/7218008/pexels-photo-7218008.jpeg?auto=compress&cs=tinysrgb&w=600' className='rounded-lg h-60 w-60 cursor-pointer'/>
					<h1 className='absolute inset-y-24 left-16 text-2xl uppercase font-bold cursor-pointer opacity-0 hover:opacity-100'>Painting</h1>
				</div>

				<div className='relative rounded-full h-60 w-60 hover:opacity-30 m-4 hover:scale-110'>
					<img src='https://images.pexels.com/photos/2347642/pexels-photo-2347642.jpeg?auto=compress&cs=tinysrgb&w=600' className='rounded-lg h-60 w-60 cursor-pointer'/>
					<h1 className='absolute inset-y-24 left-14 text-2xl uppercase font-bold cursor-pointer opacity-0 hover:opacity-100'>Laundry</h1>
				</div>

				<div className='relative rounded-full h-60 w-60 hover:opacity-30 m-4 hover:scale-110'>
					<img src='https://images.pexels.com/photos/4750274/pexels-photo-4750274.jpeg?auto=compress&cs=tinysrgb&w=600' className='rounded-lg h-60 w-60 cursor-pointer'/>
					<h1 className='absolute inset-y-24 left-12 text-2xl uppercase font-bold cursor-pointer opacity-0 hover:opacity-100'>Gardening</h1>
				</div>

				<div className='relative rounded-full h-60 w-60 hover:opacity-30 m-4 hover:scale-110'>
					<img src='https://images.pexels.com/photos/5691590/pexels-photo-5691590.jpeg?auto=compress&cs=tinysrgb&w=600' className='rounded-lg h-60 w-60 cursor-pointer'/>
					<h1 className='absolute inset-y-24 left-12 text-2xl uppercase font-bold cursor-pointer opacity-0 hover:opacity-100'>Electrician</h1>
				</div>
			</div>
		</div>
  )
}

export default Jobs