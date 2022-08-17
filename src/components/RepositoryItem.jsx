export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository.name ?? 'default'}</strong>
      <p>{props.repository.description}</p>

      <a href={props.repositorys.link}>
        Acessar repositório
      </a>
    </li>
  )
}