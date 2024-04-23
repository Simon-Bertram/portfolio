import heroBackgroundPNG from "../assets/herobg.png"
import heroBackgroundWEBP from "../assets/herobg.webp"

import PropTypes from "prop-types"

const BackgroundImage = ({ children }) => {
  return (
    <div className="bg-cover bg-center h-screen">
      <picture>
        <source srcSet={heroBackgroundWEBP} type="image/webp" />
        <img
          className="bg-image w-full h-full object-cover -z-10"
          src={heroBackgroundPNG}
          alt="hero background"
        />
      </picture>
      {children}
    </div>
  )
}

BackgroundImage.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BackgroundImage
