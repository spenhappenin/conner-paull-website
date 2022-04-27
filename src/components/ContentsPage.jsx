import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { ContentsContainer } from '../styles/contents'

const ContentsPage = ({ contents }) => {
  return (
    <ContentsContainer>
      { contents.map(({ image, name, url, }) => (
        <Link key={name} to={`/${url}`}>
          <ContentImage alt={name} src={image} />
        </Link>
      ))}
    </ContentsContainer>
  )
}

const ContentImage = styled.img`
  height: 200px;
  padding: 1rem;
`

export default ContentsPage
