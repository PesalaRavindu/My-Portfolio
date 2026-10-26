import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import project_smart_city from '../../assets/project_smart_city.png';
import project_waste from '../../assets/project_waste.png';
import project_farmer from '../../assets/project_farmer.png';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  const projects = [
    { 
      id: 1, 
      name: 'Smart City Solutions Web App', 
      img: project_smart_city, 
      tag: 'Vue.js Dashboard',
      desc: 'A web-based application developed using Vue.js to showcase smart city services such as urban management, sustainability, and citizen-focused solutions, with a responsive and user-friendly interface.',
      longDesc: 'The Smart City Solutions Web App is a centralized urban management platform engineered to monitor, analyze, and manage smart city infrastructure. It combines real-time data monitoring with intuitive analytics to support sustainability and municipal decision-making.',
      features: [
        'Interactive real-time monitoring of city utilities and smart energy grids',
        'Citizen issue reporting and public municipal service request tracking',
        'Dynamic data visualization dashboards for traffic flow and sustainability metrics',
        'Clean, modular component architecture built with Vue.js'
      ],
      technologies: ['Vue.js', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Vite', 'REST APIs', 'Chart.js'],
      liveDemo: '#',
      github: 'https://github.com/pesala2003'
    },
    { 
      id: 2, 
      name: 'Intelligent Waste Collection', 
      img: project_waste, 
      tag: 'Simulation / Algorithms',
      desc: 'A simulation-based project that applies data structures and algorithms to optimize waste collection routes and scheduling, improving efficiency and resource utilization.',
      longDesc: 'An advanced algorithmic simulation that solves urban waste management logistics. By modeling city nodes and dynamically processing bin fill levels, the system computes the most cost-effective and shortest collection routes, drastically lowering fuel consumption and time.',
      features: [
        'Dijkstra and heuristic graph traversal algorithms for shortest path discovery',
        'Dynamic threshold-based trigger alerts based on simulated bin sensor capacity',
        'Multi-vehicle fleet route dispatching and operational scheduling',
        'Performance metrics calculation comparing traditional vs optimized collection'
      ],
      technologies: ['Java', 'Data Structures & Algorithms', 'Graph Theory', 'OOP', 'Simulation GUI'],
      liveDemo: '#',
      github: 'https://github.com/pesala2003'
    },
    { 
      id: 3, 
      name: 'Farmer–Consumer App', 
      img: project_farmer, 
      tag: 'Android Application',
      desc: 'An Android application that connects farmers directly with consumers, enabling product listings, order management, and seamless communication without intermediaries.',
      longDesc: 'A dedicated mobile application empowering local agricultural communities by eliminating middlemen. Farmers can showcase seasonal produce directly to households, agree on transparent pricing, and manage incoming orders in real time.',
      features: [
        'Direct farmer product catalog with pricing, harvest details, and stock levels',
        'Order processing, tracking, and delivery status updates for buyers',
        'User authentication with role-based dashboards for farmers and buyers',
        'Seamless communication channel for negotiation and customer inquiries'
      ],
      technologies: ['Android Studio', 'Java', 'Firebase Auth', 'Cloud Firestore', 'Material Design'],
      liveDemo: '#',
      github: 'https://github.com/pesala2003'
    },
  ];

  return (
    <div className='portfolio' id='portfolio'>
      <div className="portfolio-title">
        <h2>My Latest Work</h2>
        <div className="title-underline"></div>
      </div>
      <div className="portfolio-container">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="portfolio-card"
            onClick={() => setSelectedProject(project)}
            style={{ cursor: 'pointer' }}
          >
            <img src={project.img} alt={project.name} />
            <div className="portfolio-layer">
              <h3>{project.name}</h3>
              <p className="portfolio-tag">{project.tag}</p>
              <p className="portfolio-desc">{project.desc}</p>
              <button 
                type="button" 
                className="portfolio-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProject(project);
                }}
              >
                <i className="bx bx-link-external"></i> View Project
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Project Details Modal */}
      {selectedProject && (
        <div 
          className="project-modal-overlay" 
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="project-modal" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="modal-close-btn" 
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              <i className="bx bx-x"></i>
            </button>
            
            <div className="modal-image-container">
              <img src={selectedProject.img} alt={selectedProject.name} />
              <div className="modal-image-overlay"></div>
            </div>

            <div className="modal-body">
              <div className="modal-header-info">
                <span className="modal-tag">{selectedProject.tag}</span>
                <h2>{selectedProject.name}</h2>
              </div>

              <div className="modal-section">
                <h4 className="modal-section-title">
                  <i className="bx bx-info-circle"></i> Project Overview
                </h4>
                <p className="modal-description">{selectedProject.longDesc}</p>
              </div>

              <div className="modal-section">
                <h4 className="modal-section-title">
                  <i className="bx bx-check-shield"></i> Key Features
                </h4>
                <ul className="modal-features-list">
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx}>
                      <i className="bx bx-check-circle"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h4 className="modal-section-title">
                  <i className="bx bx-code-alt"></i> Technologies Used
                </h4>
                <div className="modal-tech-stack">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="modal-actions">
                {selectedProject.liveDemo && selectedProject.liveDemo !== '#' ? (
                  <a 
                    href={selectedProject.liveDemo} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="modal-btn-primary"
                  >
                    <i className="bx bx-globe"></i> Live Demo
                  </a>
                ) : (
                  <button 
                    type="button"
                    className="modal-btn-primary" 
                    onClick={() => alert(`Live demo for "${selectedProject.name}" will be linked soon!`)}
                  >
                    <i className="bx bx-globe"></i> Live Demo
                  </button>
                )}

                <a 
                  href={selectedProject.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="modal-btn-secondary"
                >
                  <i className="bx bxl-github"></i> GitHub Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="portfolio-showmore">
        <p>Show More</p>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
};

export default Portfolio;
