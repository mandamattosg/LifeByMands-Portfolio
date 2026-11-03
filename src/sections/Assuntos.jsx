import Window from '../components/Window.jsx'
import PixelButton from '../components/PixelButton.jsx'
import { scrollToSection } from '../lib/scroll.js'
import {
  AtomIcon,
  BoltIcon,
  BookIcon,
  ClapperIcon,
  FourPointStar,
  GearIcon,
  PixelCursor,
  PixelHeart,
  Sparkle,
  Star,
} from '../components/Decorations.jsx'

// Fileiras de frases e símbolos. Em telas largas cada fileira é uma linha, e as
// pontas alternam (símbolos nas pontas, depois frases, depois símbolos) para os
// símbolos ficarem espalhados. Em telas estreitas as fileiras se desfazem e tudo
// quebra linha sozinho. "estilo" escolhe o visual do adesivo, "giro" a inclinação
// e "y" um deslocamento vertical que desalinha os itens.
const FILEIRAS = [
  [
    { tipo: 'icone', Icone: Sparkle, giro: 0, y: -16 },
    { tipo: 'frase', texto: 'recomendação de livros', estilo: 'grande', giro: -4, y: -4 },
    { tipo: 'icone', Icone: BookIcon, giro: -10, y: -12 },
    { tipo: 'frase', texto: 'a ciência por trás dos livros', estilo: 'rosa', giro: 5, y: -6 },
    { tipo: 'icone', Icone: AtomIcon, giro: 12, y: 16 },
  ],
  [
    { tipo: 'frase', texto: 'cultura pop', estilo: 'contorno', giro: -8, y: 14 },
    { tipo: 'icone', Icone: PixelHeart, giro: -8, y: -12 },
    { tipo: 'frase', texto: 'como o kindle funciona', estilo: 'branco', giro: 4, y: -10 },
    { tipo: 'icone', Icone: BoltIcon, giro: 10, y: 12 },
    { tipo: 'frase', texto: 'adaptações literárias', estilo: 'cinema', giro: -5, y: 6 },
  ],
  [
    { tipo: 'icone', Icone: ClapperIcon, giro: 8, y: -10 },
    { tipo: 'frase', texto: 'projetos de engenharia para leitores', estilo: 'azul', giro: -3, y: 8 },
    { tipo: 'icone', Icone: GearIcon, giro: 0, y: -10 },
  ],
]

export default function Assuntos() {
  return (
    <section id="assuntos" className="section assuntos">
      <div className="assuntos__stage">
        <Window className="assuntos__header">
          <h2 className="section-title">O universo Life By Mands</h2>
        </Window>
        <Window className="assuntos__box">
          <ul className="topics" aria-label="Assuntos abordados no perfil">
            {FILEIRAS.map((fileira, f) => (
              <li key={f} className="topics__row">
                <ul>
                  {fileira.map((item, i) =>
                    item.tipo === 'frase' ? (
                      <li
                        key={i}
                        className={`topic topic--${item.estilo}`}
                        style={{ '--giro': `${item.giro}deg`, '--y': `${item.y}px` }}
                      >
                        {item.texto}
                      </li>
                    ) : (
                      <li
                        key={i}
                        className="topic-icon"
                        style={{ '--giro': `${item.giro}deg`, '--y': `${item.y}px` }}
                        aria-hidden="true"
                      >
                        <item.Icone />
                      </li>
                    ),
                  )}
                </ul>
              </li>
            ))}
          </ul>
          {/* Duas estrelas em cantos opostos da janela, fora do fluxo */}
          <Star className="assuntos__corner assuntos__corner--a" />
          <FourPointStar className="assuntos__corner assuntos__corner--b" />
          <PixelButton onClick={() => scrollToSection('conteudo')}>Ver conteúdos</PixelButton>
        </Window>
        <PixelCursor className="deco assuntos__cursor" />
        <Sparkle className="deco assuntos__sparkle" fill="var(--blue-deep)" />
      </div>
    </section>
  )
}
