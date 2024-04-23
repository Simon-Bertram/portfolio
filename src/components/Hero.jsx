import heroBackgroundPNG from "../assets/herobg.png"
import heroBackgroundWEBP from "../assets/herobg.webp"
import { styles } from "../styles"

const Hero = () => {
  return (
    <section className="absolute top-40 w-full h-screen xs:px-4">
      <div className="max-w-5xl mx-auto flex flex-row items-start gap-5">
        <div className="flex flex-col items-center justify-center mr-12">
          <div className="w-5 h-5 rounded-full bg-violet-500"></div>
          <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} mb-6`}>
            Hi, I'm <span>Simon</span>
          </h1>
          <p className={`${styles.heroSubText}`}>
            I build websites and apps <br className="sm:block hidden" /> with
            React and Tailwindcss
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
