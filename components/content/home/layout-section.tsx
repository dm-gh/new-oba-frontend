import React from 'react'
import cn from 'classnames'

const LayoutSection: React.FC<{ className?: string }> = ({
    className,
    children,
}) => {
    return (
        <section
            className={cn(
                className,
                'px-8 pt-12 pb-12',
                'sm:px-12 sm:pt-16 sm:pb-16',
                'md:px-16 md:pt-20 md:pb-24',
                'lg:px-20 lg:pt-24 lg:pb-32'
            )}
        >
            {children}
        </section>
    )
}

export default LayoutSection
