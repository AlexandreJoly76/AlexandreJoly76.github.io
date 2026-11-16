import React from 'react';
import { useLang } from '../i18n/LangContext';
import htmlIcon from '../assets/svg/HTML.svg';
import cssIcon from '../assets/svg/CSS.svg';
import jsIcon from '../assets/svg/Javascript.svg';
import tsIcon from '../assets/svg/typescript.svg';
import reactIcon from '../assets/svg/React.svg';
import nextjsIcon from '../assets/svg/Nextjs2.svg';
import angularIcon from '../assets/svg/angular.svg';
import tailwindIcon from '../assets/svg/Tailwind.svg';
import webflowIcon from '../assets/svg/webflow.svg';
import figmaIcon from '../assets/svg/Figma.svg';
import railsIcon from '../assets/svg/Rails.svg';
import pythonIcon from '../assets/svg/python.svg';
import flaskIcon from '../assets/svg/flask.svg';
import djangoIcon from '../assets/svg/django.svg';
import javaIcon from '../assets/svg/Java.svg';
import springIcon from '../assets/svg/spring.svg';
import goIcon from '../assets/svg/Go.svg';
import nodeIcon from '../assets/svg/nodejs.svg';
import luaIcon from '../assets/svg/Lua.svg';
import postgresIcon from '../assets/svg/postgresql.svg';
import redisIcon from '../assets/svg/redis.svg';
import neo4jIcon from '../assets/svg/neo4j.svg';
import sqliteIcon from '../assets/svg/Sqlite.svg';
import dockerIcon from '../assets/svg/Docker.svg';
import jenkinsIcon from '../assets/svg/jenkins.svg';
import githubActionsIcon from '../assets/svg/githubactions.svg';
import awsIcon from '../assets/svg/aws.svg';
import ansibleIcon from '../assets/svg/ansible.svg';
import sonarqubeIcon from '../assets/svg/sonarqube.svg';
import linuxIcon from '../assets/svg/linux.svg';
import githubIcon from '../assets/svg/Github.svg';
import postmanIcon from '../assets/svg/postman.svg';
import vscodeIcon from '../assets/svg/VSCode.svg';
import intellijIcon from '../assets/svg/intellij.svg';
import notionIcon from '../assets/svg/Notion-light.svg';
import taigaIcon from '../assets/svg/Taiga.svg';
import robloxIcon from '../assets/svg/RobloxStudio.svg';

// tone: 'dark' = logo sombre, inversé en thème sombre ; 'light' = logo clair, inversé en thème clair.
const skillsData = [
  {
    id: 'frontend',
    items: [
      { name: 'HTML5', icon: htmlIcon },
      { name: 'CSS3', icon: cssIcon },
      { name: 'JavaScript', icon: jsIcon },
      { name: 'TypeScript', icon: tsIcon },
      { name: 'React', icon: reactIcon },
      { name: 'Next.js', icon: nextjsIcon },
      { name: 'Angular', icon: angularIcon },
      { name: 'Tailwind', icon: tailwindIcon },
      { name: 'Webflow', icon: webflowIcon },
      { name: 'Figma', icon: figmaIcon },
    ],
  },
  {
    id: 'backend',
    items: [
      { name: 'Ruby on Rails', icon: railsIcon },
      { name: 'Python', icon: pythonIcon },
      { name: 'Flask', icon: flaskIcon, tone: 'dark' },
      { name: 'Django', icon: djangoIcon },
      { name: 'Java', icon: javaIcon },
      { name: 'Spring Boot', icon: springIcon },
      { name: 'Go', icon: goIcon },
      { name: 'Node.js', icon: nodeIcon },
      { name: 'Lua', icon: luaIcon },
    ],
  },
  {
    id: 'data',
    items: [
      { name: 'PostgreSQL', icon: postgresIcon },
      { name: 'Redis', icon: redisIcon },
      { name: 'Neo4j', icon: neo4jIcon, tone: 'dark' },
      { name: 'SQLite', icon: sqliteIcon, tone: 'light' },
    ],
  },
  {
    id: 'devops',
    items: [
      { name: 'Docker', icon: dockerIcon },
      { name: 'GitHub Actions', icon: githubActionsIcon },
      { name: 'Jenkins', icon: jenkinsIcon },
      { name: 'AWS', icon: awsIcon, tone: 'dark' },
      { name: 'Ansible', icon: ansibleIcon, tone: 'dark' },
      { name: 'SonarQube', icon: sonarqubeIcon },
      { name: 'Linux', icon: linuxIcon, tone: 'dark' },
    ],
  },
  {
    id: 'tools',
    items: [
      { name: 'GitHub', icon: githubIcon },
      { name: 'Postman', icon: postmanIcon },
      { name: 'VS Code', icon: vscodeIcon },
      { name: 'IntelliJ', icon: intellijIcon },
      { name: 'Notion', icon: notionIcon },
      { name: 'Taiga', icon: taigaIcon },
      { name: 'Roblox Studio', icon: robloxIcon },
    ],
  },
];

const Skills = () => {
  const { t } = useLang();
  return (
    <section id="skills">
      <div className="section-header">
        <div className="section-title">
          <h2>{t.skills.title}</h2>
        </div>
      </div>
      <div className="skills-container">
        {skillsData.map((cat) => (
          <div className="skill-category" key={cat.id}>
            <h3 className="category-title">{t.skills.categories[cat.id]}</h3>
            <div className="skills-grid">
              {cat.items.map((item) => (
                <div className="skill-item" key={item.name}>
                  <img
                    src={item.icon}
                    alt={item.name}
                    loading="lazy"
                    className={item.tone ? `icon-${item.tone}` : undefined}
                  />
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
