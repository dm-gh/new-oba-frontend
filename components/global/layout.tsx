import React from 'react'
import Aside from './aside'
import Footer from './footer'
import { ContactApi } from '../../types'

const Layout: React.FC<{ contact: ContactApi }> = ({ children, contact }) => (
    <>
        <div className="font-display">
            <div className="flex">
                <main className="flex-1">{children}</main>
                <Aside />
            </div>
            <Footer contact={contact} />
        </div>
    </>
)

export default Layout
