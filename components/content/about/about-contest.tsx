import React from 'react'
import { AboutPageApi } from '../../../types'
import AspectRatio from '../../util/aspect-ratio'
import LayoutSection from './layout-section'
import ReactMarkdown from 'react-markdown'
import YoutubeVideo from '../../util/youtube-video'

const AboutContest: React.FC<{
    about: AboutPageApi
}> = ({ about }) => {
    return (
        <LayoutSection className="bg-gray">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium mb-8 uppercase">
                {about.aboutSection.title}
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
                <div className="col-span-1 flex flex-col text-sm sm:text-base">
                    <hr className="border-gray-500 mb-6" />
                    <span className="mb-6 uppercase">
                        {about.nominationsSection.title}
                    </span>
                    <span className="mb-6 uppercase">
                        {about.conditionsSection.title}
                    </span>
                    <span className="mb-6 uppercase">
                        {about.juriesSection.title}
                    </span>
                    <span className="mb-6 uppercase">
                        {about.contactsSection.title}
                    </span>
                    <hr className="border-gray-500" />
                </div>
                <div className="col-span-1 lg:col-span-3 flex flex-col lg:pt-16">
                    <AspectRatio ratio="16:9" className="mb-7">
                        <YoutubeVideo
                            src={about.aboutSection.videoUrl}
                            className="bg-gray-darkest w-full h-full"
                        />
                    </AspectRatio>

                    <ReactMarkdown className="text-sm sm:text-base uppercase">
                        {about.aboutSection.description}
                    </ReactMarkdown>
                </div>
            </div>
        </LayoutSection>
    )
}

export default AboutContest
