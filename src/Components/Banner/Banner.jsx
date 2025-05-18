import React from 'react';
import bannerImg from '../../assets/pngwing 1.png';

const Banner = () => {
    return (
        <div className='flex justify-between items-center rounded-3xl bg-[#131313]/[0.05] px-[120px] py-[80px]'>
            <div>
                <h2 className='font-display font-bold text-[56px] leading-[84px] text-[#131313] max-w-[526px] mb-12'>Books to freshen up your bookshelf</h2>
                <button className='font-worksans font-bold text-xl text-white py-5 px-7 bg-[#23BE0A] rounded-lg'>View The List</button>
            </div>
            <div>
                <img className='max-w-[318px]' src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;