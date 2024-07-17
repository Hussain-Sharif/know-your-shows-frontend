import { Swiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import {MainSliderDiv,Slider} from './styledComponents'
// import { ReuseDiv } from "../Login/styledComponents";
import EachTopShow from "../EachTopShow";



const SelectedLanguage=(props)=>{
        const {fetchedData}=props
        
        
        console.log({fetchedData},"Top Languages")

        return (
          <MainSliderDiv display="flex" fD="column" jC="flex-start" aI="center" width="100%" swidth="99%">
                  <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    navigation={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                      rotate: 50,
                      stretch: 0,
                      depth: 100,
                      modifier: 1,
                      slideShadows: true,
                    }}
                    pagination={true}
                    loop={true}
                    modules={[EffectCoverflow, Pagination,Navigation]}
                    className="mySwiper"
                  >
                    {
                      fetchedData.map(eachItem=>(
                        <Slider key={eachItem.id}>
                          <EachTopShow eachItem={eachItem}/>
                        </Slider>
                      ))
                    }
                  </Swiper>

          </MainSliderDiv>
        )
      }

export default SelectedLanguage