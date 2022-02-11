import React from 'react'
import ArrowDownIcon from '../../../assets/icons/arrow_down.svg'
import LayoutSection from './layout-section'
import { AboutConditionsSectionApi } from '../../../types'
import ReactMarkdown from 'react-markdown'

const Conditions: React.FC<{ section: AboutConditionsSectionApi }> = ({
    section,
}) => {
    const pdf = section.pdf.data.attributes

    return (
        <LayoutSection className="bg-gray">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-2 uppercase">
                {section.title}
            </h2>
            <hr className="border-black border-2 mb-12" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                <div className="col-span-1">
                    <div className="flex items-center">
                        <ArrowDownIcon className="text-4xl" />
                        <div className="ml-3 flex flex-col">
                            <span className="text-lg uppercase">
                                {pdf.ext.substr(1)}
                            </span>
                            <ReactMarkdown className="font-light text-xs uppercase">
                                {section.pdfDownload}
                            </ReactMarkdown>
                        </div>
                    </div>
                </div>
                <ReactMarkdown className="col-span-1 lg:col-span-2 uppercase">
                    {section.conditions}
                </ReactMarkdown>
            </div>
        </LayoutSection>
    )
}

export default Conditions
