import React from 'react'
import { AboutContactsSectionApi, ContactApi } from '../../../types'
import cn from 'classnames'
import LayoutSection from './layout-section'
import AspectRatio from '../../util/aspect-ratio'
import YandexMap from '../../util/yandex-map'

const Contacts: React.FC<{
    section: AboutContactsSectionApi
    contact: ContactApi
}> = ({ section, contact }) => {
    return (
        <LayoutSection className="bg-white">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-2 uppercase">
                {section.title}
            </h2>
            <hr className="border-black border-2 mb-12" />
            <div className="grid grid-cols-1 lg:grid-cols-3 mb-24">
                <div className="col-span-1 lg:col-span-2 lg:col-start-2 flex flex-col text-sm">
                    <span className="mb-2 uppercase">{contact.address}</span>
                    <span className="mb-2 uppercase">{contact.phone}</span>
                    <span className="mb-6 uppercase">{contact.email}</span>
                    <span className="flex mb-12">
                        {contact.social.map(({ name, address, id }, i) => (
                            <a
                                key={id}
                                className={cn(
                                    i !== 0 && 'ml-6 md:ml-12',
                                    'uppercase'
                                )}
                                href={address}
                            >
                                {name}
                            </a>
                        ))}
                    </span>
                    <AspectRatio ratio="16:9">
                        <YandexMap
                            addressLatLng={contact.addressLatLng}
                            className="bg-gray w-full h-full"
                        />
                    </AspectRatio>
                </div>
            </div>
        </LayoutSection>
    )
}

export default Contacts
