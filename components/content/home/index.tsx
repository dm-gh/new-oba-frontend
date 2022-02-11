import React from 'react'
import { ContactApi, HomepageApi } from '../../../types'
import Layout from '../../global/layout'
import Seo from '../../util/seo'
import Logo from './logo'
import cn from 'classnames'

const Home: React.FC<{
    homepage: HomepageApi
    contact: ContactApi
}> = ({ homepage, contact }) => {
    return (
        <Layout contact={contact}>
            <Seo seo={homepage.seo} />

            <div className="min-h-screen flex flex-col pb-20">
                <Logo logo={homepage.logo} className="mb-15" />
                <div className="self-center text-4xl">{homepage.dates}</div>
                <div className="relative">
                    <div className="absolute right-1/10 bottom-0 flex flex-col items-start">
                        {homepage.links.map((link, i, { length }) => (
                            <a
                                key={link.id}
                                className={cn(
                                    i !== length - 1 && 'mb-3',
                                    'text-4xl uppercase bg-black text-white p-3 font-light',
                                    'hover:bg-accent'
                                )}
                                href={link.address}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Home
