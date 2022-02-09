import React from "react"
import { getStrapiMedia } from "../lib/media"
import NextImage from "next/image"
import { StrapiImageApi, StrapiSingleData } from "../types"

const Image: React.FC<{ image: StrapiSingleData<StrapiImageApi> }> = ({
    image,
}) => {
    const { alternativeText, width, height } = image.data.attributes

    // const loader = () => {
    //   return getStrapiMedia(image)
    // }

    return (
        <NextImage
            // loader={loader}
            layout="responsive"
            width={width}
            height={height}
            objectFit="contain"
            src={getStrapiMedia(image)}
            alt={alternativeText || ""}
        />
    )
}

export default Image
