import Link from "next/link";
import React, { useState } from "react";

interface AccordionItem {
    title: string;
    description: string;
    projectHref?: string;
    repoHref?: string;
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
        <div className="w-full">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="border-b-2 border-[#f45d01] last:border-b-0"
                >
                    <button
                        onClick={() => toggleAccordion(index)}
                        className="flex justify-between items-center w-full px-4 py-3 text-lg font-semibold text-gray-800 focus:outline-none"
                    >
                        <span>{item.title}</span>
                    </button>

                    {openIndex === index && (
                        <div className="px-4 pb-4 text-gray-600">
                            <p>{item.description}</p>

                            {/* Conditionally render project/repo links */}
                            {(item.projectHref || item.repoHref) && (
                                <div className="mt-4 flex gap-4">
                                    {/* Project Link */}
                                    {item.projectHref && (
                                        <Link
                                            href={item.projectHref}
                                            className="text-blue-500 hover:underline"
                                        >
                                            View Project
                                        </Link>
                                    )}

                                    {/* Repo Link */}
                                    {item.repoHref && (
                                        <Link
                                            href={item.repoHref}
                                            className="text-blue-500 hover:underline"
                                        >
                                            View Repo
                                        </Link>
                                    )}
                                </div>
                            )}

                            {item.carousel && (
                                <div className="mt-4">{item.carousel}</div>
                            )}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion;
