import heroBackgroundPNG from "../assets/herobg.png"
import heroBackgroundWEBP from "../assets/herobg.webp"

const Hero = () => {
  return (
    <div className="bg-cover bg-center h-screen">
      <picture>
        <source srcSet={heroBackgroundWEBP} type="image/webp" />
        <img
          className="bg-image w-full h-full object-cover"
          src={heroBackgroundPNG}
          alt="hero background"
        />
      </picture>
    </div>
  )
}

export default Hero
