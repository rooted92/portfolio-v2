'use client';

import React, { useState } from "react";

interface AccordionItem {
    title: string;
    description: string;
    projectHref?: string;
    repoHref?: string;
    icons: React.ReactNode;
    carousel?: React.ReactNode;
}

interface AccordionProps {
    items: AccordionItem[];
}

const Accordion = ({ items }: AccordionProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full mt-6">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="border-2 rounded-md dark:border-honeydew border-licorice mb-3"
                >
                    <button
                        onClick={() => toggleAccordion(index)}
                        className="flex justify-between items-center w-full px-4 py-3 text-lg font-semibold hover:text-persimmon transition-all ease-in"
                    >
                        <span>{item.title}</span>
                        {openIndex === index ? (
                            <i
                                className="icon-[solar--arrow-up-broken]"
                                role="img"
                                aria-hidden="true"
                            ></i>
                        ) : (
                            <i
                                className="icon-[solar--arrow-down-broken]"
                                role="img"
                                aria-hidden="true"
                            ></i>
                        )}
                    </button>

                    {/* Accordion Content with Smooth Transition */}
                    <div
                        className={`overflow-hidden transition-all duration-500 ${openIndex === index ? "max-h-[1000px]" : "max-h-0"
                            }`}
                    >
                        <div className="px-4 pb-4 dark:text-honeydew">
                            <p className="text-pretty">{item.description}</p>
                            <div className="flex gap-3 mt-2">{item.icons}</div>

                            {(item.projectHref || item.repoHref) && (
                                <div className="mt-4 flex gap-4">
                                    {item.projectHref && (
                                        <a
                                            href={item.projectHref}
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            className="hover:text-citrine underline decoration-persimmon decoration-2 hover:no-underline  transition-all ease-in"
                                        >
                                            view project
                                        </a>
                                    )}
                                    {item.repoHref && (
                                        <a
                                            href={item.repoHref}
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            className="hover:text-citrine underline decoration-persimmon decoration-2 hover:no-underline  transition-all ease-in"
                                        >
                                            view repo
                                        </a>
                                    )}
                                </div>
                            )}

                            {item.carousel && (
                                <div className="mt-4">{item.carousel}</div>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
