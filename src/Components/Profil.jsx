import React, { useState } from 'react';
import Mypic from '../assets/Mypic.jpg'
import Gmaps from '../assets/Icons/Gmaps.png'
import cv from '../assets/CV it.pdf'
import { FaCopy, FaLinkedinIn } from "react-icons/fa6";
import { FaMobileAlt, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { BsGithub } from 'react-icons/bs';
import { GrMailOption } from 'react-icons/gr';
import { BiWorld } from 'react-icons/bi';
import { MdOutlineTranslate } from 'react-icons/md';
import { LuCalendarClock } from 'react-icons/lu';
import { IoCheckmarkDoneSharp } from 'react-icons/io5';
import { SiGooglemaps } from 'react-icons/si';

const Profil = () => {
    // Tel
    const [telcopy, telcoping] = useState(<FaCopy className='absolute top-[8px] text-[27px] -z-1 opacity-25 group-hover:opacity-100 group-hover:text-amber-800 transition-colors duration-200' />)
    const telcopied = (text) => {
        return () => {
            navigator.clipboard.writeText(text)

            telcoping(<IoCheckmarkDoneSharp className='absolute top-[8px] text-[27px] -z-1 opacity-25 group-hover:opacity-100 group-hover:text-amber-800 transition-colors duration-200' />)

            setTimeout(() => {
                telcoping(<FaCopy className='absolute top-[8px] text-[27px] -z-1 opacity-25 group-hover:opacity-100 group-hover:text-amber-800 transition-colors duration-200' />)
            }, "1500");
        }
    }

    // Mail:
    const [mailcopy, mailcoping] = useState(<FaCopy className='text-[27px] -z-1 opacity-25 group-hover:opacity-100 group-hover:text-red-400 absolute top-[8px] transition-colors duration-200' />)
    const mailcopied = (text) => {
        return () => {
            navigator.clipboard.writeText(text)

            mailcoping(<IoCheckmarkDoneSharp className='absolute top-[8px] text-[27px] -z-1 opacity-25 group-hover:opacity-100 group-hover:text-red-400 transition-colors duration-200' />)

            setTimeout(() => {
                mailcoping(<FaCopy className='text-[27px] -z-1 opacity-25 group-hover:opacity-100 group-hover:text-red-400 absolute top-[8px] transition-colors duration-200' />)
            }, "1500");
        }
    }

    // Address


    return (
        <div className='w-[350px] ml-25 flex flex-col items-center '>

            <div className='w-[215px] h-[260px] z-1 sticky top-10'><img className='w-full h-full rounded-2xl' src={Mypic} alt="" /></div>

            <article className='w-[350px] h-fit pb-5 bg-white rounded-2xl -mt-25 pt-28 flex flex-col items-center gap-8 sticky top-50'>
                <section className='space-y-4'>
                    <div className='w-[215px] text-center'>
                        <h1 className='text-[24px] font-bold'>Ahmed Amine Benelmalih</h1>
                        <h2 className='text-[21px] font-medium'>Full Stack Developer</h2>
                        {/* <caption className='w-fit justify-start'>You Imagin, I make it Real..!</caption> */}
                    </div>

                    <div className='w-fit flex items-center gap-4'>
                        <a href='https://www.linkedin.com/in/ahmed-amine-benelmalih-45a2521b2/' target='_blank' rel="noopener noreferrer" className='p-2 rounded-lg bg-gray-100 hover:bg-blue-600 hover:in-hover:text-white transition-colors duration-200'>
                            <FaLinkedinIn className='text-[22px]' />
                        </a>
                        <a href='https://github.com/BENELMALIH-Ahmed-Amine' target='_blank' rel="noopener noreferrer" className='p-2 rounded-lg bg-gray-100 hover:bg-blue-600 hover:in-hover:text-white transition-colors duration-200'>
                            <BsGithub className='text-[22px]' />
                        </a>
                        <a href='https://t.me/BenelmalihAhmedAmine' target='_blank' rel="noopener noreferrer" className='p-2 rounded-lg bg-gray-100 hover:bg-blue-600 hover:in-hover:*:text-white transition-colors duration-200'>
                            <FaTelegramPlane className='text-blue-600 text-[22px]' />
                        </a>
                        <a href="https://wa.me/771550311?text=Salam%20alikom" target='_blank' rel="noopener noreferrer" className='p-2 rounded-lg bg-gray-100 hover:bg-blue-600 hover:in-hover:*:text-white transition-colors duration-200'>
                            <FaWhatsapp className='text-lime-600 text-[22px]' />
                        </a>
                    </div>
                </section>

                <section className='py-2 px-3 bg-gray-100 rounded-xl flex flex-col gap-3  sticky top-50'>
                    <div className='flex items-center gap-2 group' onClick={telcopied('+212 771-550-311')}>
                        <div className='p-2 rounded-lg bg-white group-hover:bg-blue-600 relative transition-colors duration-200 z-0'>
                            <FaMobileAlt className='text-amber-800 text-[27px] group-hover:opacity-0' />
                            {telcopy}
                        </div>
                        <a href='tel:+212 771-550-311' rel="noopener noreferrer">+212 771-550-311</a>
                    </div>

                    <div className='flex items-center gap-2 group' onClick={mailcopied('amine.ahmed.benel@gmail.com')}>
                        <div className='p-2 rounded-lg bg-white group-hover:bg-blue-600 relative transition-colors duration-200 z-0'>
                            <GrMailOption className='text-red-400 text-[27px] group-hover:opacity-0' />
                            {mailcopy}
                        </div>
                        <a className='hover:text-blue-500 hover:underline'>amine.ahmed.benel@gmail.com</a>
                    </div>

                    <div>
                        <a className='flex items-center gap-2 group' href='https://maps.app.goo.gl/Wm1fYmLyybstgp4P8' target='_blank' rel="noopener noreferrer">
                            <div className='p-2 rounded-lg bg-white group-hover:bg-blue-600 relative transition-colors duration-200 z-0'>
                                <BiWorld className='text-[#086739] text-[27px] group-hover:opacity-0' />
                                <SiGooglemaps className='text-[27px] -z-1 opacity-30 group-hover:opacity-100 group-hover:text-[#bd2429] transition-colors duration-200 absolute top-[8px]' />
                            </div>
                            <p>Casablanca, Morocco 🇲🇦</p>
                        </a>
                    </div>

                    <div className='flex items-center gap-2 group'>
                        <div className='p-2 rounded-lg bg-white group-hover:bg-blue-600 transition-colors duration-200'>
                            <MdOutlineTranslate className='text-blue-600 text-[27px] group-hover:text-white  transition-colors duration-200' />
                        </div>
                        <p>العربية - English - Frençais</p>
                    </div>

                    <div className='flex items-center gap-2 group'>
                        <div className='p-2 rounded-lg bg-white group-hover:bg-blue-600 transition-colors duration-200'>
                            <LuCalendarClock className='text-violet-600 text-[27px] group-hover:text-white transition-colors duration-200' />
                        </div>
                        <p>2002-06 (23)</p>
                    </div>
                </section>
                <a href={cv} download>
                    <button className='bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700'>Donwload <abbr title="a 'Curriculum Vitae', a latin term stands for 'Course of life'">C.V.</abbr></button>
                </a>

            </article>

        </div>
    );
};

export default Profil;