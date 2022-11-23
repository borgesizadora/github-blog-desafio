import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import * as S from './styles'

export const HomeHeader = () => {
  return (
    <S.HomeHeader>
      <img src="https://github.com/borgesizadora.png" alt="" />
      <S.UserCard>
        <S.UserNameAndGithub>
          <h1>Izadora Borges</h1>
          <S.GitHubLink to="/">
            <span>GITHUB</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </S.GitHubLink>
        </S.UserNameAndGithub>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, non. Necessitatibus
        </p>
        <S.UserInfosContainer>
          <S.UserInfo>
            <FontAwesomeIcon icon={faGithub} />
            <span>borgesizadora</span>
          </S.UserInfo>
          <S.UserInfo>
            <FontAwesomeIcon icon={faBuilding} />
            <span>Rocketseat</span>
          </S.UserInfo>
          <S.UserInfo>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>32 seguidores</span>
          </S.UserInfo>
        </S.UserInfosContainer>
      </S.UserCard>
    </S.HomeHeader>
  )
}
