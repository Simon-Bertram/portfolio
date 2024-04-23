import {
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

export { technologies, projects }
