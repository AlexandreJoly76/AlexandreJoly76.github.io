
import aniverseImg from '../assets/img/Aniverse.png';
import aniverseVideo from '../assets/video/forum.mp4';
import makeyourgameImg from '../assets/img/Makeyourgame.png';
import makeyourgameVideo from '../assets/video/make-your-game-video.mp4';
import realtimeImg from '../assets/img/RealTime.png';
import realtimeVideo from '../assets/video/realtime.mp4';
import groupieImg from '../assets/img/groupieTracker.png';
import groupieVideo from '../assets/video/groupie-tracker-video.mp4';
import socialImg from '../assets/img/Mellow.webp';
import socialVideo from '../assets/video/social-network-video.mp4';
import githubIcon from '../assets/svg/Github.svg';
import fetchcountriesImg from '../assets/img/fetchcountries.png';
import fetchcountriesVideo from '../assets/video/fetchcountriesvideo.mp4';
import rolexImg from '../assets/img/rolex-racing-tycoon-frame.png';
import rolexVideo from '../assets/video/rolex-racing-tycoon-video.mp4';
import robloxIcon from '../assets/svg/RobloxLogo-light.svg';
import spreadlabImg from '../assets/img/ecrandechargement.png';
import EasyManage from '../assets/img/easymanage.png';
import spreadlabVideo from '../assets/video/spreadlab.mp4';
import EasyManageVideo from '../assets/video/EasyManage.mp4';
import { useState, useEffect, useRef } from 'react';


const courseProjects = [
  {
    id: 'project1',
    title: 'Aniverse - Anime Forum',
    img: aniverseImg,
    video: aniverseVideo,
    desc: 'Community platform dedicated to anime and manga enthusiasts with discussion systems, sharing capabilities, and customizable profiles.',
    tags: ['Go', 'HTML/CSS', 'JavaScript', 'SQLite', 'Docker'],
    github: 'https://github.com/AlexandreJoly76/forum-go',
    githubIcon: githubIcon,
  },
  {
    id: 'project2',
    title: 'Mellow - Social Network',
    img: socialImg,
    video: socialVideo,
    desc: 'A social network where you can create groups, invite people, and chat in real time.',
    tags: ['Go', 'HTML/CSS/Tailwind', 'NextJS', 'SQLite', 'Docker'],
    github: 'https://github.com/MellowProject/Mellow',
    githubIcon: githubIcon,

  },
  {
    id: 'project3',
    title: 'Make Your Game',
    img: makeyourgameImg,
    video: makeyourgameVideo,
    desc: 'Development of a JavaScript video game with fluid animations, score system, and multiple difficulty levels.',
    tags: ['JavaScript', 'HTML/CSS'],
    github: 'https://github.com/AlexandreJoly76/MakeYourGame-SpaceInvader',
    githubIcon: githubIcon,
  },
  {
    id: 'project4',
    title: 'Real Time Forum',
    img: realtimeImg,
    video: realtimeVideo,
    desc: 'Real-time forum application with instant messaging, notifications, and dynamic content updates powered by WebSockets.',
    tags: ['Go', 'WebSockets', 'JavaScript', 'SQLite', 'HTML/CSS'],
    github: 'https://github.com/AlexandreJoly76/real-time-forum',
    githubIcon: githubIcon,
  },
  {
    id: 'project5',
    title: 'Groupie Tracker',
    img: groupieImg,
    video: groupieVideo,
    desc: 'Web application that aggregates and displays data about musical artists, their albums, and tours from external APIs.',
    tags: ['Go', 'JavaScript', 'HTML/CSS', 'API'],
    github: 'https://github.com/AlexandreJoly76/GroupieTracker',
    githubIcon: githubIcon,
  },
];

