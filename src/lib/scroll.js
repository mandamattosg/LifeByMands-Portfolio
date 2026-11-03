// As seções ficam todas em /home. Como o roteamento usa o "#" (HashRouter),
// a navegação entre elas é feita rolando a página, e não com links "#id".
//
// Centraliza o conteúdo da seção na tela quando ele cabe; quando não cabe
// (celular, telas baixas), alinha o começo do conteúdo perto do topo para
// o título não ficar escondido.
const MARGEM_TOPO = 24

export function scrollToSection(id) {
  const section = document.getElementById(id)
  if (!section) return

  const conteudo = section.firstElementChild ?? section
  const { top, height } = conteudo.getBoundingClientRect()
  const telaAltura = window.innerHeight
  const offset = height <= telaAltura ? (telaAltura - height) / 2 : MARGEM_TOPO

  window.scrollTo({ top: window.scrollY + top - offset, behavior: 'smooth' })
}
