import HeadingTitle from './custom_components/HeadingTitle'
import { CarouselSlider } from './custom_components/CarouselSlider'

const TopCompanies = () => {
  return (
    <div className='w-full'>
        <div className="w-full mb-10">
            <HeadingTitle title="Top companies hiring now" type="h2" />
        </div>
        <div className="w-full">
          <CarouselSlider />
        </div>
    </div>
  )
}

export default TopCompanies