import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import * as S from './styles'

export const PostHeader = () => {
  return (
    <S.PostHeader>
      <S.PostCard>
        <S.CardTop>
          <S.PostLink to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>VOLTAR</span>
          </S.PostLink>
          <S.PostLink to="/">
            <span>VER NO GITHUB</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </S.PostLink>
        </S.CardTop>
        <h2>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, non. Necessitatibus
        </h2>
        <S.PostInfosContainer>
          <S.PostInfo>
            <FontAwesomeIcon icon={faGithub} />
            <span>borgesizadora</span>
          </S.PostInfo>
          <S.PostInfo>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>Há 1 dia</span>
          </S.PostInfo>
          <S.PostInfo>
            <FontAwesomeIcon icon={faComment} />
            <span>5 comentários</span>
          </S.PostInfo>
        </S.PostInfosContainer>
      </S.PostCard>
    </S.PostHeader>
  )
}
