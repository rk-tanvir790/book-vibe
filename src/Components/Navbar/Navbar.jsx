import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center py-12'>
            <div>
                <h2 className='font-worksans font-bold text-3xl text-[#131313]'>Book Vibe</h2>
            </div>
            <div className='flex gap-4 items-center font-worksans text-lg text-[#131313]/[0.8]'>
                <NavLink className='py-[14px] px-5 rounded-lg border border-white' to="/">Home</NavLink>
                <NavLink className='py-[14px] px-5 rounded-lg border border-white' to="/ListedBooks">Listed Books</NavLink>
                <NavLink className='py-[14px] px-5 rounded-lg border border-white' to="/PagesToRead">Pages to Read</NavLink>
            </div>
            <div className='flex gap-4'>
                <button className='font-worksans font-semibold text-lg text-white py-[18px] px-7 bg-[#23BE0A] rounded-lg cursor-pointer'>Sign In</button>
                <button className='font-worksans font-semibold text-lg text-white py-[18px] px-7 bg-[#59C6D2] rounded-lg cursor-pointer'>Sign Up</button>
            </div>
        </nav>
    );
};

export default Navbar;