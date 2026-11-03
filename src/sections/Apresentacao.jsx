import Window from '../components/Window.jsx'
import PixelButton from '../components/PixelButton.jsx'
import { PixelCursor, PixelHeart, Sparkle } from '../components/Decorations.jsx'
import { scrollToSection } from '../lib/scroll.js'
import metodoCientifico from '../assets/apresentacao/metodo-cientifico.jpg'
import womenTechmakers from '../assets/apresentacao/women-techmakers.jpg'
import laboratorio from '../assets/apresentacao/laboratorio.jpg'
import kindle from '../assets/apresentacao/kindle.jpg'
import intrinseca from '../assets/apresentacao/intrinseca.jpg'
import bienalTiktok from '../assets/apresentacao/bienal-tiktok.jpg'

// "focus" é o ponto da foto que fica visível no recorte quadrado (object-position).
const FOTOS = [
  { src: kindle, alt: 'Mands segurando um Kindle', focus: '50% 45%' },
  { src: metodoCientifico, alt: 'Mands em frente a um painel sobre o método científico', focus: '72% 40%' },
  { src: bienalTiktok, alt: 'Mands no espaço do TikTok na Bienal do Livro Rio 2025', focus: '50% 50%' },
  { src: womenTechmakers, alt: 'Mands programando no Women Techmakers', focus: '55% 30%' },
  { src: intrinseca, alt: 'Mands no estande da Intrínseca', focus: '50% 55%' },
  { src: laboratorio, alt: 'Mands montando um circuito no laboratório', focus: '60% 55%' },
]

// Baseada no slide "Introduction": barra de título + janela de texto presas à esquerda,
// com uma colagem de fotos em polaroid ao lado.
export default function Apresentacao() {
  return (
    <section id="apresentacao" className="section apresentacao">
      <div className="apresentacao__layout">
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

        <div className="collage">
          {FOTOS.map((foto) => (
            <figure className="polaroid" key={foto.src}>
              <img src={foto.src} alt={foto.alt} style={{ objectPosition: foto.focus }} loading="lazy" />
            </figure>
          ))}
          <Sparkle className="deco collage__sparkle" />
          <PixelHeart className="deco collage__heart" />
        </div>
      </div>
    </section>
  )
}
