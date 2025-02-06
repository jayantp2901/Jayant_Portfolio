import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  java,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  JobPortlLogo,
  

  htmlAB,
  javascriptAB
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "project",
    title: "Certificates",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software Engineer",
    icon: creator,
  },
];

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
    icon: java,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "Java",
    icon: java,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Product Management System",
    company_name: "OmVSab",
    icon: starbucks,
    iconBg: "#383E56",
    date: "January 2025 - February 2025",
    points: [
      "Developed a Product Management System with features for adding, updating, deleting, and categorizing products.",
      "Added functionality like searching and sorting to enhance user experience.",
      "Built Using the Java: MySQL for database, Servlet for backend, JSP for UI, and Java for server-side logic."
    ],
  },
  {
    title: "Job Portal",
    company_name: "",
    icon: JobPortlLogo,
    iconBg: "#E6DEDD",
    date: "January 2025 - April 2025",
    points: [
      "Job Portal is a recruitment platform that streamlines job matching for seekers and employers, with features like profile creation, resume uploads, and application tracking.",
      "Key functionalities include advanced job search filters, employer-candidate communication, and AI-powered resume building.",
      "Built using the MERN stack: MongoDB for database, Express.js for backend, React.js for frontend, and Node.js for server logic, with Docker and CI/CD for scalability and secure deployment.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "RoamNest",
    company_name: "ApnaCollege",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "October 2024 - December 2024",
    points: [
      "RoamNest is a travel accommodation platform designed to help users discover unique and comfortable places to stay while exploring new destinations.",
      "Key features include advanced search filters for various accommodation types, detailed listings with photos and reviews, and secure booking options.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Frontend Basics",
    description:
    "Almabetter",
      // "A web-based platform that enables users to search, book, and manage vendors for various occasions, offering a convenient and efficient solution for event planning and vendor coordination.",
      
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      }
      
    ],
    image: htmlAB,
    source_code_link: "https://verified.sertifier.com/en/verify/48246444477435/",
  },
  {
    name: "Javascript Basics",
    description:
    "Almabetter",
      // "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location, and to post Jobs",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      
    ],
    image: javascriptAB,
    source_code_link: "https://verified.sertifier.com/en/verify/45846602948203/",
  },
  // {
  //   name: "Pathfinding Visualizer",
  //   description:
  //     "A Pathfinding Visualizer is an interactive tool used to visualize algorithms that find the shortest path between two points in a grid or graph using algorithms like A*, Dikshtra and Breadth first search.",
  //   tags: [
  //     {
  //       name: "React",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Javascript",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Pathfinding.js",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: htmlAB,
  //   source_code_link: "#",
  // },
];

export { services, technologies, experiences, testimonials, projects };
