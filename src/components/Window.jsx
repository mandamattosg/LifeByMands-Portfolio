// Janela rosa com sombra deslocada — o "card" base de todos os slides do PDF.
export default function Window({ children, className = '' }) {
  return <section className={`window ${className}`}>{children}</section>
}
