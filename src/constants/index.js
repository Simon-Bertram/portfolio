import {
  web,
  backend,
  creator,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
} from "../assets"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
]

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
]

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
]

const projects = [
  {
    id: 1,
    title: "Cornwall Coffee Finder",
    description:
      "Website to find the best independent coffee shops in Cornwall. Built with React JS and Tailwind",
    image: "https://via.placeholder.com/150",
    technologies: ["React JS", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "MERN Estate",
    description: "A house listing website built with the MERN stack.",
    image: "https://via.placeholder.com/150",
    technologies: ["MongoDB", "Express", "React JS", "Node JS", "Tailwind CSS"],
  },
  {
    id: 3,
    title: "Project 3",
    description: "This is a project description.",
    image: "https://via.placeholder.com/150",
    technologies: ["React JS", "Tailwind CSS", "Node JS"],
  },
]

const experience = [
  {
    title: "Dog Trainer Website",
    company_name: "Freelance",
    date: "2019 - 2020",
    points: [
      "Website for a dog trainer to showcase their services.",
      "Responsive website built using Bootstrap",
      "Worked with clients to deliver the best possible product.",
    ],
  },
  {
    title: "Joined Codecademy",
    date: "2019 - current",
    points: [
      "Joined Codecademy to learn web development.",
      "Enroled on Frontend Developer career path.",
      "Also working on Computer Science path.",
    ],
  },
  {
    title: "E-commerce Website",
    company_name: "Freelance",
    date: "2020 - 2021",
    points: [
      "E-commerce website for a small business.",
      "Built with React JS and Tailwind CSS",
      "Integrated payment gateway and order tracking.",
    ],
  },
  {
    title: "Portfolio Website",
    company_name: "Freelance",
    date: "2021 - Present",
    points: [
      "Portfolio website to showcase my work.",
      "Built with React JS and Tailwind CSS",
      "Integrated animations and transitions.",
    ],
  },
]

export { technologies, projects, services, experience }
