import React from 'react'

const YoutubeVideo: React.FC<{ className: string; src: string }> = ({
    className,
    src,
}) => {
    return (
        <iframe
            className={className}
            src={src}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        />
    )
}

export default YoutubeVideo
