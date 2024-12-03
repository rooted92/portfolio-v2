import React from 'react'
import Link from 'next/link'

interface Icon {
    name: string,
    url: string,
    tag: string,
    iconName: string
    iconClasses?: string
}

interface SkillIconProps {
    icon: Icon,
}

const SkillIcon = ({ icon }: SkillIconProps) => {
    return (
        <Link href={icon.url} title={icon.name} target='_blank' className='text-licorice dark:text-honeydew hover:text-citrine border-b-2 hover:border-b-transparent border-b-persimmon hover:scale-125 text-3xl transition-all ease-linear'>
            <i className={`${icon.iconName} ${icon.iconClasses}  `} role="img" aria-hidden="true" />
        </Link>
    )
}

export default SkillIcon