import React, { useCallback } from 'react'
import cn from 'classnames'

const Aside = () => {
    return (
        <aside className="flex-shrink-0 w-12 sm:w-16 md:w-20 bg-white flex flex-col items-center pt-4">
            <ToggleLangButton />
        </aside>
    )
}

const ToggleLangButton: React.FC<{ className?: string }> = ({ className }) => {
    const onClick = useCallback(() => {
        console.log('click!')
    }, [])

    return (
        <button
            className={cn(
                className,
                'text-accent uppercase w-12 h-12 text-xs font-medium hover:bg-gray-50'
            )}
            onClick={onClick}
        >
            EN
        </button>
    )
}

export default Aside
