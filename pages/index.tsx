import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import {
    HomepageApi,
    NominationApi,
    StrapiCollectionResponse,
    StrapiSingleResponse,
} from "../types"

const Home: React.FC<{
    homepage: HomepageApi
    nominations: NominationApi[]
}> = ({ homepage, nominations }) => {
    return (
        <Layout>
            <Seo seo={homepage.seo} />
            <div className="uk-section">
                <div className="uk-container uk-container-large">
                    {nominations.map((n) => (
                        <div key={n.slug}>{n.name}</div>
                    ))}
                    {/*<Articles articles={articles} />*/}
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    // Run API calls in parallel
    const [homepageRes, nominationsRes] = await Promise.all([
        fetchAPI<StrapiSingleResponse<HomepageApi>>("/homepage", {
            populate: {
                seo: { populate: "*" },
            },
        }),
        fetchAPI<StrapiCollectionResponse<NominationApi>>("/nominations"),
    ])

    return {
        props: {
            homepage: homepageRes.data.attributes,
            nominations: nominationsRes.data.map(
                ({ attributes }) => attributes
            ),
        },
        revalidate: 1,
    }
}

export default Home
