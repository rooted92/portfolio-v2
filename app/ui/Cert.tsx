import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface Cert {
    url: string,
    title: string,
    imgSrc: string,
    imgAlt: string,
}

interface CertProps {
    cert: Cert,
}

const Cert = ({cert}: CertProps) => {
    return (
        <Link href={cert.url} target='_blank' title={cert.title}>
            <Image src={cert.imgSrc} alt={cert.imgAlt} width={400} height={400} className='rounded shadow shadow-licorice hover:scale-95 hover:opacity-90 transition-all ease-in' />
        </Link>
    )
}

export default Cert