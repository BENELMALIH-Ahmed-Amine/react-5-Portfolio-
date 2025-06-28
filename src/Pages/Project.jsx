import React from 'react';
import { WebsitesData } from '../Constant/Data';
import Images from '../Constant/Images';
import Icons from '../Constant/Icons';

const Project = () => {
    const Websites = WebsitesData.Websites
    console.log(Websites);

    return (
        <main className='w-[1000px] h-fit bg-white mx-20 px-15 py-15 rounded-2xl flex flex-wrap justify-around gap-y-7 sticky top-10'>
            {
                Websites.map((w) =>
                    <article className='bg-blue-200 w-[400px] h-[300px] p-2 pt-3 flex flex-col items-center gap-1.5'>
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
                        <section className='bg-amber-200 w-full h-full'>
                            <img className='w-full h-full' src={Images[w.img]} alt="f" />
                        </section>
                    </article>
                )
            }
        </main>
    );
};

export default Project;