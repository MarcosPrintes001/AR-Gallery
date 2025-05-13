import { useState } from 'react'
import './App.css'

const produtos = [
  {
    nome: 'Cadeira Moderna',
    glb: '/Chair.glb',
    poster: '/Chair.webp'
  },
  {
    nome: 'Outro Produto',
    glb: '/Chair.glb',
    poster: '/Chair.webp'
  }
]

function App () {
  const [produtoSelecionado, setProdutoSelecionado] = useState(null)

  return (
    <div className='app'>
      <h1>Galeria de Produtos 3D</h1>
      <div className='galeria'>
        {produtos.map((produto, index) => (
          <div key={index} className='card'>
            <img src={produto.poster} alt={produto.nome} />
            <h2>{produto.nome}</h2>
            <button onClick={() => setProdutoSelecionado(produto)}>
              Ver em 3D
            </button>
          </div>
        ))}
      </div>

      {produtoSelecionado && (
        <div className='modal' onClick={() => setProdutoSelecionado(null)}>
          <model-viewer
            src={produtoSelecionado.glb}
            poster={produtoSelecionado.poster}
            shadow-intensity='1'
            camera-controls
            auto-rotate
            ar
            alt={produtoSelecionado.nome}
            style={{ width: '90%', maxWidth: 600, height: 500 }}
          ></model-viewer>
        </div>
      )}
    </div>
  )
}

export default App
