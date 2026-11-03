import { PixelHeart } from '../components/Decorations.jsx'

// Baseada no slide "Goal": faixa rosa de ponta a ponta com um recorte em V
// que deixa o xadrez do fundo aparecer.
export default function Conteudo() {
  return (
    <section id="conteudo" className="section conteudo">
      <div className="conteudo__top">
        <div className="conteudo__v">
          <h2 className="section-title">Conteúdo</h2>
        </div>
        <PixelHeart className="deco conteudo__heart conteudo__heart--left" />
        <PixelHeart className="deco conteudo__heart conteudo__heart--right" />
      </div>
      <div className="conteudo__body" />
    </section>
  )
}
