import { Link } from 'react-router-dom'

import styled from 'styled-components'

export const HomeHeader = styled.header`
  display: flex;
  padding: 2.5rem;
  gap: 2rem;
  background: ${(props) => props.theme['base-profile']};
  border-radius: 16px;
  margin-top: -7.125rem;
  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`
export const UserCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
  h2 {
    font-size: 1.5rem;
  }
`
export const UserNameAndGithub = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const UserInfosContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`
export const UserInfo = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['base-subtitle']};

  svg {
    color: ${(props) => props.theme['base-label']};
  }
`

export const GitHubLink = styled(Link)`
  color: ${(props) => props.theme.blue};
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
