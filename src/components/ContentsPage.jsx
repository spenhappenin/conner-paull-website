import { Link } from 'react-router-dom'

const ContentsPage = ({ contents }) => {
  return (
    <div>
      { contents.map(({ id, image, name, url, }) => (
        <Link to={url}>
          <img alt={name} key={id} src={image} />
        </Link>
      ))}
    </div>
  )
}

export default ContentsPage
