import Window from '../components/Window.jsx'
import PixelButton from '../components/PixelButton.jsx'
import { PixelCursor, PixelHeart } from '../components/Decorations.jsx'
import { scrollToSection } from '../lib/scroll.js'

// Baseada no slide "Introduction": barra de título + janela de texto, presas à esquerda.
export default function Apresentacao() {
  return (
    <section id="apresentacao" className="section apresentacao">
      <div className="apresentacao__stage">
        <Window className="title-bar">
          <h2 className="section-title">Apresentação</h2>
        </Window>
        <Window className="apresentacao__body">
          <div className="window-text">
            <p>
              Amanda Mattos Gontijo, conhecida como Mands, é engenheira, leitora e criadora de conteúdo que une
              literatura, tecnologia e criatividade. Nas redes sociais, compartilha sua paixão pelos livros,
              especialmente por meio de recomendações, opiniões, dicas de leitura e conteúdos sobre Kindle.
            </p>
            <p>
              Seu diferencial está em enxergar os livros além das páginas. Com uma formação em engenharia e
              experiência em inteligência artificial e programação, transforma conceitos científicos e tecnológicos
              em conteúdos criativos, acessíveis e curiosos.
            </p>
            <p>
              Seu conteúdo combina personalidade, storytelling e conhecimento técnico, mostrando que a literatura
              pode ser ponto de partida para ideias, experimentos e projetos inesperados. Afinal, ser engenheira e
              leitora é justamente o que torna sua perspectiva única.
            </p>
          </div>
          <PixelButton onClick={() => scrollToSection('assuntos')}>Yes</PixelButton>
        </Window>
        <PixelCursor className="deco apresentacao__cursor" />
      </div>
      <PixelHeart className="deco apresentacao__heart" />
    </section>
  )
}
