import React from 'react'
import HeadingOne from '../ui/HeadingOne'


const page = () => {
  return (
    <section className='flex flex-col justify-center items-center mx-2'>
        <HeadingOne text='Experience' />

        <div className="grid grid-cols-1 auto-rows-auto">
            <div className="flex flex-col">
                <h2 className='bg-gradient-to-r from-citrine to-persimmon bg-clip-text text-transparent bg-transparent text-lg'>Trinchero Family Estates</h2>
            </div>
            <div className="flex flex-col">
                <h2>Sutter Home</h2>
            </div>
            <div className="flex flex-col">
                <h2>Neyers Vineyards</h2>
            </div>
        </div>
    </section>
  )
}

export default page