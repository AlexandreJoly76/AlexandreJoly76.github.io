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
import { useLang } from '../i18n/LangContext';


const courseProjects = [
  {
    id: 'project1',
    title: 'Aniverse',
    img: aniverseImg,
    video: aniverseVideo,
    tags: ['Go', 'JS', 'SQLite', 'Docker'],
    github: 'https://github.com/AlexandreJoly76/forum-go',
    githubIcon: githubIcon,
  },
  {
    id: 'project2',
    title: 'Mellow',
    img: socialImg,
    video: socialVideo,
    tags: ['Go', 'NextJS', 'Tailwind', 'SQLite'],
    github: 'https://github.com/MellowProject/Mellow',
    githubIcon: githubIcon,

  },
  {
    id: 'project3',
    title: 'Space Invader',
    img: makeyourgameImg,
    video: makeyourgameVideo,
    tags: ['JavaScript', 'HTML5', 'CSS3'],
    github: 'https://github.com/AlexandreJoly76/MakeYourGame-SpaceInvader',
    githubIcon: githubIcon,
  },
  {
    id: 'project4',
    title: 'Real Time Forum',
    img: realtimeImg,
    video: realtimeVideo,
    tags: ['Go', 'WebSockets', 'JS', 'SQLite'],
    github: 'https://github.com/AlexandreJoly76/real-time-forum',
    githubIcon: githubIcon,
  },
  {
    id: 'project5',
    title: 'Groupie Tracker',
    img: groupieImg,
    video: groupieVideo,
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
    tags: ['React', 'Fetch API', 'Responsive'],
    github: 'https://github.com/AlexandreJoly76/Fetchcountries',
    githubIcon: githubIcon,
  },
  {
    id: 'personal2',
    title: 'Rolex Racing',
    img: rolexImg,
    video: rolexVideo,
    tags: ['Lua', 'Roblox Studio', '3D'],
    game: 'https://www.roblox.com/games/98819646411922/Rolex-Racing-Tycoon#!/about',
    robloxIcon: robloxIcon,
  },
  {
    id: 'personal3',
    title: 'SpreadLab',
    img: spreadlabImg,
    video: spreadlabVideo,
    tags: ['Lua', 'Roblox Studio', 'Tycoon'],
    game: 'https://www.roblox.com/games/118032810102771/Spread-Lab#!/about',
    robloxIcon: robloxIcon,
  },
  {
    id: 'personal4',
    title: 'EasyManage',
    img: EasyManage,
    video: EasyManageVideo,
    tags: ['Python', 'Django', 'JS'],
    github: 'https://github.com/AlexandreJoly76/EasyManager',
    githubIcon: githubIcon,
  }
];

const Projects = () => {
  const { t } = useLang();
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
        <p>{t.projects.descs[project.id]}</p>
        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="card-links">
          {project.github && (
            <a href={project.github} target="_blank" className="github-link" rel="noreferrer" aria-label={t.projects.viewCode}>
              <img src={project.githubIcon} alt="GitHub" />
            </a>
          )}
          {project.game && (
            <a href={project.game} target="_blank" className="github-link game-link" rel="noreferrer" aria-label={t.projects.playGame}>
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
          <h2>{t.projects.title}</h2>
        </div>
      </div>
      
      <div className="projects-tabs">
        <button
          className={`project-tab${activeTab === 'course-projects' ? ' active' : ''}`}
          onClick={() => setActiveTab('course-projects')}
        >
          {t.projects.tabCourse}
        </button>
        <button
          className={`project-tab${activeTab === 'personal-projects' ? ' active' : ''}`}
          onClick={() => setActiveTab('personal-projects')}
        >
          {t.projects.tabPersonal}
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
