import Window from '../components/Window.jsx'
import PixelButton from '../components/PixelButton.jsx'
import { CameraIcon, NoteIcon, PixelCursor, Sparkle, Star } from '../components/Decorations.jsx'
import { scrollToSection } from '../lib/scroll.js'

// Números de cada rede. Para atualizar, troque os valores aqui (número inteiro,
// sem pontos): 24700 aparece como "24,7 mil". O total é somado sozinho para as
// métricas que todas as redes têm (mesma "chave").
const REDES = [
  {
    nome: 'Instagram',
    Icone: CameraIcon,
    numeros: [
      { chave: 'seguidores', valor: 24700, rotulo: 'seguidores' },
      { chave: 'visualizacoes', valor: 800000, rotulo: 'visualizações por mês' },
      { chave: 'interacoes', valor: 80000, rotulo: 'interações por mês' },
    ],
  },
  {
    nome: 'TikTok',
    Icone: NoteIcon,
    numeros: [
      { chave: 'seguidores', valor: 39200, rotulo: 'seguidores' },
      { chave: 'visualizacoes', valor: 400000, rotulo: 'visualizações por mês' },
    ],
  },
]

// 24700 → "24,7 mil", 1200000 → "1,2 milhão", 2500000 → "2,5 milhões"
function formatar(n) {
  const num = (v) => v.toLocaleString('pt-BR', { maximumFractionDigits: 1 })
  if (n >= 1e6) return `${num(n / 1e6)} ${n < 2e6 ? 'milhão' : 'milhões'}`
  if (n >= 1e3) return `${num(n / 1e3)} mil`
  return num(n)
}

const TOTAIS = REDES[0].numeros
  .filter(({ chave }) => REDES.every((rede) => rede.numeros.some((n) => n.chave === chave)))
  .map(({ chave, rotulo }) => ({
    chave,
    rotulo,
    valor: REDES.reduce((soma, rede) => soma + rede.numeros.find((n) => n.chave === chave).valor, 0),
  }))

// Título numa janela larga e, embaixo, o total e uma linha por rede social.
// Compacta para caber numa tela de notebook.
// Em lilás, como o Contato, continuando o degradê da seção Conteúdo.
export default function Metricas() {
  return (
    <section id="metricas" className="section metricas">
      <div className="metricas__stage">
        <Window className="metricas__header">
          <h2 className="section-title">Métricas</h2>
        </Window>
        <Window className="metricas__box">
          <div className="metricas__total">
            <h3>Somando as redes</h3>
            <dl>
              {TOTAIS.map((t) => (
                <div key={t.chave}>
                  <dt>{t.rotulo}</dt>
                  <dd>{formatar(t.valor)}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="metricas__redes">
            {REDES.map(({ nome, Icone, numeros }) => (
              <article key={nome} className="rede">
                <h3 className="rede__nome">
                  <Icone />
                  <span>{nome}</span>
                </h3>
                <dl className="rede__numeros">
                  {numeros.map((n) => (
                    <div key={n.chave} className="rede__numero">
                      <dt>{n.rotulo}</dt>
                      <dd>{formatar(n.valor)}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
          <p className="metricas__nota">Visualizações e interações: média mensal.</p>
          <PixelButton onClick={() => scrollToSection('contato')}>Vamos trabalhar juntos?</PixelButton>
        </Window>
        <PixelCursor className="deco metricas__cursor" />
        <Star className="deco metricas__star" />
        <Sparkle className="deco metricas__sparkle" fill="var(--blue-deep)" />
      </div>
    </section>
  )
}
