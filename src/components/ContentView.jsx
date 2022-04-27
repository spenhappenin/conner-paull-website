import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { allData } from '../data/content'
import { ContentsContainer } from '../styles/contents'

const ContentView = () => {
  const { contentName } = useParams()
  const [content, setContent] = useState({})

  useEffect(() => {
    setContent(allData.find(data => data.url === contentName))
  }, [])

  return (
    <ContentsContainer>
      <ContentVideo alt={content?.name} src={content?.image} />
    </ContentsContainer>
  )
}

const ContentVideo = styled.img`
  width: 80%;
`

export default ContentView
