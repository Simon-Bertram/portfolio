import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import { motion } from "framer-motion"
import PropTypes from "prop-types"

import "react-vertical-timeline-component/style.min.css"
import { styles } from "../styles"
import { experience } from "../constants"
import { textVariant } from "../utils/motion"

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: "#2d3748", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid  #2d3748" }}
    date={experience.date}
    iconStyle={{ background: "#2d3748", color: "#fff" }}
    icon={<i className="fas fa-briefcase"></i>}
  >
    <div>
      <h3 className="text-white font-bold">{experience.title}</h3>
      <p>{experience.company_name}</p>
      <ul className="mt-5">
        {experience.points.map((point, index) => (
          <li
            key={`experience.point-${index}`}
            className="text-white list-disc mt-1"
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  </VerticalTimelineElement>
)

ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
}

const Experience = () => {
  return (
    <div className="container mx-auto mt-16">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I&apos;ve done so far</p>
        <h2 className={styles.sectionHeadText}>Experience</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experience.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default Experience

Experience.propTypes = {
  experience: PropTypes.shape({
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
}
