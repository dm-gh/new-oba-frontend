import React from 'react'
import Footer from './content/footer'
import Contacts from './content/home/contacts'
import Juries from './content/home/juries'
import Conditions from './content/home/conditions'
import Nominations from './content/home/nominations'
import AboutContest from './content/home/about-contest'
import {
    AboutContestSectionApi,
    ConditionsSectionApi,
    ContactsSectionApi,
    JuriesSectionApi,
    NominationsSectionApi,
} from '../types'
import Aside from './content/aside'

export const HomePage: React.FC<{
    aboutContest: AboutContestSectionApi
    nominations: NominationsSectionApi
    conditions: ConditionsSectionApi
    juries: JuriesSectionApi
    contacts: ContactsSectionApi
}> = ({ aboutContest, nominations, conditions, juries, contacts }) => {
    return (
        <div className="font-display">
            <div className="flex">
                <main className="flex-1">
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
                </main>
                <Aside />
            </div>
            <Footer contacts={contacts} />
        </div>
    )
}
