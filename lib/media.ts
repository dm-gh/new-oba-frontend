import { getStrapiURL } from "./api"
import { StrapiImageApi, StrapiSingleData } from "../types"

export function getStrapiMedia(media: StrapiSingleData<StrapiImageApi>) {
    const { url } = media.data.attributes
    return url.startsWith("/") ? getStrapiURL(url) : url
}
