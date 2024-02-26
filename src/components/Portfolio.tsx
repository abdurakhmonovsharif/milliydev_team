import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css';
export const Portfolio = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      
    return (
        <section className="lg:py-16 relative py-4  lg:px-[70px]">
            <div className="w-full text-center lg:px-0 md:px-4 px-3">
                <h1 className="text-gb_color text-4xl lg:text-6xl font-bold leading-[150%]">Hello</h1>
                <p className="text-[20px] lg:text-[26px] leading-[113%] text-[#110026]">We are MillyDev team, our
                    <br />
                    experience is about to 1+ year, take a lookon our projects.</p>
            </div>
            {/* mobile portfolio carousel */}
            <div className="lg:!hidden my-[24px] px-[1.5%]">
            <Carousel responsive={responsive} >
            {Array.from({ length: 6 }).map(() => <div className="bg-[#D9D9D9] mx-auto w-[95%]  h-[306px] rounded-[50px]"></div>)}
            </Carousel>
            </div>
            {/* desktop portfolio */}
            <div className="hidden lg:grid grid-cols-3 h-[573px] gap-x-6   pb-[62px] pt-[82px]">
                {Array.from({ length: 3 }).map(() => <div className="bg-[#D9D9D9] rounded-[50px]"></div>)}
            </div>
            <div className="w-full gap-x-6 h-[519px] lg:flex hidden ">
                <div className="w-[calc(60%-24px)] h-full bg-black rounded-[50px]">
                </div>
                <div className="w-[calc(40%-24px)] h-full bg-gb_color rounded-[50px]">

                </div>
            </div>
        </section>
    )
}
