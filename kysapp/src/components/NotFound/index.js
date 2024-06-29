import {
  NotFoundBg,
  NotFoundImage,
  NotFoundHeading,
  NotFoundPara,
} from './styledComponents'

const NotFound = () => (
        <NotFoundBg >
          <NotFoundImage
            alt="not-found"
            src= 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'/>
          <NotFoundHeading >
            Page Not Found
          </NotFoundHeading>
          <NotFoundPara >
            We are sorry, the page you requested could not be found
          </NotFoundPara>
        </NotFoundBg>
      )
    

export default NotFound