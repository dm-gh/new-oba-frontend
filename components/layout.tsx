import React from 'react'
import Aside from './content/aside'
import Footer from './content/footer'
import { ContactsSectionApi } from '../types'

const Layout: React.FC<{ contacts: ContactsSectionApi }> = ({
    children,
    contacts,
}) => (
    <>
        <div className="font-display">
            <div className="flex">
                <main className="flex-1">{children}</main>
                <Aside />
            </div>
            <Footer contacts={contacts} />
        </div>
    </>
)

export default Layout
