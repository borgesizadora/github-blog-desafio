import { UserType } from '~/@types/user'

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import * as S from './styles'

interface IHomeHeader {
  user: UserType
}
export const HomeHeader = ({ user }: IHomeHeader) => {
  return (
    <S.HomeHeader>
      <img src={user.avatar_url} />
      <S.UserCard>
        <S.UserNameAndGithub>
          <h1>{user.name}</h1>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            <S.GitHubLink>
              <span>GITHUB</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </S.GitHubLink>
          </a>
        </S.UserNameAndGithub>
        <p>{user.bio}</p>
        <S.UserInfosContainer>
          <S.UserInfo>
            <FontAwesomeIcon icon={faGithub} />
            <span>{user.login}</span>
          </S.UserInfo>
          {user.company && (
            <S.UserInfo>
              <FontAwesomeIcon icon={faBuilding} />
              <span>{user.company}</span>
            </S.UserInfo>
          )}
          <S.UserInfo>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>
              {user.followers} {user.followers === 1 ? 'seguidor' : 'seguidores'}
            </span>
          </S.UserInfo>
        </S.UserInfosContainer>
      </S.UserCard>
    </S.HomeHeader>
  )
}
