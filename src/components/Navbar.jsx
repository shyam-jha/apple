import React from 'react';
import { appleImg, bagImg, searchImg } from '../utils';
import { navLists } from '../constants';


const Navbar = () => {
    return (
        <div>
            <nav className='w-full py-5 px-5 flex justify-between items-center sm:px-10'>
                <img src={appleImg} alt="apple" width={14} height={18} />

                <div className='flex justify-center items-center gap-5 max-sm:hidden'>
                    {navLists.map((nav) => (
                        <div className='text-sm cursor-pointer text-gray hover:text-white transition-all'>
                            {nav}
                        </div>
                    ))}
                </div>

                <div className='flex items-baseline  gap-7 max-sm:justify-end max-sm:flex-1 p-4'>
                    <img src={searchImg} alt='search' width={18} height={18} />
                    <img src={bagImg} alt='bag' width={18} height={18} />
                </div>
            </nav>
        </div>
    )
}

export default Navbar