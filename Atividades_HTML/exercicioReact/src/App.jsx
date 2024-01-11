import testando from './Components/Cabecalho/index'

function App() {
  return (
    <div>
      < testando />
        <div>
          <form className="">
            <input className="" type="text" placeholder="Nome" />
            <input className="" type="number" placeholder="Altura" />
            <input className="" type="number" placeholder="Peso" />
            <div>
            <label className="">Seu IMC é de 24, Seu peso é ideial (parabens) </label>
            </div>
          </form>
        </div>
    </div>
  )
}

export default App;
