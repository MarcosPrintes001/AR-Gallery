import './ModalViewer.css';

function ModalViewer({ produto, onClose }) {
  const escala = produto.dimensoes ? parseFloat(produto.dimensoes) / 100 : 1;

  return (
    <div
      className='modal'
      onClick={e => e.target.className === 'modal' && onClose()}
    >
      <button className='close-button' onClick={onClose}>×</button>

      <model-viewer
        src={produto.glb}
        ios-src={produto.usdz}
        poster={produto.poster}
        shadow-intensity='1'
        camera-controls
        auto-rotate
        ar
        ar-placement={produto.arPlacement || 'floor'}
        alt={produto.nome}
        style={{ width: '90%', maxWidth: 600, height: 500 }}
        scale={`${escala} ${escala} ${escala}`}
      >
        <button
          slot='ar-button'
          style={{
            backgroundColor: '#fff',
            borderRadius: '8px',
            border: 'none',
            color: '#000',
            fontSize: '14px',
            padding: '8px 12px',
            position: 'absolute',
            top: '16px',
            right: '16px',
            cursor: 'pointer'
          }}
        >
          👋 Ver em AR
        </button>
      </model-viewer>
    </div>
  );
}

export default ModalViewer;
