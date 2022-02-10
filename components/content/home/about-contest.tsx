import React from 'react'
import {
    AboutContestSectionApi,
    ConditionsSectionApi,
    ContactsSectionApi,
    JuriesSectionApi,
    NominationsSectionApi,
} from '../../../types'
import AspectRatio from '../../util/aspect-ratio'
import LayoutSection from './layout-section'
import ReactMarkdown from 'react-markdown'

const AboutContest: React.FC<{
    aboutContest: AboutContestSectionApi
    nominations: NominationsSectionApi
    conditions: ConditionsSectionApi
    juries: JuriesSectionApi
    contacts: ContactsSectionApi
}> = ({ aboutContest, nominations, conditions, juries, contacts }) => {
    return (
        <LayoutSection className="bg-gray">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium mb-8 uppercase">
                {aboutContest.title}
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
                <div className="col-span-1 flex flex-col text-sm sm:text-base">
                    <hr className="border-gray-500 mb-6" />
                    <span className="mb-6 uppercase">{nominations.title}</span>
                    <span className="mb-6 uppercase">{conditions.title}</span>
                    <span className="mb-6 uppercase">{juries.title}</span>
                    <span className="mb-6 uppercase">{contacts.title}</span>
                    <hr className="border-gray-500" />
                </div>
                <div className="col-span-1 lg:col-span-3 flex flex-col lg:pt-16">
                    <AspectRatio ratio="16:9" className="mb-7">
                        <div className="bg-gray-darkest w-full h-full" />
                    </AspectRatio>

                    <ReactMarkdown className="text-sm sm:text-base uppercase">
                        {aboutContest.description}
                    </ReactMarkdown>
                </div>
            </div>
        </LayoutSection>
    )
}

export default AboutContest
