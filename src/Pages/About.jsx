import React from 'react';
import Biology from '../assets/Biology.png'
import Devlopment from '../assets/Devlopment.png'
import hero from '../assets/hero.jpg'

const About = () => {
    return (
        <main className='w-[1000px] h-fit bg-white mx-20 px-15 py-15 rounded-2xl space-y-12 text-lg sticky top-10'>
            <h2 className='text-4xl font-bold text-center mb-15'>I wasn't always a Devloper.. But I am!</h2>

            
            <div className='w-full flex flex-codl items-center justify-center gap-10'>
                    <div className='w-[350px] h-[400px]'><img className='w-full h-full border-2' src={hero} alt="" /></div>
                    <p className='w-[300px]'>Hi, I'm a <span className='text-xl font-semibold'>Full Stack Developer</span>, I create web solutions for your problemes and limitations. All what you see, and what is necessary for it to work behind the backgoud.</p>
                </div>

            <section className='flex flex-col items-center gap-y-7'>
                <div className='flex flex-col items-center gap-3'>
                    <p>For years, I was a <span className='text-xl font-semibold'>Biologist</span>, I learnd the Truth of the Humman body from the scrash, How the plants grow and How the Life works so i can cure desises & solve misteeries.</p>
                    <div className='w-[450px] h-[240px] border-blue-600 border-10 rounded-xl'><img className='w-full h-full' src={Biology} alt="Biology" /></div>
                </div>

                <div className='flex flex-col items-center gap-3'>
                    <p>
                        But I didn't stop there..
                        <br />
                        I wanted to learn how <span className='text-xl font-semibold'>to speak with machins</span>. Now, I can resolve problemes & create answers, of course Not just in Biology, but in generaly all fileds!
                    </p>
                    <div className='w-[450px] h-[240px] border-blue-600 border-10 rounded-xl'><img className='w-full h-full' src={Devlopment} alt="Devlopment" /></div>
                </div>
            </section>

            <p className='text-xl font-semibold italic text-center'>
                Imagin widelly, Tell me what you need, and I Will be Sure to Make it Real..

            </p>
        </main>
    );
};

export default About;