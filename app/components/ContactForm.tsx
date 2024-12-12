import React from 'react'

const ContactForm = () => {
    return (
        <section aria-label='Contact form' className='w-full'>
            <form action="https://formsubmit.co/99d3304219d9eb6c7a52532b58295e3b" method='POST' className='my-8 flex flex-col justify-center items-center gap-8 w-64 xxs:w-80 sm:w-96 xl:w-[40rem] xxs:mx-2'>
                <fieldset className="flex flex-col xs:flex-row justify-between items-center gap-4 w-full">
                    <legend className='sr-only'>Full Name</legend>
                    <label htmlFor="firstname" className='sr-only'>First Name</label>
                    <input
                        id='firstname'
                        type="text"
                        name='firstname'
                        placeholder='First Name'
                        className='border-b border-b-persimmon placeholder:text-citrine focus:outline-persimmon rounded-t focus:rounded-t focus:border-none outline-none bg-honeydew dark:bg-licorice p-2 w-full'
                        required />
                    <label htmlFor="lastname" className='sr-only'>Last Name</label>
                    <input
                        id='lastname'
                        type="text"
                        name='lastname'
                        placeholder='Last Name'
                        className='border-b border-b-persimmon placeholder:text-citrine focus:outline-persimmon rounded-t focus:rounded-t focus:border-none outline-none bg-honeydew dark:bg-licorice p-2 w-full'
                        required />
                </fieldset>

                <label htmlFor="email" className='sr-only'>Email</label>
                <input
                    id='email'
                    type="email"
                    name='email'
                    placeholder='Email'
                    className='border-b border-b-persimmon placeholder:text-citrine focus:outline-persimmon rounded-t focus:rounded-t focus:border-none outline-none bg-honeydew dark:bg-licorice p-2 w-full'
                    required
                    aria-invalid='false'
                    aria-describedby='email-error' />

                <label htmlFor="subject" className='sr-only'>Subject</label>
                <input
                    id='subject'
                    type="text"
                    name='subject'
                    placeholder='Subject'
                    className='border-b border-b-persimmon placeholder:text-citrine focus:outline-persimmon rounded-t focus:rounded-t focus:border-none outline-none bg-honeydew dark:bg-licorice p-2 w-full'
                    required />

                <label htmlFor="message" className='sr-only'>Message</label>
                <textarea
                    id='message'
                    placeholder='Message'
                    name='message'
                    className='border-b border-b-persimmon p-2 rounded-t placeholder:text-citrine focus:outline-persimmon focus:rounded-t focus:border-none outline-none bg-honeydew dark:bg-licorice w-full'
                    rows={5}
                    required />

                <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} />

                <input
                    type="hidden"
                    name="_next"
                    value="https://pcdev.vercel.app/thanks" />

                <button
                    type='submit'
                    className='bg-persimmon rounded w-full p-2 mt-2 font-semibold text-lg text-licorice dark:text-honeydew hover:opacity-85 transition-all ease-linear'
                    aria-label='Submit the contact form'>Submit</button>
            </form>
        </section>

    )
}

export default ContactForm