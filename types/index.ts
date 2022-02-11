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

export type StrapiMediaFormat = {
    ext: string
    url: string
    hash: string
    mime: string
    name: string
    path: null
    size: number
    width: number
    height: number
}

export type StrapiMediaApi = {
    name: string
    alternativeText: string
    caption: string
    width: number
    height: number
    formats: {
        thumbnail: StrapiMediaFormat
        small: StrapiMediaFormat
        medium: StrapiMediaFormat
        large: StrapiMediaFormat
    }
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: unknown
    provider: string
    provider_metadata: unknown
    createdAt: string
    updatedAt: string
}

export type SharedSeoApi = {
    metaTitle: string
    metaDescription: string
    shareImage: StrapiSingleData<StrapiMediaApi>
}

export type SharedLinkApi = {
    name: string
    address: string | null
}

export type SharedNameAndDescriptionApi = {
    name: string
    description: string
}

export type SharedLogoApi = {
    image: StrapiSingleData<StrapiMediaApi>
}

export type AboutAboutSectionApi = {
    title: string
    description: string
    videoUrl: string
}

export type AboutNominationsSectionApi = {
    title: string
    nominations: StrapiCollectionData<NominationApi>
}

export type AboutConditionsSectionApi = {
    title: string
    conditions: string
    pdfDownload: string
    pdf: StrapiSingleData<StrapiMediaApi>
}

export type AboutJuriesSectionApi = {
    title: string
    description: string
    juries: StrapiWithId<SharedNameAndDescriptionApi>[]
}

export type AboutContactsSectionApi = {
    title: string
}

/********************************
 * Single Types
 * *****************************/

export type GlobalApi = {
    createdAt: string
    updatedAt: string
    publishedAt: string
    seo: StrapiWithId<SharedSeoApi>
    favicon: StrapiSingleData<StrapiMediaApi>
}

export type HomepageApi = {
    createdAt: string
    updatedAt: string
    publishedAt: string
    dates: string
    seo: StrapiWithId<SharedSeoApi>
    logo: StrapiWithId<SharedLogoApi>
    links: StrapiWithId<SharedLinkApi>[]
}

export type AboutPageApi = {
    seo: StrapiWithId<SharedSeoApi>
    aboutSection: StrapiWithId<AboutAboutSectionApi>
    nominationsSection: StrapiWithId<AboutNominationsSectionApi>
    conditionsSection: StrapiWithId<AboutConditionsSectionApi>
    juriesSection: StrapiWithId<AboutJuriesSectionApi>
    contactsSection: StrapiWithId<AboutContactsSectionApi>
    createdAt: string
    updatedAt: string
    publishedAt: string
    locale: string
}

export type ContactApi = {
    address: string
    email: string
    phone: string
    social: StrapiWithId<SharedLinkApi>[]
    addressLatLng: [number, number]
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
