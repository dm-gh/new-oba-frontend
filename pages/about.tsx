import React from 'react'
import { AboutPageApi, ContactApi } from '../types'
import About from '../components/content/about'
import { fetchAboutPage, fetchContact } from '../lib/fetch-api'

const AboutPage: React.FC<{
    about: AboutPageApi
    contact: ContactApi
}> = ({ about, contact }) => {
    return <About about={about} contact={contact} />
}

export async function getStaticProps() {
    const [aboutRes, contactRes] = await Promise.all([
        fetchAboutPage(),
        fetchContact(),
    ])

    return {
        props: {
            about: aboutRes.data.attributes,
            contact: contactRes.data.attributes,
        },
        revalidate: 1,
    }
}

export default AboutPage
