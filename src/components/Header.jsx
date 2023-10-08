import React from 'react'
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className =' flex justify-between item-center max-w-6xl mx-auto p-3'>
        <link to='/'>
    <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'></h1>
        <span className ='text-slate-500'>Raymond's</span>
        <span className ='text-slate-700'>Estate's</span>
        </link>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
          <input type='text' placeholder='Search...'  className='bg-transparent focus-outline:none w-24 sm:w-64'/> 
          <FaSearch className='text-slate-500'/>
          </form>
          <ul className='flex gap-4'>
            <link to='/home'>
            <li className='hiddensm:inline text-slate-700  hover:underline '>Home</li>
            </link>
            <link to='/about'>
            <li className='hiddensm:inline text-slate-700  hover:underline '>About</li>
            </link>
            <link to='/sign-in'>
            <li className='hiddensm:inline text-slate-700  hover:underline '>Sign In</li>
            </link>
            <link to='/sign-up'>
            <li className='hiddensm:inline text-slate-700  hover:underline '>Sign Up</li>
            </link>
          </ul>
          </div>
    </header>
  )
}