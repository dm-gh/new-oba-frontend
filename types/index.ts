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

export type SeoApi = {
    metaTitle: string
    metaDescription: string
    shareImage: StrapiSingleData<StrapiImageApi>
}

export type StrapiImageApi = {
    name: string
    alternativeText: string
    caption: string
    width: number
    height: number
    formats: unknown
    hash: string
    ext: ".png" | string
    mime: "image/png" | string
    size: number
    url: string
    previewUrl: unknown
    provider: "local" | string
    provider_metadata: unknown
    createdAt: string
    updatedAt: string
}

/********************************
 * Single Types
 * *****************************/

export type GlobalApi = {
    createdAt: string
    updatedAt: string
    publishedAt: string
    seo: StrapiWithId<SeoApi>
    favicon: StrapiSingleData<StrapiImageApi>
}

export type HomepageApi = {
    createdAt: string
    updatedAt: string
    publishedAt: string
    seo: StrapiWithId<SeoApi>
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
