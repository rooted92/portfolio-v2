'use client';
import React from 'react'
import { useState } from 'react';
// import Icons from '../ui/Icons';
import Link from 'next/link';
import SkillIcon from '../ui/SkillIcon';

interface Tab {
    name: string;
    tag: string;
    iconName: string;
    iconClasses?: string;
}

interface Skill {
    name: string;
    tag: string;
    url: string;
    iconName: string;
    iconClasses?: string;
}

interface SkillsTabsProps {
    tabs: Tab[]
    skills: Skill[]
}

const SkillsTabs = ({ tabs, skills }: SkillsTabsProps) => {
    const [filteredSkills, setFilteredSkills] = useState<Skill[]>(skills);
    const [activeTab, setActiveTab] = useState<string | null>(null);

    const handleFilter = (tag: string | null) => {
        setActiveTab(tag);
        setFilteredSkills(tag ? skills.filter((skill) => skill.tag === tag) : skills);
    }

    return (
        <>
            <div className="grid grid-cols-2 sm:flex sm:border-b border-persimmon mb-6 w-11/12 sm:w-9/12 transition-all ease-in">
                {/* Tabs */}
                <button
                    onClick={() => handleFilter(null)} // Show all skills
                    className={`col-span-2 flex-1 flex items-center justify-center sm:justify-start gap-2 py-2 ${activeTab === null
                        ? 'border-b-2 border-persimmon text-citrine'
                        : 'text-hookersGreen hover:text-citrine'
                        } transition-all ease-in`}
                >
                    <i className="icon-[mdi--view-list]" role="img" aria-hidden="true" />
                    All
                </button>

                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => handleFilter(tab.tag)}
                        className={`flex-1 flex items-center justify-center sm:justify-start gap-2 py-2 ${activeTab === tab.tag
                            ? 'border-b-2 border-persimmon text-citrine'
                            : 'text-hookersGreen hover:text-citrine'
                            } transition-all ease-in`}
                    >
                        <i className={`${tab.iconName} ${tab.iconClasses}`} role="img" aria-hidden="true" />
                        {tab.name}
                    </button>
                ))}
            </div>
            <div className='flex flex-wrap items-center justify-center gap-6 xxs:gap-8 xs:gap-10 w-11/12 xxs:w-8/12 md:w-1/2'>
                {
                    filteredSkills.map((skill) => (
                        <SkillIcon key={skill.name} icon={skill} />
                    ))
                }
            </div>

        </>
    )
}

export default SkillsTabs