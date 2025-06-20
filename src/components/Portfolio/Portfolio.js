import React, { useState } from 'react'; // 1. Importamos useState
import './Portfolio.css';

// --- ¡EDITA AQUÍ TUS PROYECTOS! ---
// (No necesitas cambiar nada aquí, tu listado de proyectos sigue igual)
const projectsData = [
  {
    id: 1,
    title: 'RestoManager',
    description: 'Un sistema de gestión (POS/ERP) para restaurantes, desarrollado con un enfoque en la eficiencia operativa a través de una interfaz visual, intuitiva y un potente panel de reportes en tiempo real.',
    imageUrl: 'RestoManagement 1.png',
    technologies: ['React', 'Redux', 'React Router', 'CSS Grid & Flexbox', 'Recharts', 'jsPDF'],
    liveUrl: '#', // Reemplaza con el enlace a tu demo en vivo
    repoUrl: '#', // Reemplaza con el enlace a tu repositorio de GitHub 
  },
  {
    id: 2,
    title: 'Business AI Platform',
    description: 'Una suite de herramientas de IA para PyMEs, desarrollada para automatizar procesos y potenciar la productividad mediante la generación de contenido y el análisis de datos.',
    imageUrl: 'BIAplatform.png', // Reemplaza con tu imagen
    technologies: ['React', 'D3.js', 'Python', 'Flask', 'PostgreSQL'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    "id": 3,
    "title": "CelularStore",
    "description": "Una plataforma de e-commerce para celulares, diseñada con un fuerte enfoque en la experiencia de usuario y una estética premium. Ofrece una interfaz minimalista y responsiva para listar, buscar y publicar productos de forma dinámica e intuitiva.",
    "imageUrl": "celstore.png",
    "technologies": ["React", "React Hooks (useState & useEffect)", "CSS Moderno (Grid & Flexbox)", "JavaScript (ES6+)", "JSON"],
    "liveUrl": "#",
    "repoUrl": "#"
  }
];


const Portfolio = () => {
  // 2. Estados para manejar el modal
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  // 3. Funciones para abrir y cerrar el modal
  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedImage('');
  };

  return (
    <>
      <section id="portfolio" className="portfolio section">
        <h2 className="section-title">Proyectos Destacados</h2>
        <div className="portfolio-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="portfolio-item">
              
              {/* 4. Hacemos la imagen clickeable */}
              <div className="image-container" onClick={() => openModal(project.imageUrl)}>
                <img src={project.imageUrl} alt={project.title} className="portfolio-image" />
                <div className="image-overlay">Ver Imagen</div>
              </div>
              
              <div className="portfolio-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="portfolio-tags">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>
                <div className="portfolio-links">
                  {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="portfolio-link">Ver Demo</a>}
                  {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="portfolio-link">Ver Código</a>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. El Modal (solo se muestra si modalVisible es true) */}
      {modalVisible && (
        <div className="image-modal-overlay" onClick={closeModal}>
          <button className="modal-close-button" onClick={closeModal}>&times;</button>
          {/* Detenemos la propagación para que al hacer click en la imagen no se cierre el modal */}
          <img src={selectedImage} alt="Vista ampliada del proyecto" className="modal-image" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  );
};

export default Portfolio;