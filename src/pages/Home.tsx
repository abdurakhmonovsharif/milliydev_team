import Hero from '../components/Hero'
import OrderWebSite from '../components/OrderWebSite'
import OutTeam from '../components/OutTeam'
import { Portfolio } from '../components/Portfolio'

const Home = () => {
  return (
    <main className='max-w-dv mx-auto'>
        <Hero/>
        <Portfolio/>
        <OutTeam/>
        <OrderWebSite/>
    </main>
  )
}

export default Home