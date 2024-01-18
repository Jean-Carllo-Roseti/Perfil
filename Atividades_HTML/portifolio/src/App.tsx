import Sidebar from "./containers/Sidebar"
import Projetos from "./containers/projetos"
import Sobre from "./containers/sobre"
import EstiloGlobal, { Container } from "./styles"

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  )
}

export default App
