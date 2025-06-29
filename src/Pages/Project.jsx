import React from 'react';
import { WebsitesData } from '../Constant/Data';
import Images from '../Constant/Images';
import Icons from '../Constant/Icons';

const Project = () => {
    const Websites = WebsitesData.Websites
    console.log(Websites);

    return (

        <div className='w-[1000px] h-fit bg-white mx-20 px-15 pb-15 rounded-2xl  sticky top-10'>
            <main className='w-full h-full flex flex-col items-center gap-10 relative'>
                <section className='w-full   bg-white flex flex-col items-center gap-5 pt-15 pb-10 sticky top-0 z-1'>
                    <h2 className='text-4xl font-semibold'>Project I Made all a long of my learning jurny</h2>
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem mollitia molestias nisi dolorem, eaque nesciunt rerum omnis molestiae corporis magnam voluptatibus labore vitae fugiat velit soluta exercitationem recusandae laborum iusto.</p> */}
                </section>
                <section className='flex flex-wrap justify-around gap-y-7'>
                    {
                        Websites.map((w) =>
                            <article className='bg-blue-100 w-[400px] h-[300px] p-2 pt-3 flex flex-col items-center gap-3'>
                                <section className='flex items-center gap-2'>
                                    <h3 className='text-xl font-black'>Made by:</h3>
                                    <div className='flex gap-2.5'>
                                        {
                                            Array.from(w.made).map((e) =>
                                                <div className="w-8"><img className='w-full' src={Icons[e]} alt="grrr" /></div>
                                            )
                                        }
                                    </div>
                                </section>
                                <a href={w.lien} className='bg-blue-300 w-full h-full rounded-2xl'>
                                    <div className="p-1.5 h-full"><img className='w-full h-full rounded-2xl' src={Images[w.img]} alt="Project image" /></div>
                                </a>
                            </article>
                        )
                    }
                </section>
            </main>
        </div>

    );
};

export default Project;