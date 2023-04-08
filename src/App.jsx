import { useState } from 'react'
import { Header } from './components/Header'
import { Formulario } from './components/Formulário'
import { Tabela } from './components/Tabela'


export const App = () => {
  const [negociacoes, setNegociacoes] = useState([]);

  const adicionarNegociacao = (negociacao) => {
    setNegociacoes([...negociacoes, negociacao]);
  };    

  return (
    <div className="App">
      <Header titulo="Negociações" />
      <div className='container'>
        <Formulario quandoAdicionar={adicionarNegociacao}/>
        <Tabela negociacoes={negociacoes}/>
      </div>
    </div>
  )
}