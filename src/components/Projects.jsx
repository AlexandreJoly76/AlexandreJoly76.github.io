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
import githubIcon from '../assets/svg/Githubsocial.svg';
import fetchcountriesImg from '../assets/img/fetchcountries.png';
import fetchcountriesVideo from '../assets/video/fetchcountriesvideo.mp4';
import rolexImg from '../assets/img/rolex-racing-tycoon-frame.png';
import rolexVideo from '../assets/video/rolex-racing-tycoon-video.mp4';
import robloxIcon from '../assets/svg/robloxsvg.svg';
import spreadlabImg from '../assets/img/ecrandechargement.png';
import EasyManage from '../assets/img/easymanage.png';
import spreadlabVideo from '../assets/video/spreadlab.mp4';
import EasyManageVideo from '../assets/video/EasyManage.mp4';
import { useState } from 'react';


const courseProjects = [
  {
    id: 'project1',
    title: 'Aniverse',
    img: aniverseImg,
    video: aniverseVideo,
    desc: 'Anime forum with discussion systems and customizable profiles.',
    tags: ['Go', 'JS', 'SQLite', 'Docker'],
    github: 'https://github.com/AlexandreJoly76/forum-go',
    githubIcon: githubIcon,
  },
  {
    id: 'project2',
    title: 'Mellow',
    img: socialImg,
    video: socialVideo,
    desc: 'Full-stack social network with real-time chat and groups.',
    tags: ['Go', 'NextJS', 'Tailwind', 'SQLite'],
    github: 'https://github.com/MellowProject/Mellow',
    githubIcon: githubIcon,

  },
  {
    id: 'project3',
    title: 'Space Invader',
    img: makeyourgameImg,
    video: makeyourgameVideo,
    desc: 'JavaScript game with fluid animations and difficulty levels.',
    tags: ['JavaScript', 'HTML5', 'CSS3'],
    github: 'https://github.com/AlexandreJoly76/MakeYourGame-SpaceInvader',
    githubIcon: githubIcon,
  },
  {
    id: 'project4',
    title: 'Real Time Forum',
    img: realtimeImg,
    video: realtimeVideo,
    desc: 'WebSocket powered forum with instant messaging.',
    tags: ['Go', 'WebSockets', 'JS', 'SQLite'],
    github: 'https://github.com/AlexandreJoly76/real-time-forum',
    githubIcon: githubIcon,
  },
  {
    id: 'project5',
    title: 'Groupie Tracker',
    img: groupieImg,
    video: groupieVideo,
    desc: 'Musical artists data explorer using external APIs.',
    tags: ['Go', 'JS', 'API', 'HTML/CSS'],
    github: 'https://github.com/AlexandreJoly76/GroupieTracker',
    githubIcon: githubIcon,
  },
];

const personalProjects = [
  {
    id: 'personal1',
    title: 'Countries API',
    img: fetchcountriesImg,
    video: fetchcountriesVideo,
    desc: 'World explorer with search and filtering features.',
    tags: ['React', 'Fetch API', 'Responsive'],
    github: 'https://github.com/AlexandreJoly76/Fetchcountries',
    githubIcon: githubIcon,
  },
  {
    id: 'personal2',
    title: 'Rolex Racing',
    img: rolexImg,
    video: rolexVideo,
    desc: 'Racing simulation tycoon game with dynamic mechanics.',
    tags: ['Lua', 'Roblox Studio', '3D'],
    game: 'https://www.roblox.com/games/98819646411922/Rolex-Racing-Tycoon#!/about',
    robloxIcon: robloxIcon,
  },
  {
    id: 'personal3',
    title: 'SpreadLab',
    img: spreadlabImg,
    video: spreadlabVideo,
    desc: 'Resource management tycoon in a factory setting.',
    tags: ['Lua', 'Roblox Studio', 'Tycoon'],
    game: 'https://www.roblox.com/games/118032810102771/Spread-Lab#!/about',
    robloxIcon: robloxIcon,
  },
  {
    id: 'personal4',
    title: 'EasyManage',
    img: EasyManage,
    video: EasyManageVideo,
    desc: 'Management tool for personnel and job tracking.',
    tags: ['Python', 'Django', 'JS'],
    github: 'https://github.com/AlexandreJoly76/EasyManager',
    githubIcon: githubIcon,
  }
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState('course-projects');

  const renderProjectCard = (project) => (
    <div 
      className="project-card" 
      key={project.id}
      onMouseEnter={(e) => {
        const video = e.currentTarget.querySelector('video');
        if (video) {
          video.currentTime = 0;
          video.play().catch(() => {});
        }
      }}
      onMouseLeave={(e) => {
        const video = e.currentTarget.querySelector('video');
        if (video) {
          video.pause();
        }
      }}
    >
      <div className="card-image">
        <img src={project.img} alt={project.title} className="static-image" loading="lazy" />
        {project.video && (
          <video className="hover-video" src={project.video} muted loop preload="metadata"></video>
        )}
      </div>
      <div className="card-content">
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="card-links">
          {project.github && (
            <a href={project.github} target="_blank" className="github-link" rel="noreferrer" aria-label="View Code">
              <img src={project.githubIcon} alt="GitHub" />
            </a>
          )}
          {project.game && (
            <a href={project.game} target="_blank" className="github-link game-link" rel="noreferrer" aria-label="Play Game">
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
        <div className="section-title">
          <h2>Featured Work</h2>
        </div>
      </div>
      
      <div className="projects-tabs">
        <button
          className={`project-tab${activeTab === 'course-projects' ? ' active' : ''}`}
          onClick={() => setActiveTab('course-projects')}
        >
          Curriculum
        </button>
        <button
          className={`project-tab${activeTab === 'personal-projects' ? ' active' : ''}`}
          onClick={() => setActiveTab('personal-projects')}
        >
          Side Projects
        </button>
      </div>

      <div className="projects-grid">
        {activeTab === 'course-projects' 
          ? courseProjects.map(renderProjectCard) 
          : personalProjects.map(renderProjectCard)
        }
      </div>
    </section>
  );
};

export default Projects;
