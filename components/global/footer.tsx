import React from 'react'
import { ContactApi } from '../../types'
import cn from 'classnames'

const Footer: React.FC<{ contact: ContactApi }> = ({ contact }) => {
    return (
        <footer className="bg-black px-8 sm:px-12 md:px-16 lg:px-20 py-12 flex flex-col md:flex-row justify-between">
            <div className="text-md md:text-lg text-white uppercase">
                Sponsors
            </div>
            <div className="flex flex-col text-sm text-white">
                <span className="flex mb-7">
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
                <span className="mb-2 uppercase">{contact.address}</span>
                <span className="mb-2 uppercase">{contact.phone}</span>
                <span className="uppercase">{contact.email}</span>
            </div>
        </footer>
    )
}

export default Footer
