import Efood from '../../assets/images/Efood.png'
import Amiibo from '../../assets/images/Amiibo.png'

import {
  PortfolioContent,
  ProjectCard,
  ProjectImage,
  ProjectDetails,
  TechList,
  ProjectLinks,
  CardsColunas
} from './styles'

const projects = [
  {
    title: 'Efood',
    image: Efood,
    description:
      'Este projeto visa conectar os usuários a uma ampla rede de fornecedores de alimentos, incluindo restaurantes, lanchonetes e mercados. ',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://projeto6-parte1.vercel.app/',
    repoLink: 'https://github.com/Jean-Carllo-Roseti/projeto6Parte1'
  },
  {
    title: 'Amiibos',
    image: Amiibo,
    description:
      'Esta aplicação foi desenvolvida para oferecer uma consulta fácil sobre amiibos, fornecendo informações essenciais sobre cada lançamento e os jogos compatíveis.',
    technologies: ['React', 'Redux', 'Node.js'],
    liveLink: 'https://amiibo-xi.vercel.app/',
    repoLink: 'https://github.com/Jean-Carllo-Roseti/Amiibo'
  }
  // {
  //   title: 'Amiibos',
  //   image: Amiibo,
  //   description:
  //     'Esta aplicação foi desenvolvida para oferecer uma consulta fácil sobre amiibos, fornecendo informações essenciais sobre cada lançamento e os jogos compatíveis.',
  //   technologies: ['React', 'Redux', 'Node.js'],
  //   liveLink: 'https://amiibo-xi.vercel.app/',
  //   repoLink: 'https://github.com/Jean-Carllo-Roseti/Amiibo'
  // },
  // {
  //   title: 'Amiibos',
  //   image: Amiibo,
  //   description:
  //     'Esta aplicação foi desenvolvida para oferecer uma consulta fácil sobre amiibos, fornecendo informações essenciais sobre cada lançamento e os jogos compatíveis.',
  //   technologies: ['React', 'Redux', 'Node.js'],
  //   liveLink: 'https://amiibo-xi.vercel.app/',
  //   repoLink: 'https://github.com/Jean-Carllo-Roseti/Amiibo'
  // }
  // Adicione mais projetos conforme necessário
]

const Projetos = () => {
  return (
    <PortfolioContent id="projetos">
      <h2>Meus Projetos</h2>
      <CardsColunas>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectDetails>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <TechList>
                {project.technologies.map((tech, techIndex) => (
                  <li key={techIndex}>{tech}</li>
                ))}
              </TechList>
              <ProjectLinks>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Projeto
                </a>
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Código Fonte
                </a>
              </ProjectLinks>
            </ProjectDetails>
          </ProjectCard>
        ))}
      </CardsColunas>
    </PortfolioContent>
  )
}

export default Projetos
