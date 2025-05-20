import './ModalViewer.css'

function base64ToBlobUrl(base64, mime = 'model/gltf-binary') {
  const byteCharacters = atob(base64)
  const byteArrays = []
  for (let i = 0; i < byteCharacters.length; i++) {
    byteArrays.push(byteCharacters.charCodeAt(i))
  }
  const blob = new Blob([new Uint8Array(byteArrays)], { type: mime })
  return URL.createObjectURL(blob)
}

function ModalViewer({ produto, onClose }) {
  const glbSrc = produto.glbBase64
    ? base64ToBlobUrl(produto.glbBase64)
    : produto.glb

  const usdzSrc = produto.usdzBase64
    ? base64ToBlobUrl(produto.usdzBase64, 'model/vnd.usdz+zip')
    : produto.usdz

  return (
    <div
      className='modal'
      onClick={(e) => e.target.className === 'modal' && onClose()}
    >
      <button className='close-button' onClick={onClose}>
        ×
      </button>

      <model-viewer
        src={glbSrc}
        ios-src={usdzSrc}
        poster={produto.poster}
        shadow-intensity='1'
        camera-controls
        auto-rotate
        ar
        ar-placement={produto.arPlacement || 'floor'}
        ar-scale='auto'
        alt={produto.nome}
        style={{
          width: '90%',
          maxWidth: 600,
          height: 500
        }}
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
  )
}

export default ModalViewer
