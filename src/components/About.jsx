import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import PropTypes from "prop-types"

import { styles } from "../styles"
import { services } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"

// const options = {
//   max: 25,
//   scale: 1,
//   speed: 450,
// }

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-60 w-full">
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full rounded-2xl p-1 green-pink-gradient shadow-card"
    >
      <div className="flex flex-col items-center justify-evenly bg-tertiary rounded-2xl py-5 px-12 min-h-72">
        <img src={icon} alt="title" className="w-14 object-contain" />
        <h3 className="text-white text-2xl font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
)

const About = () => {
  return (
    <div className="container mx-auto">
      <motion.div className="mb-4">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mb-16">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic adipisci
        qui aut!
      </motion.p>
      <div className="flex flex-wrap mt-20 gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  )
}

export default About

ServiceCard.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string,
  icon: PropTypes.string,
}
