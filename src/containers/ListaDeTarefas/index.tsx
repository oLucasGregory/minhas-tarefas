import Tarefa from '../../components/Tarefa'
import { Titulo } from '../../components/Tarefa/styles'
import { Container } from './styles'
import * as enums from '../../util/enums/Tarefa'

const tarefas = [
  {
    titulo: 'Estudar typeScript',
    descricao: 'Ver a aula 3 da EBAC',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'Pagar boleto',
    descricao: 'baixar do site',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.COMCLUIDA
  },
  {
    titulo: 'ir na academia',
    descricao: 'fazer treino',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            titulo={t.titulo}
            status={t.status}
            prioridade={t.prioridade}
          />
        </li>
      ))}
    </ul>
  </Container>
)
export default ListaDeTarefas
