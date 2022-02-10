import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/util/seo'
import { fetchAPI } from '../lib/api'
import {
    AboutContestSectionApi,
    ConditionsSectionApi,
    ContactsSectionApi,
    HomepageApi,
    JuriesSectionApi,
    NominationsSectionApi,
    StrapiSingleResponse,
} from '../types'
import AboutContest from '../components/content/home/about-contest'
import Nominations from '../components/content/home/nominations'
import Conditions from '../components/content/home/conditions'
import Juries from '../components/content/home/juries'
import Contacts from '../components/content/home/contacts'

const Home: React.FC<{
    homepage: HomepageApi
    aboutContest: AboutContestSectionApi
    nominations: NominationsSectionApi
    conditions: ConditionsSectionApi
    juries: JuriesSectionApi
    contacts: ContactsSectionApi
}> = ({
    homepage,
    aboutContest,
    nominations,
    conditions,
    juries,
    contacts,
}) => {
    return (
        <Layout contacts={contacts}>
            <Seo seo={homepage.seo} />
            <AboutContest
                aboutContest={aboutContest}
                nominations={nominations}
                conditions={conditions}
                juries={juries}
                contacts={contacts}
            />

            <Nominations nominations={nominations} />

            <Conditions conditions={conditions} />

            <Juries juries={juries} />

            <Contacts contacts={contacts} />
        </Layout>
    )
}

export async function getStaticProps() {
    // Run API calls in parallel
    const [
        homepageRes,
        aboutContestRes,
        nominationsRes,
        conditionsRes,
        juriesRes,
        contactsRes,
    ] = await Promise.all([
        fetchAPI<StrapiSingleResponse<HomepageApi>>('/homepage', {
            populate: {
                seo: { populate: '*' },
            },
        }),
        fetchAPI<StrapiSingleResponse<AboutContestSectionApi>>(
            '/about-contest-section'
        ),
        fetchAPI<StrapiSingleResponse<NominationsSectionApi>>(
            '/nominations-section',
            { populate: '*' }
        ),
        fetchAPI<StrapiSingleResponse<ConditionsSectionApi>>(
            '/conditions-section',
            { populate: '*' }
        ),
        fetchAPI<StrapiSingleResponse<JuriesSectionApi>>('/juries-section', {
            populate: '*',
        }),
        fetchAPI<StrapiSingleResponse<ContactsSectionApi>>(
            '/contacts-section',
            { populate: '*' }
        ),
    ])

    return {
        props: {
            homepage: homepageRes.data.attributes,
            aboutContest: aboutContestRes.data.attributes,
            nominations: nominationsRes.data.attributes,
            conditions: conditionsRes.data.attributes,
            juries: juriesRes.data.attributes,
            contacts: contactsRes.data.attributes,
        },
        revalidate: 1,
    }
}

export default Home
