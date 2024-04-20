import heroBackgroundPNG from "../assets/herobg.png"
import heroBackgroundWEBP from "../assets/herobg.webp"

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

export default BackgroundImage
