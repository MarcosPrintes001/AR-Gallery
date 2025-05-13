import { useState } from 'react'
import './App.css'
import Galeria from './components/Galeria'
import ModalViewer from './components/ModalViewer'
import { produtos } from './data/produtos.js'

function App () {
  const [produtoSelecionado, setProdutoSelecionado] = useState(null)

  return (
    <div className='app'>
      <h1>Galeria de Produtos 3D</h1>
      <Galeria produtos={produtos} onSelecionar={setProdutoSelecionado} />
      {produtoSelecionado && (
        <ModalViewer
          produto={produtoSelecionado}
          onClose={() => setProdutoSelecionado(null)}
        />
      )}
    </div>
  )
}

export default App
