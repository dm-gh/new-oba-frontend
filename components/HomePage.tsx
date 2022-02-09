import React, { useCallback, useMemo } from "react"
import ArrowDownIcon from "../assets/icons/arrow_down.svg"

export const HomePage: React.FC = () => {
    const t = (str: string) => str

    return (
        <div className="uppercase font-display">
            <div className="flex">
                <main className="flex-1">
                    <LayoutSection className="bg-gray">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium mb-8">
                            {t("aboutContest")}
                        </h1>
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
                            <div className="col-span-1 flex flex-col text-sm sm:text-base">
                                <hr className="border-gray-500 mb-6" />
                                <span className="mb-6">{t("nominations")}</span>
                                <span className="mb-6">{t("conditions")}</span>
                                <span className="mb-6">{t("jury")}</span>
                                <span className="mb-6">{t("contacts")}</span>
                                <hr className="border-gray-500" />
                            </div>
                            <div className="col-span-1 lg:col-span-3 flex flex-col lg:pt-16">
                                <AspectRatio ratio="16:9" className="mb-7">
                                    <div className="bg-gray-darkest w-full h-full" />
                                </AspectRatio>

                                <span
                                    className="text-sm sm:text-base"
                                    dangerouslySetInnerHTML={{
                                        __html: t("openBrandingAwardsIs"),
                                    }}
                                />
                            </div>
                        </div>
                    </LayoutSection>

                    <LayoutSection className="bg-white">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-2">
                            {t("nominations")}
                        </h2>
                        <hr className="border-black border-2 mb-12" />
                        <div
                            className="
                                text-xl sm:text-3xl md:text-4xl lg:text-5xl
                                justify-center md:justify-start
                                text-center md:text-left
                                tracking-wide leading-tight
                                flex flex-wrap
                            "
                        >
                            <span className="p-1 bg-black text-gray">
                                {t("agencyOfTheYear")}
                            </span>

                            <div className="flex-1-100" />

                            <span className="p-1 bg-black text-white">
                                {t("brandOfTheYear")}
                            </span>
                            <span className="p-1 text-accent">
                                {t("serviceBrandOfTheYear")}
                            </span>

                            <div className="flex-1-100" />
                            <div
                                className="flex-1-100"
                                style={{ maxWidth: "7.5rem" }}
                            />

                            <span className="p-1 bg-black text-gray">
                                {t("productBrandOfTheYear")}
                            </span>

                            <div className="flex-1-100" />
                            <div
                                className="flex-1-100"
                                style={{ maxWidth: "18.75rem" }}
                            />

                            <span className="p-1 text-black">
                                {t("corporateBrandOfTheYear")}
                            </span>

                            <div className="flex-1-100" />
                            <div
                                className="flex-1-100"
                                style={{ maxWidth: "5.375rem" }}
                            />

                            <span className="p-1 text-accent">
                                {t("culturalBrandOfTheYear")}
                            </span>

                            <div className="flex-1-100" />
                            <div
                                className="flex-1-100"
                                style={{ maxWidth: "5.375rem" }}
                            />

                            <span className="p-1 text-black">
                                {t("digitalBrandOfTheYear")}
                            </span>
                            <span className="p-1 bg-black text-accent">
                                {t("newcomerOfTheYear")}
                            </span>

                            <div className="flex-1-100" />
                            <div
                                className="flex-1-100"
                                style={{ maxWidth: "28.25rem" }}
                            />

                            <span className="p-1 bg-black text-white">
                                {t("innovationOfTheYear")}
                            </span>

                            <div className="flex-1-100" />
                            <div
                                className="flex-1-100"
                                style={{ maxWidth: "38.125rem" }}
                            />

                            <span className="p-1 text-black">
                                {t("theBestSolution")}
                            </span>
                        </div>
                    </LayoutSection>

                    <LayoutSection className="bg-gray">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-2">
                            {t("conditions")}
                        </h2>
                        <hr className="border-black border-2 mb-12" />
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                            <div className="col-span-1">
                                <div className="flex items-center">
                                    <ArrowDownIcon className="text-4xl" />
                                    <div className="ml-3 flex flex-col">
                                        <span className="text-lg">
                                            {t("pdf")}
                                        </span>
                                        <span className="font-light text-xs">
                                            {t("downloadPdf")}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1 lg:col-span-2">
                                <h3 className="text-lg md:text-xl font-medium">
                                    {t("contestants")}
                                </h3>
                                <p className="mb-14 text-sm md:text-base">
                                    {t("whoCanBeAContestant")}
                                </p>

                                <h3 className="text-lg md:text-xl font-medium">
                                    {t("datesOfTheContest")}
                                </h3>
                                <p className="mb-14 text-sm md:text-base">
                                    <span>
                                        <strong>
                                            {t("dateOfTheContest1")}
                                        </strong>{" "}
                                        {t("dateOfTheContest1Description")}
                                    </span>
                                    <br />
                                    <span>
                                        <strong>
                                            {t("dateOfTheContest2")}
                                        </strong>{" "}
                                        {t("dateOfTheContest2Description")}
                                    </span>
                                    <br />
                                    <span>
                                        <strong>
                                            {t("dateOfTheContest3")}
                                        </strong>{" "}
                                        {t("dateOfTheContest3Description")}
                                    </span>
                                    <br />
                                    <span>
                                        <strong>
                                            {t("dateOfTheContest4")}
                                        </strong>{" "}
                                        {t("dateOfTheContest4Description")}
                                    </span>
                                </p>

                                <h3 className="text-lg md:text-xl font-medium">
                                    {t("conditionsOfTheContest")}
                                </h3>
                                <div className="mb-14 text-sm md:text-base">
                                    <span className="mb-2">
                                        {t("conditionsOfTheContestDescription")}
                                    </span>
                                    <ul className="list-dashed pl-4">
                                        <li
                                            dangerouslySetInnerHTML={{
                                                __html: t(
                                                    "conditionOfTheContest1"
                                                ),
                                            }}
                                        />
                                        <li
                                            dangerouslySetInnerHTML={{
                                                __html: t(
                                                    "conditionOfTheContest2"
                                                ),
                                            }}
                                        />
                                        <li
                                            dangerouslySetInnerHTML={{
                                                __html: t(
                                                    "conditionOfTheContest3"
                                                ),
                                            }}
                                        />
                                    </ul>
                                </div>

                                <h3 className="text-lg md:text-xl font-medium">
                                    {t("rewards")}
                                </h3>
                                <p className="mb-14 text-sm md:text-base">
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: t("reward1"),
                                        }}
                                    />
                                    <br />
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: t("reward2"),
                                        }}
                                    />
                                    <br />
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: t("reward3"),
                                        }}
                                    />
                                    <br />
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: t("reward4"),
                                        }}
                                    />
                                </p>

                                <h3 className="text-lg md:text-xl font-medium">
                                    {t("cost")}
                                </h3>
                                <p
                                    className="text-sm md:text-base"
                                    dangerouslySetInnerHTML={{
                                        __html: t("costDescription"),
                                    }}
                                />
                            </div>
                        </div>
                    </LayoutSection>

                    <LayoutSection className="bg-white">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-2">
                            {t("jury")}
                        </h2>
                        <hr className="border-black border-2 mb-12" />
                        <div className="grid grid-cols-1 lg:grid-cols-3 mb-24">
                            <span className="col-span-2 col-start-2 text-sm md:text-base">
                                {t("juryDescription")}
                            </span>
                        </div>
                        <div className="grid grid-cols-1 gap-y-9 gap-x-4 md:grid-cols-2 xl:grid-cols-3 justify-center">
                            <div className="col-span-1 flex flex-col items-center md:items-start">
                                <span className="p-1 bg-black text-gray mb-4 text-3xl md:text-4xl lg:text-5xl leading-tight w-min">
                                    {t("jury1")}
                                </span>
                                <span className="text-sm md:text-base">
                                    {t("jury1Description")}
                                </span>
                            </div>
                            <div className="col-span-1 flex flex-col items-center md:items-start">
                                <span className="p-1 bg-black text-accent mb-4 text-3xl md:text-4xl lg:text-5xl leading-tight w-min">
                                    {t("jury2")}
                                </span>
                                <span className="text-sm md:text-base">
                                    {t("jury2Description")}
                                </span>
                            </div>
                            <div className="col-span-1 flex flex-col items-center md:items-start">
                                <span className="p-1 bg-black text-white mb-4 text-3xl md:text-4xl lg:text-5xl leading-tight w-min">
                                    {t("jury3")}
                                </span>
                                <span className="text-sm md:text-base">
                                    {t("jury3Description")}
                                </span>
                            </div>
                            <div className="col-span-1 flex flex-col items-center md:items-start">
                                <span className="p-1 bg-black text-white mb-4 text-3xl md:text-4xl lg:text-5xl leading-tight w-min">
                                    {t("jury4")}
                                </span>
                                <span className="text-sm md:text-base">
                                    {t("jury4Description")}
                                </span>
                            </div>
                            <div className="col-span-1 flex flex-col items-center md:items-start">
                                <span className="p-1 bg-black text-gray mb-4 text-3xl md:text-4xl lg:text-5xl leading-tight w-min">
                                    {t("jury5")}
                                </span>
                                <span className="text-sm md:text-base">
                                    {t("jury5Description")}
                                </span>
                            </div>
                            <div className="col-span-1 flex flex-col items-center md:items-start">
                                <span className="p-1 bg-black text-accent mb-4 text-3xl md:text-4xl lg:text-5xl leading-tight w-min">
                                    {t("jury1")}
                                </span>
                                <span className="text-sm md:text-base">
                                    {t("jury1Description")}
                                </span>
                            </div>
                        </div>
                    </LayoutSection>

                    <LayoutSection className="bg-white">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-2">
                            {t("contacts")}
                        </h2>
                        <hr className="border-black border-2 mb-12" />
                        <div className="grid grid-cols-1 lg:grid-cols-3 mb-24">
                            <div className="col-span-1 lg:col-span-2 lg:col-start-2 flex flex-col text-sm">
                                <span className="mb-2">
                                    {t("contactsAddress")}
                                </span>
                                <span className="mb-2">
                                    {t("contactsPhone")}
                                </span>
                                <span className="mb-6">
                                    {t("contactsEmail")}
                                </span>
                                <span className="flex mb-12">
                                    <span>TW</span>
                                    <span className="ml-6 md:ml-12">FB</span>
                                    <span className="ml-6 md:ml-12">VK</span>
                                    <span className="ml-6 md:ml-12">INST</span>
                                </span>
                                <AspectRatio ratio="16:9">
                                    <div className="bg-gray w-full h-full">
                                        Map
                                    </div>
                                </AspectRatio>
                            </div>
                        </div>
                    </LayoutSection>
                </main>
                <aside className="flex-shrink-0 w-12 sm:w-16 md:w-20 bg-white flex flex-col items-center pt-4">
                    <ToggleLangButton />
                </aside>
            </div>
            <footer className="bg-black px-8 sm:px-12 md:px-16 lg:px-20 py-12 flex flex-col md:flex-row justify-between">
                <div className="text-md md:text-lg text-white">
                    {t("sponsors")}
                </div>
                <div className="flex flex-col text-sm text-white">
                    <span className="flex mb-7">
                        <span>TW</span>
                        <span className="ml-6 md:ml-12">FB</span>
                        <span className="ml-6 md:ml-12">VK</span>
                        <span className="ml-6 md:ml-12">INST</span>
                    </span>
                    <span className="mb-2">{t("contactsAddress")}</span>
                    <span className="mb-2">{t("contactsPhone")}</span>
                    <span>{t("contactsEmail")}</span>
                </div>
            </footer>
        </div>
    )
}

const LayoutSection: React.FC<{ className?: string }> = ({
    className,
    children,
}) => {
    return (
        <section
            className={`${
                className ?? ""
            } px-8 pt-12 pb-12 sm:px-12 sm:pt-16 sm:pb-16 md:px-16 md:pt-20 md:pb-24 lg:px-20 lg:pt-24 lg:pb-32`}
        >
            {children}
        </section>
    )
}

const AspectRatio: React.FC<{ ratio: string; className?: string }> = ({
    ratio,
    className,
    children,
}) => {
    const pb = useMemo(
        () =>
            ratio
                .split(":")
                .map((v) => +v)
                .reduce((first, second) => second / first) * 100,
        [ratio]
    )
    return (
        <div
            className={`${className ?? ""} relative`}
            style={{ paddingBottom: pb + "%" }}
        >
            <div className="absolute inset-0">{children}</div>
        </div>
    )
}

const ToggleLangButton: React.FC<{ className?: string }> = ({ className }) => {
    const onClick = useCallback(() => {
        console.log("click!")
    }, [])

    return (
        <button
            className={`${
                className ?? ""
            } text-accent uppercase w-12 h-12 text-xs font-medium hover:bg-gray-50`}
            onClick={onClick}
        >
            EN
        </button>
    )
}
