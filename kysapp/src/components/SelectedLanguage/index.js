// import { Swiper } from 'swiper/react';

// Import Swiper styles
import { hourglass } from 'ldrs'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { EffectCoverflow, Navigation, Pagination,Autoplay } from 'swiper/modules';
import {MainSliderDiv,Slider,ActualSwiper} from './styledComponents'
// import { ReuseDiv } from "../Login/styledComponents";
import EachTopShow from "../EachTopShow";

hourglass.register()


const SelectedLanguage=(props)=>{
        const {fetchedData,apiStatus,apiStatusContainer}=props
        
        const onSuccess=()=>{
          return (
            fetchedData.map(eachItem=>(
              <Slider key={eachItem.id}>
                <EachTopShow eachItem={eachItem}/>
              </Slider>
            ))
          )
        }

        const onLoading=()=>{
          return(
            Array(5).fill(0)).map((_,i)=>(
              <Slider key={i}>
                <l-hourglass
                  size="40"
                  bg-opacity="0.1"
                  speed="1.75" 
                  color="black" 
                ></l-hourglass>
              </Slider>
          )
          )
        }

        const getDataToShow=()=>{
          switch (apiStatus) {
            case apiStatusContainer.success:
                return onSuccess()
            case apiStatusContainer.inProgress:
                return onLoading()
          
            default:
              return null 
            
          }
        }
        //console.log({fetchedData},"Top Languages")

        return (
          <MainSliderDiv display="flex" fD="column" jC="flex-start" aI="center" width="100%" swidth="99%">
                  <ActualSwiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={'auto'}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 150,
                modifier: 2.5,
              }}
              pagination={true}
              navigation={true}
              modules={[EffectCoverflow,Autoplay, Pagination, Navigation]}
              className="swiper_container"
                  >
                    {
                      getDataToShow()
                    }
          
                  </ActualSwiper>

          </MainSliderDiv>
        )
      }

export default SelectedLanguage