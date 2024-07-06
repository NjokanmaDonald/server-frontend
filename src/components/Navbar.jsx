import React, { useContext, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import NavMenu from './NavMenu';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

function Navbar() {
	const {user, loading, error, dispatch } = useContext(AuthContext)
	const [menu, setMenu] = useState(false)


	const handleLogout = (e) => {
		e.preventDefault()
		dispatch({type: "LOGOUT"})
	}

	const openMenu = () => {
		setMenu(!menu)
	}

  return (
	<div className='flex items-center justify-between w-full bg-slate-200 h-16 sticky top-0 left-0 p-2 z-10'>
		<Link to="/"><img src="https://www.zarla.com/images/zarla-s-1x1-2400x2400-20211119-wwrwkmmjcm7hh3wfkvcc.png?crop=1:1,smart&width=250&dpr=2" className='h-8 cursor-pointer'/></Link>
		<div className='flex items-center justify-center'>
			<AccountCircleOutlinedIcon />
			{user &&
			<>
				<p className='mr-4 ml-4'>{user.firstname} {user.lastname}</p>
				<button onClick={handleLogout}>Logout</button>
			</>
			}
			<button onClick={openMenu}>
				{menu ?
				<ClearOutlinedIcon className='ml-2'/>
				:
				<MenuIcon className='ml-2'/>
				}
			</button>
		</div>
		{menu && (
		<div className='absolute top-16 left-0'>
			<NavMenu />
		</div>
		)}
	</div>
  )
}

export default Navbar