import React from 'react'
import { AboutPageApi, ContactApi } from '../../../types'
import Layout from '../../global/layout'
import Seo from '../../util/seo'
import AboutContest from './about-contest'
import Nominations from './nominations'
import Conditions from './conditions'
import Juries from './juries'
import Contacts from './contacts'

const About: React.FC<{
    about: AboutPageApi
    contact: ContactApi
}> = ({ about, contact }) => {
    return (
        <Layout contact={contact}>
            <Seo seo={about.seo} />

            <AboutContest about={about} />

            <Nominations section={about.nominationsSection} />

            <Conditions section={about.conditionsSection} />

            <Juries section={about.juriesSection} />

            <Contacts section={about.contactsSection} contact={contact} />
        </Layout>
    )
}

export default About
