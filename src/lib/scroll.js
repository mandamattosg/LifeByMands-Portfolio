// As seções ficam todas em /home. Como o roteamento usa o "#" (HashRouter),
// a navegação entre elas é feita com scrollIntoView, e não com links "#id".
export function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
