import { motion } from 'framer-motion';
import image1 from '../../public/assest/Screenshot 2025-01-09 232040.png';
import image2 from '../../public/assest/Screenshot 2025-01-17 191133.png';
import image3 from '../../public/assest/Screenshot 2025-01-17 170107.png';
import image4 from '../../public/assest/Screenshot 2025-01-17 170225.png';

// Project Data
const projectData = [
  {
    image: image1,
    title: 'Bistro-Boss-Restaurent',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...',
    technologies: ['HTML', 'TailwindCSS', 'React', 'Node.js', 'MongoDB'],
    link: 'https://arafatsani10.github.io/js-assignment-05/',
  },
  {
    image: image2,
    title: 'Bistro-Boss-Restaurent-Home page',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...',
    technologies: ['HTML', 'TailwindCSS', 'React', 'Node.js', 'MongoDB'],
    link: 'https://arafatsani10.github.io/js-assignment-05/',
  },
  {
    image: image3,
    title: 'BPL-Dream-11',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...',
    technologies: ['HTML', 'TailwindCSS', 'React'],
    link: 'https://arafatsani10.github.io/js-assignment-05/',
  },
  {
    image: image4,
    title: 'Donate-Bangladesh',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...',
    technologies: ['HTML', 'TailwindCSS', 'JavaScript'],
    link: 'https://arafatsani10.github.io/js-assignment-05/',
  },
];

// ScrollReveal Component
const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

// ProjectCard Component
const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      <motion.div
        className="w-full max-w-[350px] bg-gray-800 rounded-lg shadow-lg overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-5">
          <h3 className="text-xl font-semibold text-green-400">{project.title}</h3>
          <p className="mt-2 text-white text-sm">{project.description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span key={index} className="px-3 py-1 text-xs bg-gray-700 text-white rounded-full">
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-4 cursor-pointer">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-green-400 text-white rounded-lg text-sm font-semibold hover:bg-green-500 hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg"
            >
              View Project
            </a>
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
};

// Main Project Component
const Project = () => {
  return (
    <div id="project" className="min-h-screen w-full flex flex-col items-center justify-center gap-16 p-5 md:px-14 md:py-24">
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">My Projects</h1>
      </ScrollReveal>

      <div className="flex w-full max-w-[1000px] flex-wrap justify-center gap-16">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
