import React from 'react'
import Logo from '@/components/Logo'
import Navigation from '@/components/Navigation'

const Header = () => {
  return (
    <div className='flex justify-between items-center p-4 bg-white shadow-md'>
        <Logo/>
       <Navigation/>
    </div>
  )
}

export default Header