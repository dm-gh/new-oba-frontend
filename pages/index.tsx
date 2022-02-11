import React from 'react'
import Home from '../components/content/home'
import { ContactApi, HomepageApi } from '../types'
import { fetchContact, fetchHomePage } from '../lib/fetch-api'

const HomePage: React.FC<{
    homepage: HomepageApi
    contact: ContactApi
}> = ({ homepage, contact }) => {
    return <Home homepage={homepage} contact={contact} />
}

export async function getStaticProps() {
    const [homepageRes, contactRes] = await Promise.all([
        fetchHomePage(),
        fetchContact(),
    ])

    return {
        props: {
            homepage: homepageRes.data.attributes,
            contact: contactRes.data.attributes,
        },
        revalidate: 1,
    }
}

export default HomePage
