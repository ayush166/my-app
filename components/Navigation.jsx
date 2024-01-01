import Link from 'next/link';
import React, { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      {/* Hamburger Icon for Mobile */}
      <div className='md:hidden' onClick={
        () => {
            setIsOpen(!isOpen)
            console.log("HM",isOpen)

        }}
      >
        {/* Hamburger Icon */}
        HM 
      </div>

      {/* Navigation Links */}
      <div className={`flex flex-col md:flex-row md:block ${isOpen ? 'block' : 'hidden'}`}>
        {/* Navigation links go here */} 
        <Link href="/">Home</Link>
        <Link href="/addSchool">Add School</Link>
        
        <Link href="/showSchools">Search Schools</Link>

      </div>
    </nav>
  );
}

export default Navigation;
