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
import { HomePage } from "../components/HomePage"

const Home: React.FC<{
    homepage: HomepageApi
    nominations: NominationApi[]
}> = ({ homepage, nominations }) => {
    return (
        <Layout>
            <Seo seo={homepage.seo} />
            <HomePage />
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
