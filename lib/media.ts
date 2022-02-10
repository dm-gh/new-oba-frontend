import { getStrapiURL } from './api'
import { StrapiMediaApi, StrapiSingleData } from '../types'

export function getStrapiMedia(media: StrapiSingleData<StrapiMediaApi>) {
    const { url } = media.data.attributes
    return url.startsWith('/') ? getStrapiURL(url) : url
}
