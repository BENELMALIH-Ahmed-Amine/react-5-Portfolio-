import React from 'react';
import { ToolsData } from '../Constant/Data';
import Icons from '../Constant/Icons';

const Skils = () => {
    const icons = ToolsData.Tools
    console.log(icons);

    return (
        <div className='w-[1000px] h-fit bg-white mx-20 px-15 pb-15 rounded-2xl sticky top-10'>
            <main className='w-full h-full flex flex-col items-center gap-10 relative'>
                <section className='bg-white flex flex-col items-center gap-5 pt-15 pb-10 sticky top-0 z-1'>
                    <h2 className='text-4xl font-semibold'>Langues & Tools</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem mollitia molestias nisi dolorem, eaque nesciunt rerum omnis molestiae corporis magnam voluptatibus labore vitae fugiat velit soluta exercitationem recusandae laborum iusto.</p>
                </section>

                <section className='flex flex-wrap justify-center gap-x-15 gap-y-10  sticky top-50'>
                    {
                        icons.map((i) =>
                            <article className="flex flex-col items-center gap-5">
                                <div className="w-[100px]"><img className='w-full h-full' src={Icons[i.icon]} alt="" /></div>
                                <section className='w-[240px] p-3 flex flex-col items-center gap-1.5'>
                                    <h3 className='text-2xl font-semibold'>{i.name}</h3>

                                    <ul className='space-y-1 font-medium'>{i.details.map((e)=>
                                        <li>{e}</li>
                                    )}</ul>
                                </section>
                            </article>
                        )
                    }
                </section>
            </main>
        </div>
    );
};

export default Skils;