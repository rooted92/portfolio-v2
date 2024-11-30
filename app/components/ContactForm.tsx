import React from 'react'

const ContactForm = () => {
    return (
        <form action="" className='my-8 flex flex-col justify-center items-center gap-8 w-64 xxs:w-80 sm:w-96 xl:w-[40rem] xxs:mx-2'>
            <div className="flex flex-col xs:flex-row justify-between items-center gap-4 w-full">
                <input type="text" placeholder='First Name' className='border-b border-b-persimmon focus:outline-persimmon rounded-t focus:rounded focus:border-none outline-none bg-honeydew dark:bg-licorice p-2 w-full' />
                <input type="text" placeholder='Last Name' className='border-b border-b-persimmon focus:outline-persimmon rounded-t focus:rounded focus:border-none outline-none bg-honeydew dark:bg-licorice p-2 w-full' />
            </div>

            <input type="email" placeholder='Email' className='border-b border-b-persimmon focus:outline-persimmon rounded-t focus:rounded focus:border-none outline-none bg-honeydew dark:bg-licorice p-2 w-full' />

            <textarea placeholder='Message' className='border-b border-b-persimmon rounded-t focus:outline-persimmon focus:rounded focus:border-none outline-none bg-honeydew dark:bg-licorice w-full' rows={5} />
            <button type='submit' className='bg-persimmon rounded w-full p-2 mt-2 lowercase font-semibold text-lg text-licorice dark:text-honeydew hover:opacity-90 hover:w-1/3 transition-all ease-in duration-300'>Submit</button>
        </form>
    )
}

export default ContactForm