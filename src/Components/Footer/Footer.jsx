import React from 'react';
import { NavLink } from 'react-router';

const Footer = () => {
    return (
        <div className='text-center bg-[#131313]/[0.05] py-[100px] mb-12'>
            <h2 className='font-worksans font-bold text-3xl text-[#131313]'>Book Vibe</h2>
            <div className='flex gap-4 justify-center items-center font-worksans text-lg text-[#131313]/[0.8]'>
                <NavLink className='py-[14px] px-5' to="/">Home</NavLink>
                <NavLink className='py-[14px] px-5' to="/ListedBooks">Listed Books</NavLink>
                <NavLink className='py-[14px] px-5' to="/PagesToRead">Pages to Read</NavLink>
            </div>
            <p className='font-worksans text-lg text-[#131313]/[0.8]'>© 2025 Book Vibe. All rights reserved.</p>
        </div>
    );
};

export default Footer;