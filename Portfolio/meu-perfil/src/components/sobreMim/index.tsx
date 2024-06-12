import { SbContainer, SbContent, SbOrganiza, Descricao, Imagem } from './styles'
import Foto from '../../assets/image/jeanPerfil.jpeg'

const SobreMim = () => {
  return (
    <SbContainer>
      <SbOrganiza>
        <h2>Sobre mim</h2>
        <SbContent>
          <Imagem>
            <img src={Foto} alt="imagem do titular do portifólio" />
          </Imagem>
          <Descricao>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              amet distinctio minus. Hic repellat quis odit quia, est ullam
              deserunt placeat in illo impedit? Voluptatem ullam similique
              laborum ipsam sunt.
            </p>
          </Descricao>
        </SbContent>
      </SbOrganiza>
    </SbContainer>
  )
}

export default SobreMim
