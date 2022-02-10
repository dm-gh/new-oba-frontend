export type StrapiWithId<T> = T & { id: number }

export type StrapiCollectionData<T> = {
    data: StrapiWithId<{ attributes: T }>[]
}

export type StrapiSingleData<T> = {
    data: StrapiWithId<{ attributes: T }>
}

export type StrapiCollectionResponse<T> = StrapiCollectionData<T> & {
    meta: {
        pagination: {
            page: number
            pageSize: number
            pageCount: number
            total: number
        }
    }
}

export type StrapiSingleResponse<T> = StrapiSingleData<T> & {
    meta: {}
}

/********************************
 * Components
 * *****************************/

export type StrapiMediaApi = {
    name: string
    alternativeText: string
    caption: string
    width: number
    height: number
    formats: unknown
    hash: string
    ext: '.png' | string
    mime: 'image/png' | string
    size: number
    url: string
    previewUrl: unknown
    provider: 'local' | string
    provider_metadata: unknown
    createdAt: string
    updatedAt: string
}

export type SeoApi = {
    metaTitle: string
    metaDescription: string
    shareImage: StrapiSingleData<StrapiMediaApi>
}

export type LinkApi = {
    name: string
    address: string | null
}

export type JuryApi = {
    name: string
    description: string
}

/********************************
 * Single Types
 * *****************************/

export type GlobalApi = {
    createdAt: string
    updatedAt: string
    publishedAt: string
    seo: StrapiWithId<SeoApi>
    favicon: StrapiSingleData<StrapiMediaApi>
}

export type HomepageApi = {
    createdAt: string
    updatedAt: string
    publishedAt: string
    seo: StrapiWithId<SeoApi>
}

export type ContactsSectionApi = {
    address: string
    email: string
    phone: string
    title: string
    social: StrapiWithId<LinkApi>[]
    addressLatLng: [number, number]
    createdAt: string
    updatedAt: string
    publishedAt: string
    locale: string
}

export type JuriesSectionApi = {
    title: string
    description: string
    juries: StrapiWithId<JuryApi>[]
    createdAt: string
    updatedAt: string
    publishedAt: string
    locale: string
}

export type ConditionsSectionApi = {
    title: string
    conditions: string
    pdf: StrapiSingleData<StrapiMediaApi>
    pdfDownload: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    locale: string
}

export type NominationsSectionApi = {
    title: string
    nominations: StrapiCollectionData<NominationApi>
    createdAt: string
    updatedAt: string
    publishedAt: string
    locale: string
}

export type AboutContestSectionApi = {
    title: string
    description: string
    videoUrl: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    locale: string
}

/********************************
 * Collection Types
 * *****************************/

export type NominationApi = {
    createdAt: string
    updatedAt: string
    publishedAt: string
    name: string
    slug: string
    locale: string
}
