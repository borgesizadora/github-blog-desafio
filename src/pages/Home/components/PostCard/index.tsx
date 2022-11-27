import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'

import { IssueType } from '~/@types/issues'
import { dataFormatter, formatDateWithSuffix } from '~/utils/formatters'

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
              <time
                title={dataFormatter.format(new Date(created_at))}
                dateTime={created_at.toString()}>
                {formatDateWithSuffix(new Date(created_at))}
              </time>
            </S.CardHeader>
            <S.Text>
              <ReactMarkdown>{body}</ReactMarkdown>
            </S.Text>
          </S.CardContent>
        </article>
      </S.CardContainer>
    </Link>
  )
}
