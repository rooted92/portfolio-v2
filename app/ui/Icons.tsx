import React from 'react'

interface Icon {
    icon: string,
    iconClasses: string
}

interface IconsProps {
    iconItems: Icon[]
}

const Icons = ({iconItems}: IconsProps) => {
    return (
        <div className="flex gap-3 mt-2">
            {
                iconItems.map((iconItem, index) => (
                    <i key={index} className={`${iconItem.icon} ${iconItem.iconClasses} text-hookersGreen text-2xl`} role="img" aria-hidden="true" />
                ))
            }
        </div>
    )
}

export default Icons