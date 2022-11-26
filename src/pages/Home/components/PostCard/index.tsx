import { Link } from 'react-router-dom'

import { IssueType } from '~/@types/issues'
import { formatDateWithSuffix } from '~/utils/formatters'

import * as S from './styled'

interface PostCardProps {
  post: IssueType
}

export const PostCard: React.FC<PostCardProps> = ({
  post: { body, created_at, title, number }
}) => {
  return (
    <Link to={`/${number}`}>
      <S.CardContainer>
        <article>
          <S.CardContent>
            <S.CardHeader>
              <h3>{title}</h3>
              <span>{formatDateWithSuffix(new Date(created_at))}</span>
            </S.CardHeader>
            <S.Text>{body}</S.Text>
          </S.CardContent>
        </article>
      </S.CardContainer>
    </Link>
  )
}
