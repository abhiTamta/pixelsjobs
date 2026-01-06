import TopCompanies from "../components/TopCompanies"
import Featuredcompanieshiring from "../components/Featuredcompanieshiring"

const Home = () => {
  return (
    <div className='max-w-7xl mx-auto px-5 py-10 lg:px-0'>
      <TopCompanies />
      <Featuredcompanieshiring />
    </div>
  )
}

export default Home