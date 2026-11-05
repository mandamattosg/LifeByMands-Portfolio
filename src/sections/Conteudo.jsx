import { useCallback, useState } from 'react'
import { AtomIcon, BookIcon, KindleIcon, NewspaperIcon, PixelHeart } from '../components/Decorations.jsx'
import PixelButton from '../components/PixelButton.jsx'
import VideoCard from '../components/VideoCard.jsx'
import VideoModal from '../components/VideoModal.jsx'
import { CATEGORIAS } from '../data/conteudos.js'
import { getEmbed } from '../lib/embed.js'
import { scrollToSection } from '../lib/scroll.js'

const ICONES = { livro: BookIcon, jornal: NewspaperIcon, atomo: AtomIcon, kindle: KindleIcon }

const comEmbed = (itens) => itens.map((item) => ({ ...item, embed: item.url ? getEmbed(item.url) : null }))

function Cards({ itens, formato, onPlay }) {
  return (
    <div className="video-grid">
      {comEmbed(itens).map((video, i) => (
        <VideoCard key={video.url ?? i} video={video} formato={formato} onPlay={() => onPlay(video)} />
      ))}
    </div>
  )
}

// Baseada no slide "Goal": faixa rosa de ponta a ponta com um recorte em V
// que deixa o xadrez do fundo aparecer. Embaixo, um bloco por estilo de conteúdo.
export default function Conteudo() {
  const [aberto, setAberto] = useState(null)
  const fechar = useCallback(() => setAberto(null), [])

  return (
    <section id="conteudo" className="section conteudo" data-scroll="topo">
      <div className="conteudo__top">
        <div className="conteudo__v">
          <h2 className="section-title">Conteúdo</h2>
        </div>
        <PixelHeart className="deco conteudo__heart conteudo__heart--left" />
        <PixelHeart className="deco conteudo__heart conteudo__heart--right" />
      </div>
      <div className="conteudo__body">
        {CATEGORIAS.map((categoria) => {
          const Icone = ICONES[categoria.icone]
          return (
            <article key={categoria.id} id={`conteudo-${categoria.id}`} className="categoria">
              <h3 className="categoria__titulo">
                {Icone && <Icone />}
                <span>{categoria.titulo}</span>
              </h3>
              {categoria.grupos ? (
                categoria.grupos.map((grupo) => (
                  <div key={grupo.titulo} className="categoria__grupo">
                    <h4 className="categoria__subtitulo">{grupo.titulo}</h4>
                    <Cards itens={grupo.itens} formato={categoria.formato} onPlay={setAberto} />
                  </div>
                ))
              ) : (
                <Cards itens={categoria.itens} formato={categoria.formato} onPlay={setAberto} />
              )}
            </article>
          )
        })}
        <div className="conteudo__fim">
          <PixelButton onClick={() => scrollToSection('metricas')}>Gostou? Veja as métricas</PixelButton>
        </div>
      </div>
      {aberto && <VideoModal video={aberto} onClose={fechar} />}
    </section>
  )
}
