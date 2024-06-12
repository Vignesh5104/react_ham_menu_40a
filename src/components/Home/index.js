import Header from '../Header'

import {
  HomeContainer,
  HomeImageMainContainer,
  HomeImageContainer,
  MobileHomeImage,
  DesktopHomeImage,
} from './styledComponents'

const Home = () => (
  <HomeContainer>
    <Header />
    <HomeImageMainContainer>
      <HomeImageContainer>
        <MobileHomeImage
          src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
          alt="home"
        />
        <DesktopHomeImage
          src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
          alt="home"
        />
      </HomeImageContainer>
    </HomeImageMainContainer>
  </HomeContainer>
)

export default Home
