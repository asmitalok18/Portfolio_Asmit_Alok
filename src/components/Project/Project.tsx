import { useState } from "react";
import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  // State for selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Projects with category tags
  const projects = [
    {
      title: "Educator: Tech Tutorials at one Place",
      description:
        "Developed an education website using HTML, CSS, and JavaScript enabling users to learn programming languages and many more technical skills at one place.",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "Frontend",
      github: "https://github.com/asmitalok18/Educator.git",
      external: "https://educatorweb.vercel.app/",
    },
    {
      title: "Cricket Website: Celebrating the Spirit of Cricket",
      description:
        "Developed a Cricket Website using React, JavaScript, CSS, Material UI, and Local Storage where users can create their own playing 11 team, watch IPL highlights, and play a wheel decider game.",
      tech: ["React", "JavaScript", "Material UI", "Local Storage"],
      category: "Frontend",
      github: "https://github.com/asmitalok18/Cricket-website",
      external: "https://cricket-website-five.vercel.app/",
    },
    {
      title: "PlayTube: A Scalable Backend for Seamless Video Streaming",
      description:
        "Developed the backend for PlayTube using Node.js and Express.js, integrated MongoDB, and implemented secure authentication with JWT.",
      tech: ["Node.js", "Express.js", "MongoDB", "JWT"],
      category: "Backend",
      github: "https://github.com/asmitalok18/playTube.git",
      external: "",
    },
    {
      title: "Moment Saver: Capture, Share, and Relive Your Best Moments with Our Blog Platform.",
      description:
        "The Blog App is a React-based platform powered by Appwrite and JavaScript, allowing users to capture, share, and relive their best moments with secure authentication.",
      tech: ["React", "Appwrite", "JavaScript", "JWT"],
      category: "Frontend",
      github: "https://github.com/asmitalok18/Moment-Saver.git",
      external: "http://moment-saver.vercel.app/",
    },
    {
      title:"Clinic-Connect: Medical Appointment Scheduler with Health History",
      description:"Developed a secure medical appointment management platform with CRUD functionality, utilizing role-based access control, encryption techniques, and a robust MySQL database with normalized schema design and stored procedures for efficient scheduling, data privacy, and reliable retrieval of patient records.",
      tech:["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      category:"PHP",
      github:"https://github.com/asmitalok18/clinic-connect",
      // external:"https://vercel.com/alokasmitgmailcoms-projects/clinic-connect",
    },
    {
      title:"YouTube Video Manager: Effortlessly Manage and Organize Your YouTube Videos",
      description:"The YouTube Video Manager is a console app that allows users to manage videos by listing, adding, updating, and deleting them. It uses a JSON file for persistent storage and includes exception handling for missing files. The app runs in a continuous loop, prompting users for choices until they decide to exit, ensuring easy video management.",
      tech:["Python"],
      category:"Python",
      github:"https://github.com/asmitalok18/youtube_video_manager.git",
      
    },
    {
      title:"YouTube Manager with SQLite Database: Effortlessly Manage and Organize Your YouTube Videos with SQL Database",
      description:"This Python script serves as a YouTube video manager with integrated SQLite database functionality. Users can perform basic CRUD (Create, Read, Update, Delete) operations on a collection of videos, with the video data stored in a SQLite database named. ",
      tech:["Python,SQL"],
      category:"Python",
      github:"https://github.com/asmitalok18/youtube_manager_sqlite3.git",
      
    },



    // Add more projects here with their respective categories...
  ];

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === "All" ? projects : projects.filter(project => project.category === selectedCategory);

  return (
    <Container id="project">
      <h2>My Projects</h2>

      {/* Category Buttons */}
      <div className="category-buttons">
        <button onClick={() => setSelectedCategory("All")}>All</button>
{/*         <button onClick={() => setSelectedCategory("MERN")}>MERN</button> */}
        <button onClick={() => setSelectedCategory("PHP")}>PHP</button>
        <button onClick={() => setSelectedCategory("Python")}>Python</button>
        <button onClick={() => setSelectedCategory("Frontend")}>Frontend</button>
        <button onClick={() => setSelectedCategory("Backend")}>Backend</button>
      </div>

      <div className="projects">
        {filteredProjects.map((project, index) => (
          <ScrollAnimation key={index} animateIn="flipInX">
            <div className="project">
              <header>
                <svg
                  width="50"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#23ce6b"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <title>Folder</title>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <img src={githubIcon} alt="Visit site" />
                  </a>
                  {project.external && (
                    <a href={project.external} target="_blank" rel="noreferrer">
                      <img src={externalLink} alt="Visit site" />
                    </a>
                  )}
                </div>
              </header>
              <div className="body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <footer>
                <ul className="tech-list">
                  {project.tech.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  );
}
