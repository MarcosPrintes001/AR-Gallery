import './Galeria.css'

function Galeria ({ produtos, onSelecionar }) {
  return (
    <div className='galeria'>
      {produtos.map((produto, index) => (
        <div key={index} className='card'>
          <img
            src={produto.poster}
            alt={produto.nome}
            onError={e => (e.target.src = '/fallback.jpg')}
          />
          <h2>{produto.nome}</h2>
          <button onClick={() => onSelecionar(produto)}>Ver em 3D</button>
        </div>
      ))}
    </div>
  )
}

export default Galeria
