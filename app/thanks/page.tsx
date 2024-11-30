import React from 'react'
import HeadingOne from '../ui/HeadingOne'

const page = () => {
    return (
        <section className='flex flex-col gap-4 items-center'>
            <div className="flex flex-row-reverse gap-4">
                <HeadingOne text="Thank you for reaching out!" />
                <i className="icon-[material-symbols--done-all-rounded] text-4xl text-citrine" role="img" aria-hidden="true" />
            </div>

            <p>I'll get back to you as soon as possible.</p>
        </section>
    )
}

export default page