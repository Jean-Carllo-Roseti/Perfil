

function App() {
  return (
    <div>
        <header>
          <div className="container">
            <h1>Calculadora IMC</h1>
          <div>
            <img src="https://www.drrogermoura.com.br/images/artigos/tabela-imc.png" alt="tabela de informações sobre IMC" />
          </div>
          </div>
        </header> 
        <div>
          <form action="">
            <input type="text" placeholder="Nome" />
            <input type="number" placeholder="Altura" />
            <input type="number" placeholder="Peso" />
            <div>
            <label htmlFor="">Seu IMC é de 24, Seu peso é ideial (parabens) </label>
            </div>
          </form>
        </div>
    </div>
  )
}

export default App;
