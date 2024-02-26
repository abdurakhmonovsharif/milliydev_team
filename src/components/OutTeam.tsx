import telegram_icon from '../assets/telegram-icon.png'
import insta_icon from '../assets/insta-icon.png'
import about_imag1e from '../assets/about_team.png'
const UserCard = () => <div className="flex lg:flex-row gap-y-3 flex-col  items-center">
    <div className="lg:w-[100px] lg:h-[100px] w-[280px] h-[280px]  bg-black rounded-full">
    </div>
    <div className='px-6'>
        <h5 className="capitalize md:text-xl text-[24px] text-center text-white font-semibold">OTABEK NORMATOV</h5>
        <h6 className="text-base text-center lg:text-start text-gb_color">Designer</h6>
        <div className='flex space-y-1 items-center gap-x-3 lg:justify-start justify-center'>
            <img className='w-[24px] h-[24px] object-contain' src={telegram_icon} />
            <img className='w-[24px] h-[24px] object-contain' src={insta_icon} />
        </div>
    </div>
</div>
const OutTeam = () => {
    return (
        <section className='w-full flex relative lg:justify-start justify-center   lg:px-[70px] py-[40px] bg-[#1E1E1E]'>
            <div>
                <div className="lg:px-0 px-[35px] flex items-center gap-x-4 md:justify-start lg:justify-start justify-center">
                    <div className="h-[5px] w-[153px] bg-gb_color hidden lg:block md:block"></div>
                    <h1 className="uppercase text-white text-base md:text-xl lg:text-[24px] font-semibold">Our Team</h1>
                </div>
                <h1 className="lg:text-[40px] lg:px-0 px-[35px]  md:text-start lg:text-start text-center  md:text-[30px] text-[20px]  text-white font-semibold">Meet Our Expert Team</h1>
                <div className="grid lg:w-auto w-screen place-items-center md:grid-cols-2 grid-cols-1 lg:grid-cols-2 grid-rows-2 py-[30px] lg:py-[42px] gap-3 gap-y-5  ">
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                </div>
            </div>
            <div className='absolute lg:block hidden right-0 -bottom-[27%] -top-[27%]'>
                <img src={about_imag1e} alt="" className='w-full h-full' />
            </div>
        </section>
    )
}

export default OutTeam