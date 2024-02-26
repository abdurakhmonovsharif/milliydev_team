
export const Portfolio = () => {
    return (
        <section className="py-16 px-[70px]">
            <div className="w-full text-center">
                <h1 className="text-gb_color text-6xl font-bold leading-[150%]">Hello</h1>
                <p className="text-[26px] leading-[113%] text-[#110026]">We are MillyDev team, our
                    <br />
                    experience is about to 1+ year, take a lookon our projects.</p>
            </div>
            <div className="grid grid-cols-3 h-[673px] gap-x-6   pb-[62px] pt-[82px]">
                {Array.from({ length: 3 }).map(() => <div className="bg-[#D9D9D9] rounded-[50px]"></div>)}
            </div>
            <div className="w-full gap-x-6 h-[719px] flex ">
                <div className="w-[calc(60%-24px)] h-full bg-black rounded-[50px]">

                </div>
                <div className="w-[calc(40%-24px)] h-full bg-gb_color rounded-[50px]">

                </div>
            </div>
        </section>
    )
}
