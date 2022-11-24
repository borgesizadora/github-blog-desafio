import { formatDateWithSuffix } from '~/utils/formatters'

import { IssueListType } from '../..'
import * as S from './styled'

interface PostCardProps {
  post: IssueListType[number]
}

export const PostCard: React.FC<PostCardProps> = ({ post: { content, date, title } }) => {
  return (
    <S.CardContainer>
      <S.CardContent>
        <S.CardHeader>
          <h3>{title}</h3>
          <span>{formatDateWithSuffix(new Date(date))}</span>
        </S.CardHeader>
        <S.Text>{content}</S.Text>
      </S.CardContent>
    </S.CardContainer>
  )
}
