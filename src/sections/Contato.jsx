import { FourPointStar } from '../components/Decorations.jsx'

// Baseada no slide "Thank you": título em adesivo sobre uma mancha rosa, com brilhos pretos nas laterais.
export default function Contato() {
  return (
    <section id="contato" className="section contato">
      <div className="contato__stage">
        <div className="contato__blob contato__blob--back" />
        <div className="contato__blob">
          <h2 className="section-title section-title--sticker">Contato</h2>
        </div>
        <div className="contato__stars contato__stars--left">
          <FourPointStar /><FourPointStar /><FourPointStar />
        </div>
        <div className="contato__stars contato__stars--right">
          <FourPointStar /><FourPointStar /><FourPointStar />
        </div>
      </div>
    </section>
  )
}
