import React, { useMemo } from 'react'
import cn from 'classnames'

const AspectRatio: React.FC<{ ratio: string; className?: string }> = ({
    ratio,
    className,
    children,
}) => {
    const pb = useMemo(
        () =>
            ratio
                .split(':')
                .map((v) => +v)
                .reduce((first, second) => second / first) * 100,
        [ratio]
    )
    return (
        <div
            className={cn(className, 'relative')}
            style={{ paddingBottom: pb + '%' }}
        >
            <div className="absolute inset-0">{children}</div>
        </div>
    )
}

export default AspectRatio
