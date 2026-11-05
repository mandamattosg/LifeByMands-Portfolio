import Capa from '../sections/Capa.jsx'
import Apresentacao from '../sections/Apresentacao.jsx'
import Assuntos from '../sections/Assuntos.jsx'
import Conteudo from '../sections/Conteudo.jsx'
import Metricas from '../sections/Metricas.jsx'
import Contato from '../sections/Contato.jsx'

export default function Home() {
  return (
    <main>
      <Capa />
      <Apresentacao />
      <Assuntos />
      <Conteudo />
      <Metricas />
      <Contato />
    </main>
  )
}
