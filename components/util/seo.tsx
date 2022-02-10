import React from 'react'
import Head from 'next/head'
import { useContext } from 'react'
import { GlobalContext } from '../../pages/_app'
import { getStrapiMedia } from '../../lib/media'
import { SeoApi } from '../../types'

const Seo: React.FC<{ seo: SeoApi }> = ({ seo }) => {
    const { seo: defaultSeo } = useContext(GlobalContext)
    const seoWithDefaults: SeoApi = {
        ...defaultSeo,
        ...seo,
    }
    const fullSeo = {
        ...seoWithDefaults,
        // Get full image URL
        shareImage: getStrapiMedia(seoWithDefaults.shareImage),
    }

    return (
        <Head>
            {fullSeo.metaTitle && (
                <>
                    <title>{fullSeo.metaTitle}</title>
                    <meta property="og:title" content={fullSeo.metaTitle} />
                    <meta name="twitter:title" content={fullSeo.metaTitle} />
                </>
            )}
            {fullSeo.metaDescription && (
                <>
                    <meta
                        name="description"
                        content={fullSeo.metaDescription}
                    />
                    <meta
                        property="og:description"
                        content={fullSeo.metaDescription}
                    />
                    <meta
                        name="twitter:description"
                        content={fullSeo.metaDescription}
                    />
                </>
            )}
            {fullSeo.shareImage && (
                <>
                    <meta property="og:image" content={fullSeo.shareImage} />
                    <meta name="twitter:image" content={fullSeo.shareImage} />
                    <meta name="image" content={fullSeo.shareImage} />
                </>
            )}
            <meta name="twitter:card" content="summary_large_image" />
        </Head>
    )
}

export default Seo
