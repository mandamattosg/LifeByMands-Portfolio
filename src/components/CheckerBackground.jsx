// Xadrez azul e branco "derretido", como o fundo do PDF.
// É uma imagem pronta (src/assets/fundo-xadrez.png), já com o azul a 50% sobre o branco.
// Antes era desenhado na hora com um filtro SVG de distorção, mas o Safari do iPhone
// não desenha filtros desse tamanho e o fundo ficava branco.
export default function CheckerBackground() {
  return <div className="checker-bg" aria-hidden="true" />
}
