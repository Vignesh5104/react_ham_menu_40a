import Header from '../Header'

import {
  AboutContainer,
  AboutImageMainContainer,
  AboutImageContainer,
  MobileAboutImage,
  DesktopAboutImage,
} from './styledComponents'

const About = () => (
  <AboutContainer>
    <Header />
    <AboutImageMainContainer>
      <AboutImageContainer>
        <MobileAboutImage
          src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
          alt="About"
        />
        <DesktopAboutImage
          src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
          alt="About"
        />
      </AboutImageContainer>
    </AboutImageMainContainer>
  </AboutContainer>
)

export default About
