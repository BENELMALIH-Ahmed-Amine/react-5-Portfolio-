import React from 'react';

const NotFound = () => {
    return (
        <main className='w-full h-[100vh] grid place-content-center'>
            <div className='flex flex-col items-center gap-5'>
                <h1 className='text-8xl font-black'>ERROR 404</h1>
                <p className='text-xl'>The page your looking for doesn't exist.</p>
            </div>
        </main>
    );
};

export default NotFound;