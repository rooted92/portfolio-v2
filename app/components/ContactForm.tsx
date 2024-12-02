import React from 'react'

const ContactForm = () => {
    return (
        <form action="https://formsubmit.co/99d3304219d9eb6c7a52532b58295e3b" method='POST' className='my-8 flex flex-col justify-center items-center gap-8 w-64 xxs:w-80 sm:w-96 xl:w-[40rem] xxs:mx-2'>
            <div className="flex flex-col xs:flex-row justify-between items-center gap-4 w-full">
                <input type="text" name='firstname' placeholder='First Name' className='border-b border-b-persimmon placeholder:text-citrine focus:outline-persimmon rounded-t focus:rounded-t focus:border-none outline-none bg-honeydew dark:bg-licorice p-2 w-full' required/>
                <input type="text" name='lastname' placeholder='Last Name' className='border-b border-b-persimmon placeholder:text-citrine focus:outline-persimmon rounded-t focus:rounded-t focus:border-none outline-none bg-honeydew dark:bg-licorice p-2 w-full' required/>
            </div>

            <input type="email" name='email' placeholder='Email' className='border-b border-b-persimmon placeholder:text-citrine focus:outline-persimmon rounded-t focus:rounded-t focus:border-none outline-none bg-honeydew dark:bg-licorice p-2 w-full' required/>

            <input type="text" name='subject' placeholder='Subject' className='border-b border-b-persimmon placeholder:text-citrine focus:outline-persimmon rounded-t focus:rounded-t focus:border-none outline-none bg-honeydew dark:bg-licorice p-2 w-full' required/>

            <textarea placeholder='Message' name='message' className='border-b border-b-persimmon p-2 rounded-t placeholder:text-citrine focus:outline-persimmon focus:rounded-t focus:border-none outline-none bg-honeydew dark:bg-licorice w-full' rows={5} required/>

            <input type="hidden" name="_next" value="https://pcdev.vercel.app/thanks" />

            <button type='submit' className='bg-persimmon rounded w-full p-2 mt-2 lowercase font-semibold text-lg text-licorice dark:text-honeydew hover:bg-citrine transition-all ease-in'>Submit</button>
        </form>
    )
}

export default ContactForm