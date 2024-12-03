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
        <Link href={icon.url} title={icon.name} target='_blank'>
            <i className={`${icon.iconName} ${icon.iconClasses} text-hookersGreen hover:text-persimmon dark:hover:text-honeydew hover:scale-110 hover:-translate-y-1 text-2xl transition-all ease-linear`} role="img" aria-hidden="true" />
        </Link>
    )
}

export default SkillIcon