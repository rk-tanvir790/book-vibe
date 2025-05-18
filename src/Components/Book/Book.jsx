import React from 'react';
import { CiStar } from "react-icons/ci";

const Book = ({ book }) => {
    const { image, tags, bookName, author, category, rating } = book;
    return (
        <div className='p-6 rounded-2xl border border-[#131313]/[0.15]'>
            <div className='bg-[#F3F3F3] rounded-2xl py-8 px-24 flex justify-center'>
                <img className='w-[134px] h-[166px]' src={image} alt="" />
            </div>
            <div className='mt-6'>
                <div className='flex gap-3 items-center'>
                    <button className='px-4 py-2 bg-[#23BE0A]/[0.05] rounded-4xl font-worksans font-medium text-[#23BE0A]'>{tags[0]}</button>
                    <button className='px-4 py-2 bg-[#23BE0A]/[0.05] rounded-4xl font-worksans font-medium text-[#23BE0A]'>{tags[1]}</button>
                </div>
                <div className='mt-4 mb-5'>
                    <h3 className='font-display font-bold text-2xl my-4'>{bookName}</h3>
                    <p className='font-worksans font-medium text-[#131313]/[0.8]'>By:{author}</p>
                </div>
                <div className='flex justify-between items-center border-t border-dashed border-[#131313]/[0.15] pt-5'>
                    <p className='font-worksans font-medium text-[#131313]/[0.8]'>{category}</p>
                    <div className='flex gap-2 items-center'>
                        <p className='font-worksans font-medium text-[#131313]/[0.8]'>{rating}</p>
                        <CiStar size={24} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;