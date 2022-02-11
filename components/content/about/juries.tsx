import React from 'react'
import LayoutSection from './layout-section'
import { AboutJuriesSectionApi } from '../../../types'
import cn from 'classnames'

const Juries: React.FC<{ section: AboutJuriesSectionApi }> = ({ section }) => {
    const getJuryClassName = (index: number) => {
        const row = Math.floor(index / 3)
        const col = Math.floor(index % 3)
        if (row === col) {
            return 'text-gray'
        }
        if ((row + 1) % 3 === col) {
            return 'text-accent'
        }
        if ((row + 2) % 3 === col) {
            return 'text-white'
        }
    }

    return (
        <LayoutSection className="bg-white">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-2 uppercase">
                {section.title}
            </h2>
            <hr className="border-black border-2 mb-12" />
            <div className="grid grid-cols-1 lg:grid-cols-3 mb-24">
                <span className="col-span-2 col-start-2 text-sm md:text-base uppercase">
                    {section.description}
                </span>
            </div>
            <div className="grid grid-cols-1 gap-y-9 gap-x-4 md:grid-cols-2 xl:grid-cols-3 justify-center">
                {section.juries.map(({ id, name, description }, i) => (
                    <div
                        key={id}
                        className="col-span-1 flex flex-col items-center md:items-start"
                    >
                        <span
                            className={cn(
                                getJuryClassName(i),
                                'p-1 bg-black mb-4 text-3xl md:text-4xl lg:text-5xl leading-tight w-min uppercase'
                            )}
                        >
                            {name}
                        </span>
                        <span className="text-sm md:text-base uppercase">
                            {description}
                        </span>
                    </div>
                ))}
            </div>
        </LayoutSection>
    )
}

export default Juries
