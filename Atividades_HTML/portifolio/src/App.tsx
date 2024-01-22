import { useState } from "react"
import { ThemeProvider } from "styled-components"

import Sidebar from "./containers/Sidebar"
import Projetos from "./containers/projetos"
import Sobre from "./containers/sobre"
import EstiloGlobal, { Container } from "./styles"
import TemaDark from "./themes/dark"
import TemaLigth from "./themes/light"

function App() {
  const [estaUsandoTemaDark, setEstaUsandoTemaDark] = useState(false)

  function trocaTema() {
    setEstaUsandoTemaDark(!estaUsandoTemaDark)
  }

  return (
    <ThemeProvider theme={estaUsandoTemaDark ? TemaDark : TemaLigth}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
