import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const SendMessage = (e) => {
        e.preventDefault();

        // get IDs
        const PublicId = "AqC5_edo3zDOC7AzM"
        const TemplateId = "template_yypklxj"
        const ServiceId = "service_4bvvlsa"

        // templete parameters
        const templeteParams = {
            form_name: name,
            form_email: email,
            to_name: 'Benelmalih Ahmed Amine',
            message: message
        }

        // send email
        emailjs.send(TemplateId, ServiceId, templeteParams, PublicId)
            .then((response) => {
                console.log("Email Sent Successfully", response);
                setName('')
                setEmail('')
                setMessage('')
            })
            .catch((error) => {
                console.log("Error: no Email sended", error);
            })
    }

    return (
        <main className='w-[1000px] h-fit bg-white mx-20 px-15 py-15 rounded-2xl grid place-content-center sticky top-10'>
            <section className='w-full grid place-content-cente'>
                <h2 className="text-3xl font-extrabold text-center mb-10">Send a message</h2>
                <form onSubmit={SendMessage} className="w-[380px] space-y-7">
                    <div className='flex flex-col'>
                        <label className="text-2sm font-medium mb-2">Full Name:</label>
                        <input value={name} onChange={(e) => setName(e.target.value)}
                            type="text" id="name" required
                            className="px-4 py-3 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition" />
                    </div>
                    <div className='flex flex-col'>
                        <label className="text-2sm font-medium mb-2">Email Address:</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)}
                            type="email" id="email" required
                            className="px-4 py-3 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition" />
                    </div>
                    <div className='flex flex-col'>
                        <label className="text-2sm font-medium mb-2">Message:</label>
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)}
                            type="password" id="password" required rows={5} className="px-4 py-3 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition"></textarea>
                    </div>

                    <button type='submit' className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-200">
                        Send
                    </button>
                </form>
            </section>
        </main>
    );
};

export default Contact;