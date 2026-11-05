import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import PixelButton from './PixelButton.jsx'

// Janela rosa que abre por cima da página com o player da rede social.
// O player (iframe) só é criado quando a janela abre, para o site continuar leve.
export default function VideoModal({ video, onClose }) {
  const fecharRef = useRef(null)

  useEffect(() => {
    const anterior = document.activeElement
    const onKey = (e) => e.key === 'Escape' && onClose()

    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    fecharRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      anterior?.focus?.()
    }
  }, [onClose])

  return createPortal(
    <div className="video-modal" onClick={onClose}>
      <div
        className={`window video-modal__window video-modal__window--${video.embed.proporcao}`}
        role="dialog"
        aria-modal="true"
        aria-label={video.titulo}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="video-modal__bar">
          <span>{video.titulo}</span>
          <button ref={fecharRef} type="button" className="video-modal__x" onClick={onClose} aria-label="Fechar">
            ×
          </button>
        </div>
        <div className="video-modal__player">
          <iframe
            src={video.embed.src}
            title={video.titulo}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        </div>
        <div className="video-modal__actions">
          <a className="pixel-button" href={video.url} target="_blank" rel="noopener noreferrer">
            <span>Abrir no {video.embed.plataforma}</span>
          </a>
          <PixelButton onClick={onClose}>Fechar</PixelButton>
        </div>
      </div>
    </div>,
    document.body,
  )
}
