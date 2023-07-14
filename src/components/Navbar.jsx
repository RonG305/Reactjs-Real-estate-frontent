import { useState } from 'react'
import { Link } from 'react-router-dom'

const links = [
    {
        name: 'home',
        url: '/',
        isActive: false
    },

    {
        name: 'about',
        url: 'about/',
        isActive: false
    },

    {
        name: 'houses',
        url: 'houses/',
        isActive: false
    },

    {
        name: 'buy',
        url: 'buy/',
        isActive: false
    },

    {
        name: 'sell',
        url: 'sell/',
        isActive: false
    }

   
]

const Navbar = () => {

    
    
    return (
        <div className = 'fixed top-0 z-40 flex items-center justify-between w-full h-20 px-6 bg-slate-300'>
            <div className='text-2xl text-blue-700 font-lobster'><Link to='/'>Best Homes</Link></div>
            <div  className='items-center gap-3 capitalize md:flex'>
            {links.map((link, index) => 
                <ul key={index}>
                    <li style={{color: 'blue'}}><Link to={link.url}>{link.name}</Link></li>
                
            </ul>
            )}
            </div>
          
            
        </div>
    )
}


export default Navbar