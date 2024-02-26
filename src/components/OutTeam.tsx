import telegram_icon from '../assets/telegram-icon.png'
import insta_icon from '../assets/insta-icon.png'
import about_imag1e from '../assets/about_team.png'
const UserCard = () => <div className="flex items-center ">
    <div className="w-[100px] h-[100px] bg-black rounded-full">
    </div>
    <div className='px-6 '>
        <h5 className="capitalize text-[24px] text-white font-semibold">OTABEK NORMATOV</h5>
        <h6 className="text-base text-gb_color">Designer</h6>
        <div className='flex space-y-1 items-center gap-x-3'>
            <img className='w-[24px] h-[24px] object-contain' src={telegram_icon} />
            <img className='w-[24px] h-[24px] object-contain' src={insta_icon} />
        </div>
    </div>
</div>
const OutTeam = () => {
    return (
        <section className='w-full flex relative  px-[70px] py-[40px] bg-[#1E1E1E]'>
            <div>
                <div className="flex items-center gap-x-4 ">
                    <div className="h-[5px] w-[153px] bg-gb_color"></div>
                    <h1 className="uppercase text-white text-[24px] font-semibold">Our Team</h1>
                </div>
                <h1 className="text-[40px] text-white font-semibold">Meet Our Expert Team</h1>
                <div className="grid grid-cols-2 grid-rows-2 py-[42px] gap-3  ">
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                </div>
            </div>
            <div className='absolute right-0 -bottom-[27%] -top-[27%]'>
                <img src={about_imag1e} alt="" className='w-full h-full' />
            </div>
        </section>
    )
}

export default OutTeam