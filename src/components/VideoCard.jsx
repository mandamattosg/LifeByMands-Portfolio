// Card de conteúdo: capa, botão (play nos vídeos, fotos empilhadas nos carrosséis)
// e título. Clicar abre o player (VideoModal).
// Sem link (video.embed nulo), vira um card "Em breve" que não abre nada.
export default function VideoCard({ video, formato = 'video', onPlay }) {
  const disponivel = Boolean(video.embed)
  const carrossel = formato === 'carrossel'
  const acao = carrossel ? 'Ver carrossel' : 'Assistir'

  return (
    <button
      type="button"
      className={`video-card video-card--${formato} ${disponivel ? '' : 'video-card--em-breve'}`}
      onClick={disponivel ? onPlay : undefined}
      disabled={!disponivel}
      aria-label={disponivel ? `${acao}: ${video.titulo}` : 'Conteúdo em breve'}
    >
      <span className={`video-card__cover ${video.capa ? '' : 'video-card__cover--vazia'}`}>
        {video.capa && <img src={video.capa} alt="" loading="lazy" />}
        {disponivel && (
          <span className="video-card__play" aria-hidden="true">
            {carrossel ? (
              <svg viewBox="0 0 24 24" className="video-card__icon-carrossel">
                <rect x="8" y="3" width="13" height="13" rx="2" />
                <path d="M5 7v11a2 2 0 0 0 2 2h11" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </span>
        )}
      </span>
      <span className="video-card__title">{video.titulo}</span>
    </button>
  )
}
