'use client';
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Tab {
    name: string;
    href: string;
    iconName: string;
    iconClasses?: string;
}

const Tabs = () => {
    const pathname = usePathname();

    const tabs: Tab[] = [
        {
            name: "Overview",
            href: "/work",
            iconName: 'icon-[material-symbols--overview-key-outline-rounded]',
        },
        {
            name: "TFE",
            href: "/work/tfe",
            iconName: 'icon-[fa-solid--wine-glass-alt]',
        },
        {
            name: "Freelance",
            href: "/work/freelance",
            iconName: 'icon-[fa-solid--laptop-code]',
        },
        {
            name: "Projects",
            href: "/work/projects",
            iconName: 'icon-[fa-solid--project-diagram]',
        },
    ];

    return (
        <div className="flex border-b border-persimmon mb-6 w-full transition-all ease-in">
            {tabs.map((tab) => {
                const isActive = pathname === tab.href;
                console.log(isActive);
                console.log(pathname);
                return (
                    <Link
                        key={tab.name}
                        href={tab.href}
                        className={`flex-1 flex items-center gap-2 text-center py-2 ${isActive
                            ? "border-b-2 border-persimmon text-citrine"
                            : "text-hookersGreen hover:text-citrine"
                            } transition-all ease-in`}
                    >
                        <i className={`${tab.iconName} ${tab.iconClasses}`} role="img" aria-hidden="true" />
                        {tab.name}
                    </Link>
                );
            })}
        </div>
    )
}

export default Tabs