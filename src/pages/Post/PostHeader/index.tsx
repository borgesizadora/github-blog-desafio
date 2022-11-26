import { Link } from 'react-router-dom'

import { formatDateWithSuffix } from '~/utils/formatters'

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import * as S from './styles'

interface PostHeaderProps {
  gitHubLink: string
  title: string
  userName: string
  date: Date
  commentsAmount: number
}

export const PostHeader = ({
  commentsAmount,
  date,
  gitHubLink,
  title,
  userName
}: PostHeaderProps) => {
  return (
    <S.PostHeader>
      <S.PostCard>
        <S.CardTop>
          <Link to="/">
            <S.PostLink>
              <FontAwesomeIcon icon={faChevronLeft} />
              <span>VOLTAR</span>
            </S.PostLink>
          </Link>
          <a href={gitHubLink} target="_blank" rel="noreferrer">
            <S.PostLink>
              <span>VER NO GITHUB</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </S.PostLink>
          </a>
        </S.CardTop>
        <h2>{title}</h2>
        <S.PostInfosContainer>
          <S.PostInfo>
            <FontAwesomeIcon icon={faGithub} />
            <span>{userName}</span>
          </S.PostInfo>
          <S.PostInfo>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>{formatDateWithSuffix(date)}</span>
          </S.PostInfo>
          <S.PostInfo>
            <FontAwesomeIcon icon={faComment} />
            <span>
              {commentsAmount} {commentsAmount === 1 ? 'comentário' : 'comentários'}
            </span>
          </S.PostInfo>
        </S.PostInfosContainer>
      </S.PostCard>
    </S.PostHeader>
  )
}
