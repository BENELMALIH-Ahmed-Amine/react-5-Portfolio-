import React from 'react';
import { FiActivity, FiCode, FiPhone } from 'react-icons/fi';
import { MdDashboard, MdWorkspacesFilled } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Nav = () => {    
    return (
        <nav className='w-fit h-fit py-3.5 px-4 bg-white rounded-2xl space-y-3 font-semibold sticky top-10'>
            <Link to={'/'}>
            <div className="px-2 py-2 rounded-xl flex flex-col items-center gap-y-1 text-amber-700 hover:bg-blue-600 hover:in-hover:text-white transition-colors duration-300"><MdDashboard className='text-[32px]'/>About</div>
            </Link>
            <Link to={'/Skils'}>
            <div className="px-2 py-2 rounded-xl flex flex-col items-center gap-y-1 text-emerald-500 hover:bg-blue-600 hover:in-hover:text-white transition-colors duration-300"><FiCode className='text-[32px]'/>Skils</div>
            </Link>
            <Link to={'/Projects'}>
            <div className="px-2 py-2 rounded-xl flex flex-col items-center gap-y-1 text-orange-400 hover:bg-blue-600 hover:in-hover:text-white transition-colors duration-300"><MdWorkspacesFilled className='text-[32px]'/>Projects</div>
            </Link>
            <Link to={'/Progress'}>
            <div className="px-2 py-2 rounded-xl flex flex-col items-center gap-y-1 text-purple-600 hover:bg-blue-600 hover:in-hover:text-white transition-colors duration-300"><FiActivity className='text-[32px]'/>Progress</div>
            </Link>
            <Link to={'/Contact'}>
            <div className="px-2 py-2 rounded-xl flex flex-col items-center gap-y-1 gap-0.5 text-rose-500 hover:bg-blue-600 hover:in-hover:text-white transition-colors duration-300"><FiPhone className='text-[32px]'/>Contact</div>
            </Link>
        </nav>
    );
};

export default Nav;