import React from 'react'

interface Icon {
    name: string,
    iconClasses?: string
}



interface IconsProps {
    iconItems: Icon[]
    additonalClasses?: string
}

const Icons = ({iconItems, additonalClasses = 'flex gap-3 mt-2'}: IconsProps) => {
    return (
        <div className={`${additonalClasses}`}>
            {
                iconItems.map((iconItem, index) => (
                    <i key={index} className={`${iconItem.name} ${iconItem.iconClasses} text-hookersGreen text-2xl`} role="img" aria-hidden="true" />
                ))
            }
        </div>
    )
}

export default Icons