import devices from '../assets/order_site.png'
const OrderWebSite = () => {
    return (
        <section className='text-center w-full  py-10 lg:py-[90px]'>
            <h1 className='text-gb_color md:text-[28px] lg:text-[32px] text-base leading-[105%] font-semibold'>Your Web Developer Experts</h1>
            <h2 className='text-[#110026] md:text-[38px] lg:text-[54px] text-[22px] leading-[105%] mt-3'>We help you to create unique and
            <br />
                modern Web Site</h2>
                <div className='w-full grid justify-center mt-12'>
                    <div className='lg:w-[927px] lg:px-0 px-3'>
                    <img src={devices} className='object-contain w-full' alt="" />
                    </div>
                </div>
                <button className='lg:px-20 lg:py-10 py-3 px-10 md:text-xl lg:text-[32px] text-base mt-20 text-gb_color  border border-gb_color rounded-full'>Order a Web Site</button>
        </section>
    )
}

export default OrderWebSite