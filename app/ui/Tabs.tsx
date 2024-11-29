'use client';
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Tabs = () => {
    const pathname = usePathname();

    const tabs = [
        { name: "Overview", href: "/experience" },
        { name: "Freelance", href: "/experience/freelance" },
        { name: "TFE", href: "/experience/tfe" },
    ];

    return (
        <div className="flex gap-4 border-b border-persimmon">
            {tabs.map((tab) => {
                const isActive = pathname === tab.href;
                console.log(isActive);
                console.log(pathname);
                return (
                    <Link
                        key={tab.name}
                        href={tab.href}
                        className={`flex-1 text-center py-2 ${isActive
                            ? "border-b-2 border-citrine text-citrine"
                            : "text-hookersGreen hover:text-citrine"
                            }`}
                    >
                        {tab.name}
                    </Link>
                );
            })}
        </div>
    )
}

export default Tabs