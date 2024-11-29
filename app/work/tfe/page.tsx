import HeadingOne from '@/app/ui/HeadingOne'
import React from 'react'

const page = () => {
  return (
    <section>
        <HeadingOne text='Trinchero Family Estates' />
        <div className="flex flex-col">
                <h2>Sutter Home</h2>
            </div>
            <div className="flex flex-col">
                <h2>Neyers Vineyards</h2>
            </div>
    </section>
  )
}

export default page