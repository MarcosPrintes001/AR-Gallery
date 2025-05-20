import { useRef } from 'react'
import './ModalViewer.css'

function ModalViewer ({ produto, onClose }) {
  const modalRef = useRef(null)

  const handleClickOutside = (e) => {
    if (e.target === modalRef.current) {
      onClose()
    }
  }

  return (
    <div
      className='modal'
      ref={modalRef}
      onClick={handleClickOutside}
    >
      <button className='close-button' onClick={onClose}>
        ×
      </button>
      <div className='model-viewer-container'>
        <model-viewer
          class='viewer'
          src={produto.glb}
          ios-src={produto.usdz}
          poster={produto.poster}
          shadow-intensity='1'
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
