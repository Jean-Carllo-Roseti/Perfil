import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaFileAlt
} from 'react-icons/fa'
import {
  SbContainer,
  SbContent,
  SbOrganiza,
  Descricao,
  Imagem,
  Contatos
} from './styles'
import Foto from '../../assets/image/jeanPerfil.jpeg'

const SobreMim = () => {
  return (
    <SbContainer>
      <SbOrganiza>
        <h2>Desenvolvedor Front-End</h2>
        <SbContent>
          <Imagem>
            <img src={Foto} alt="imagem do titular do portifólio" />
            <Contatos>
              <a
                href="https://github.com/Jean-Carllo-Roseti"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/jean-carllo-roseti/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={30} />
              </a>
              <a href="mailto:jcmar.dev@gmail.com">
                <FaEnvelope size={30} />
              </a>
              <a
                href="https://wa.me/55513991166494"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={30} />
              </a>
              <a
                href="/CvCvAlteranativo.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFileAlt size={30} />
              </a>
            </Contatos>
          </Imagem>
          <Descricao>
            <p>
              Transitei da Engenharia Elétrica para a Programação, trazendo
              comigo um olhar crítico e analítico para a solução de problemas,
              além de habilidades de coordenação e trabalho em equipe
              desenvolvidas ao longo de 5 anos no setor de engenharia clínica em
              hospitais.
              <br />
              <br />
              Minha paixão pela tecnologia me levou a explorar o desenvolvimento
              de software. Desde o final de 2022, estou estudando programação,
              ganhando experiência em várias tecnologias através do curso da
              EBAC. Durante esse período, adquiri conhecimentos em{' '}
              <strong>
                HTML, CSS, JavaScript, React, Redux, Less, Sass e Cypress
              </strong>
              . Este aprendizado intensivo fortaleceu minhas habilidades em
              front-end e me proporcionou uma base sólida para continuar
              evoluindo na área de programação.
              <br />
              <br />
              <strong>Hard Skills: JavaScript Desenvolvimento Front-end</strong>
              <br />
              <br />
              <strong>
                Soft Skills: Comunicação eficaz Trabalho em equipe Capacidade de
                resolver problemas Evolução: Estudando Back-end com foco em
                JavaScript
              </strong>
            </p>
          </Descricao>
        </SbContent>
      </SbOrganiza>
    </SbContainer>
  )
}

export default SobreMim
