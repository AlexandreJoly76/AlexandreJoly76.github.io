import React from 'react';
import htmlIcon from '../assets/svg/HTML.svg';
import cssIcon from '../assets/svg/CSS.svg';
import jsIcon from '../assets/svg/Javascript.svg';
import reactIcon from '../assets/svg/React.svg';
import goIcon from '../assets/svg/Go.svg';
import railsIcon from '../assets/svg/Rails.svg';
import javaIcon from '../assets/svg/Java.svg';
import nextjsIcon from '../assets/svg/Nextjs2.svg';
import luaIcon from '../assets/svg/Lua.svg';
import githubIcon from '../assets/svg/Github.svg';
import figmaIcon from '../assets/svg/Figma.svg';
import dockerIcon from '../assets/svg/Docker.svg';
import taigaIcon from '../assets/svg/Taiga.svg';
import vscodeIcon from '../assets/svg/VSCode.svg';
import robloxIcon from '../assets/svg/RobloxStudio.svg';
import notionIcon from '../assets/svg/Notion-light.svg';
import tailwindIcon from '../assets/svg/Tailwind.svg';

const skillsData = [
  {
    category: 'Frontend',
    items: [
      { name: 'HTML', icon: htmlIcon },
      { name: 'CSS', icon: cssIcon },
      { name: 'Tailwind', icon: tailwindIcon },
      { name: 'JavaScript', icon: jsIcon },
      { name: 'React', icon: reactIcon },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Go', icon: goIcon },
      { name: 'Rails', icon: railsIcon },
      { name: 'Java', icon: javaIcon },
      { name: 'Next.js', icon: nextjsIcon },
      { name: 'Lua', icon: luaIcon },
    ],
  },
  {
    category: 'Outils',
    items: [
      { name: 'GitHub', icon: githubIcon },
      { name: 'Figma', icon: figmaIcon },
      { name: 'Docker', icon: dockerIcon },
      { name: 'Taiga', icon: taigaIcon },
      { name: 'VS Code', icon: vscodeIcon },
      { name: 'Roblox Studio', icon: robloxIcon },
      { name: 'Notion', icon: notionIcon },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="animate-section">
      <div className="section-header">
        <div className="section-title">
          <span className="title-decoration"></span>
          <h2>My <span className="highlight">Skills</span></h2>
          <span className="title-decoration"></span>
        </div>
      </div>
      <div className="skills-container">
        {skillsData.map((cat) => (
          <div className="skill-category" key={cat.category}>
            <h3 className="category-title">{cat.category}</h3>
            <div className="skills-grid">
              {cat.items.map((item) => (
                <div className="skill-item" key={item.name}>
                  <img src={item.icon} alt={item.name} />
                  <span className="tech-name">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
