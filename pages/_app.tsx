import App from 'next/app'
import Head from 'next/head'
import '../assets/css/globals.css'
import { createContext } from 'react'
import { fetchAPI } from '../lib/api'
import { getStrapiMedia } from '../lib/media'
import { GlobalApi, StrapiSingleResponse } from '../types'

// Store Strapi Global object in context
export const GlobalContext = createContext<GlobalApi>(null)

const MyApp = ({ Component, pageProps }) => {
    const global: GlobalApi = pageProps.global

    return (
        <>
            <Head>
                <link
                    rel="shortcut icon"
                    href={getStrapiMedia(global.favicon)}
                />
            </Head>
            <GlobalContext.Provider value={global}>
                <Component {...pageProps} />
            </GlobalContext.Provider>
        </>
    )
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
    // Calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(ctx)
    // Fetch global site settings from Strapi
    const globalRes = await fetchAPI<StrapiSingleResponse<GlobalApi>>(
        '/global',
        {
            populate: {
                favicon: '*',
                seo: {
                    populate: '*',
                },
            },
        }
    )
    // Pass the data to our page via props
    return { ...appProps, pageProps: { global: globalRes.data.attributes } }
}

export default MyApp
