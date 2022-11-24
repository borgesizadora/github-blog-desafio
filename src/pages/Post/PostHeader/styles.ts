import { Link } from 'react-router-dom'

import styled from 'styled-components'

export const PostHeader = styled.header`
  display: flex;
  padding: 2.5rem;
  gap: 2rem;
  background: ${(props) => props.theme['base-profile']};
  border-radius: 16px;
  margin-top: -7.125rem;
`
export const PostCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
`
export const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
`

export const PostInfosContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`
export const PostInfo = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['base-subtitle']};

  svg {
    color: ${(props) => props.theme['base-label']};
  }
`

export const PostLink = styled(Link)`
  color: ${(props) => props.theme.blue};
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-bottom: 1px solid transparent;
  border-top: 1px solid transparent;
  &:hover {
    transition: border 0.1s;
    border-bottom: 1px solid ${(props) => props.theme.blue};
  }
`
