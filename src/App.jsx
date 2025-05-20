import { useEffect, useState } from 'react';
import Galeria from './components/Galeria';
import ModalViewer from './components/ModalViewer';
import './App.css';

const API_URL = import.meta.env.VITE_API_URL

const baseURL = API_URL || 'https://api.example.com';

function App() {
  const [produtos, setProdutos] = useState([]);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  useEffect(() => {
    fetch(baseURL + '/api/obras')
      .then(res => res.json())
      .then(data => {
        const formatados = data.map((item) => ({
          nome: item.title,
          descricao: item.description,
          glb: baseURL + item.object3DPath,
          usdz: baseURL + item.object3DPath.replace('.glb', '.usdz'),
          poster: baseURL + item.imageObjectPath,
          dimensoes: item.dimensions,
          arPlacement: item.artTypeName === 'Pintura' ? 'wall' : 'floor'
        }))
        setProdutos(formatados);
      });
  }, []);

  return (
    <div className='app'>
      <h1>Galeria de Produtos 3D</h1>
      <Galeria produtos={produtos} onSelecionar={setProdutoSelecionado} />
      {produtoSelecionado && (
        <ModalViewer produto={produtoSelecionado} onClose={() => setProdutoSelecionado(null)} />
      )}
    </div>
  );
}

export default App;