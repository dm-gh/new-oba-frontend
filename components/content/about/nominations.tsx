import React from 'react'
import LayoutSection from './layout-section'
import { NominationApi, NominationsSectionApi } from '../../../types'
import cn from 'classnames'

const Nominations: React.FC<{ nominations: NominationsSectionApi }> = ({
    nominations,
}) => {
    const renderNominationWithIndex = (
        nominationApi: NominationApi,
        index: number
    ): React.ReactElement => {
        switch (index % 10) {
            case 0:
                return (
                    <>
                        <span className="p-1 bg-black text-gray uppercase">
                            {nominationApi.name}
                        </span>
                        <div className="flex-1-100" />
                    </>
                )
            case 1:
                return (
                    <>
                        <span className="p-1 bg-black text-white uppercase">
                            {nominationApi.name}
                        </span>
                    </>
                )
            case 2:
                return (
                    <>
                        <span className="p-1 text-accent uppercase">
                            {nominationApi.name}
                        </span>
                        <div className="flex-1-100" />
                    </>
                )
            case 3:
                return (
                    <>
                        <div
                            className="flex-1-100"
                            style={{ maxWidth: '7.5rem' }}
                        />

                        <span className="p-1 bg-black text-gray uppercase">
                            {nominationApi.name}
                        </span>
                        <div className="flex-1-100" />
                    </>
                )
            case 4:
                return (
                    <>
                        <div
                            className="flex-1-100"
                            style={{ maxWidth: '18.75rem' }}
                        />

                        <span className="p-1 text-black uppercase">
                            {nominationApi.name}
                        </span>

                        <div className="flex-1-100" />
                    </>
                )
            case 5:
                return (
                    <>
                        <div
                            className="flex-1-100"
                            style={{ maxWidth: '5.375rem' }}
                        />

                        <span className="p-1 text-accent uppercase">
                            {nominationApi.name}
                        </span>

                        <div className="flex-1-100" />
                    </>
                )
            case 6:
                return (
                    <>
                        <div
                            className="flex-1-100"
                            style={{ maxWidth: '5.375rem' }}
                        />

                        <span className="p-1 text-black uppercase">
                            {nominationApi.name}
                        </span>
                    </>
                )
            case 7:
                return (
                    <>
                        <span className="p-1 bg-black text-accent uppercase">
                            {nominationApi.name}
                        </span>

                        <div className="flex-1-100" />
                    </>
                )
            case 8:
                return (
                    <>
                        <div
                            className="flex-1-100"
                            style={{ maxWidth: '28.25rem' }}
                        />

                        <span className="p-1 bg-black text-white uppercase">
                            {nominationApi.name}
                        </span>

                        <div className="flex-1-100" />
                    </>
                )
            case 9:
                return (
                    <>
                        <div
                            className="flex-1-100"
                            style={{ maxWidth: '38.125rem' }}
                        />

                        <span className="p-1 text-black uppercase">
                            {nominationApi.name}
                        </span>

                        <div className="flex-1-100" />
                    </>
                )
        }
    }

    return (
        <LayoutSection className="bg-white">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-2 uppercase">
                {nominations.title}
            </h2>
            <hr className="border-black border-2 mb-12" />
            <div
                className={cn(
                    'text-xl sm:text-3xl md:text-4xl lg:text-5xl',
                    'justify-center md:justify-start',
                    'text-center md:text-left',
                    'tracking-wide leading-tight',
                    'flex flex-wrap'
                )}
            >
                {nominations.nominations.data.map((nomination, i) => (
                    <React.Fragment key={nomination.id}>
                        {renderNominationWithIndex(nomination.attributes, i)}
                    </React.Fragment>
                ))}
            </div>
        </LayoutSection>
    )
}

export default Nominations
