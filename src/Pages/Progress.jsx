import React from 'react';

const Progress = () => {
    return (
        <div className='w-[1000px] h-fit bg-white mx-20 px-15 pb-15 rounded-2xl sticky top-10'>
            <main className='w-full h-full flex flex-col items-center gap-10 relative'>
                <section className='w-full bg-white flex flex-col items-center gap-5 pt-15 pb-5 sticky top-0 z-1'>
                    <h2 className='text-4xl font-semibold'>My Live progress</h2>
                    <p className='text-lg'>This is a fully automatic code stats. Used by top developers. We've always needed a plugin that silently judged my coding habits behind my back. There is alwayhs room for Devlopment!</p>
                </section>

                <section className='flex flex-wrap justify-around gap-y-7'>
                    <img className='border w-full' src="https://wakatime.com/share/@7b51f2bb-877c-4ce7-80ed-cb442b86a90d/0112ba8a-c7cd-4e96-a951-5e2d98f625d7.svg" alt="Wait a moment please.." />

                    <img className='border w-full' src="https://wakatime.com/share/@7b51f2bb-877c-4ce7-80ed-cb442b86a90d/4e294cdf-7f2a-4ba0-875d-5a7d7fc8c873.png" alt="Wait a moment please.." />
                </section>
            </main>
        </div>
    );
};

export default Progress;