const personalProjects = [
  {
    id: 'personal1',
    title: 'Countries API Explorer',
    img: fetchcountriesImg,
    video: fetchcountriesVideo,
    desc: 'Web application for exploring countries around the world using a REST API. Features search functionality, filtering, and detailed country information display.',
    tags: ['JavaScript', 'React', 'Fetch API', 'HTML/CSS', 'Responsive', 'REST API'],
    github: 'https://github.com/AlexandreJoly76/Fetchcountries',
    githubIcon: githubIcon,
  },
  {
    id: 'personal2',
    title: 'Rolex Racing Tycoon',
    img: rolexImg,
    video: rolexVideo,
    desc: 'A racing simulation game where players manage their own luxury car racing empire. Features dynamic racing mechanics, team management, and customizable vehicles.',
    tags: ['Roblox Studio', 'Lua', 'Game Development', '3D Modeling'],
    game: 'https://www.roblox.com/games/98819646411922/Rolex-Racing-Tycoon#!/about',
    robloxIcon: robloxIcon,
  },
  {
    id: 'personal3',
    title: 'SpreadLab',
    img: spreadlabImg,
    video: spreadlabVideo,
    desc: 'A Bueno Spread brand-themed tycoon game where players explore multiple worlds to collect ingredients needed to create the perfect chocolate spread. Features resource management, world exploration, and factory development.',
    tags: ['Roblox Studio', 'Lua', 'Game Development', 'Tycoon', '3D Modeling'],
    game: 'https://www.roblox.com/games/118032810102771/Spread-Lab#!/about',
    robloxIcon: robloxIcon,
  },
  {
    id: 'personal4',
    title: 'EasyManage',
    img: EasyManage,
    video: EasyManageVideo,
    desc: 'A task management web application designed to register personal with name,jobs and salary.',
    tags: ['Python', 'Django', 'HTML/CSS', 'JavaScript'],
    github: 'https://github.com/AlexandreJoly76/EasyManager',
    githubIcon: githubIcon,
  }
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState('course-projects');
  const gridRef = useRef(null);

  // Hook d'amélioration des images (migration image-enhancer.js) + optimisation cartes (performance-boost.js)
  useEffect(() => {
    // --- Optimisation des cartes projet (performance-boost.js) ---
    const cards = gridRef.current ? gridRef.current.querySelectorAll('.project-card') : [];
    cards.forEach((card) => {
      card.style.transform = 'translateZ(0)';
      card.style.willChange = 'transform, box-shadow';
      const image = card.querySelector('img');
      if (image) {
        image.fetchPriority = 'high';
      }
      const video = card.querySelector('video');
      if (video) {
        video.preload = 'auto';
        video.load();
        video.muted = true;
        video.playsInline = true;
      }
    });
    // Optimisation des onglets de projets
    const tabs = gridRef.current ? gridRef.current.querySelectorAll('.project-tab') : [];
    tabs.forEach((tab) => {
      tab.style.willChange = 'transform';
      tab.style.transform = 'translateZ(0)';
    });
    // Forcer le reflow pour éviter la latence
    const reflowTimeout = setTimeout(() => {
      document.body.style.transform = 'translateZ(0)';
      void document.body.offsetHeight;
      document.body.style.transform = '';
    }, 10);
    // Précharge des interactions au survol (hover-sim)
    const hoverTimeout = setTimeout(() => {
      cards.forEach((card) => {
        card.classList.add('hover-sim');
        setTimeout(() => {
          card.classList.remove('hover-sim');
        }, 50);
      });
    }, 500);
  // Sélectionner toutes les images de carte de projet
  const projectImages = gridRef.current ? gridRef.current.querySelectorAll('img') : [];

    function applyEnhancements(img) {
      img.classList.add('enhanced');
      img.style.imageRendering = 'auto';
      img.style.filter = 'brightness(1.05) contrast(1.08) saturate(1.1)';
      const parentCard = img.closest('.project-card');
      if (parentCard) {
        parentCard.addEventListener('mouseenter', function () {
          img.style.animation = 'none';
          img.style.filter = 'brightness(1.08) contrast(1.1) saturate(1.12)';
        });
        parentCard.addEventListener('mouseleave', function () {
          img.style.filter = 'brightness(1.05) contrast(1.08) saturate(1.1)';
        });
      }
    }

    projectImages.forEach((img) => {
      if (img.complete) {
        applyEnhancements(img);
      } else {
        img.onload = () => applyEnhancements(img);
      }
    });

    // Observer les conteneurs d'images
    const containers = gridRef.current ? gridRef.current.querySelectorAll('.card-image') : [];
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('focused-image');
            const img = entry.target.querySelector('img');
            if (img) {
              setTimeout(() => {
                img.style.filter = 'brightness(1.08) contrast(1.1) saturate(1.12)';
              }, 300);
            }
          }
        });
      },
      { threshold: 0.6 }
    );
    containers.forEach((container) => observer.observe(container));

    // Nettoyage listeners/observers
    return () => {
      clearTimeout(reflowTimeout);
      clearTimeout(hoverTimeout);
      observer.disconnect();
      projectImages.forEach((img) => {
        img.onload = null;
      });
      containers.forEach((container) => {
        container.classList.remove('focused-image');
      });
    };
  }, [activeTab]);

  const renderProjectCard = (project) => (
  <div className="project-card show" key={project.id} id={project.id}>
      <div className="card-image card-image-container">
        <img src={project.img} alt={project.title} className="static-image" />
        {project.video && (
          <video className="hover-video" src={project.video} muted loop preload="auto"></video>
        )}
      </div>
      <div className="card-content">
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
        {project.tags && (
          <div className="tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        )}
        <div className="card-links">
          {project.github && (
            <a href={project.github} target="_blank" className="github-link">
              <img src={project.githubIcon} alt="GitHub" />
            </a>
          )}
          {project.game && (
            <a href={project.game} target="_blank" className="github-link game-link">
              <img src={project.robloxIcon} alt="Roblox" />
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects">
      <div className="section-header">
        <div className="section-title animate-section">
          <span className="title-decoration"></span>
          <h2>My <span className="highlight">Projects</span></h2>
          <span className="title-decoration"></span>
        </div>
      </div>
      <div className="projects-tabs">
        <button
          className={`project-tab${activeTab === 'course-projects' ? ' active' : ''}`}
          onClick={() => setActiveTab('course-projects')}
          data-target="course-projects"
        >
          Course Projects
        </button>
        <button
          className={`project-tab${activeTab === 'personal-projects' ? ' active' : ''}`}
          onClick={() => setActiveTab('personal-projects')}
          data-target="personal-projects"
        >
          Personal Projects
        </button>
      </div>
  <div ref={gridRef} className="projects-grids-wrapper animate-section visible">
        <div className="projects-grid" id="course-projects" style={{ display: activeTab === 'course-projects' ? 'grid' : 'none' }}>
          {courseProjects.map(renderProjectCard)}
        </div>
        <div className="projects-grid" id="personal-projects" style={{ display: activeTab === 'personal-projects' ? 'grid' : 'none' }}>
          {personalProjects.map(renderProjectCard)}
        </div>
      </div>
    </section>
  );
};

export default Projects;
