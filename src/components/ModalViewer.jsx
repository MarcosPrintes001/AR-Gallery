import './ModalViewer.css'

function ModalViewer ({ produto, onClose }) {
  return (
    <div
      className='modal'
      onClick={e => e.target.className === 'modal' && onClose()}
    >
      <button className='close-button' onClick={onClose}>
        ×
      </button>
      <div className='model-viewer-container'>
        <model-viewer
          src={produto.glb}
          ios-src={produto.usdz}
          poster={produto.poster}
          shadow-intensity='1'
          camera-controls
          auto-rotate
          style={{
            width: '90%',
            backgroundColor: '#fff',
            borderRadius: '8px',
            border: 'none',
            color: '#000',
            fontSize: '14px',
            padding: '8px 12px',
            position: 'absolute',
            top: '16px'
          }}
          ar
          ar-placement={produto.arPlacement || 'floor'}
          alt={produto.nome}
        >
          <button slot='ar-button' className='ar-button'>
            👋 Ver em AR
          </button>
        </model-viewer>
      </div>
    </div>
  )
}

export default ModalViewer
