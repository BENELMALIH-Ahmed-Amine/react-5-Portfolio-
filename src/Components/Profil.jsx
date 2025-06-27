import React from 'react';
import Mypic from '../assets/Mypic.jpg'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaMobileAlt, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { BsGithub } from 'react-icons/bs';
import { GrMailOption } from 'react-icons/gr';
import { BiWorld } from 'react-icons/bi';
import { MdOutlineTranslate } from 'react-icons/md';
import { LuCalendarClock } from 'react-icons/lu';

const Profil = () => {
    return (
        <div className='w-[350px] ml-25 flex flex-col items-center '>

            <div className='w-[215px] h-[260px] z-1 sticky top-10'><img className='w-full h-full rounded-2xl' src={Mypic} alt="" /></div>

            <article className='w-[350px] h-fit pb-5 bg-white rounded-2xl -mt-25 pt-28 flex flex-col items-center gap-10  sticky top-50'>
                <section className='space-y-4'>
                    <div className='w-[215px] text-center'>
                        <h1 className='text-[24px] font-bold'>Ahmed Amine Benelmalih</h1>
                        <h2 className='text-[21px] font-medium'>Full Stack Developer</h2>
                        {/* <caption className='w-fit justify-start'>You Imagin, I make it Real..!</caption> */}
                    </div>

                    <div className='w-fit flex items-center gap-4'>
                        <div className='p-2 rounded-lg bg-gray-100 hover:bg-blue-600 hover:in-hover:text-white'>
                            <FaLinkedinIn className='text-[22px]' />
                        </div>
                        <div className='p-2 rounded-lg bg-gray-100 hover:bg-blue-600 hover:in-hover:text-white'>
                            <BsGithub className='text-[22px]' />
                        </div>
                        <div className='p-2 rounded-lg bg-gray-100 hover:bg-blue-600 hover:in-hover:text-white'>
                            <FaTelegramPlane className='text-blue-600 text-[22px]' />
                        </div>
                        <div className='p-2 rounded-lg bg-gray-100 hover:bg-blue-600 hover:in-hover:text-white'>
                            <FaWhatsapp className='text-lime-600 text-[22px]' />
                        </div>
                    </div>
                </section>

                <section className='py-2 px-3 bg-gray-100 rounded-xl flex flex-col gap-3  sticky top-50'>
                    <div className='flex items-center gap-2'>
                        <div className='p-2 rounded-lg bg-white hover:bg-blue-600'>
                            <FaMobileAlt className='text-[27px]' />
                        </div>
                        <p>+212 771-550-311</p>
                    </div>

                    <div className='flex items-center gap-2'>
                        <div className='p-2 rounded-lg bg-white hover:bg-blue-600'>
                            <GrMailOption className='text-[27px]' />
                        </div>
                        <p>amine.ahmed.benel@gmail.com</p>
                    </div>

                    <div className='flex items-center gap-2'>
                        <div className='p-2 rounded-lg bg-white hover:bg-blue-600'>
                            <BiWorld className='text-[27px]' />
                        </div>
                        <p>Morocco 🇲🇦</p>
                    </div>

                    <div className='flex items-center gap-2'>
                        <div className='p-2 rounded-lg bg-white hover:bg-blue-600'>
                            <MdOutlineTranslate className='text-[27px]' />
                        </div>
                        <p>العربية - English - Frençais</p>
                    </div>

                    <div className='flex items-center gap-2'>
                        <div className='p-2 rounded-lg bg-white hover:bg-blue-600'>
                            <LuCalendarClock className='text-[27px]' />
                        </div>
                        <p>2002-06 (23)</p>
                    </div>
                </section>
            </article>

        </div>
    );
};

export default Profil;