import ReactMarkdown from 'react-markdown'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { getRepoIssueById } from '~/services/issues'

import { PostHeader } from './PostHeader'
import * as S from './styles'

const SyntaxHighlight = ({ props, children }: any) => {
  return (
    <SyntaxHighlighter style={oneDark} language="typescript" {...props}>
      {children}
    </SyntaxHighlighter>
  )
}

export const Post = () => {
  const { id } = useParams()
  const { data: issueData } = useQuery(['issues', id], () => getRepoIssueById(id!))

  return issueData && id ? (
    <div>
      <PostHeader
        commentsAmount={issueData?.comments}
        date={issueData?.created_at}
        gitHubLink={issueData?.html_url}
        title={issueData?.title}
        userName={issueData?.user.login}
      />
      <S.BodyContainer>
        <ReactMarkdown
          components={{
            code({ children, ...props }) {
              return (
                <SyntaxHighlight className="codeStyle" {...props}>
                  {children}
                </SyntaxHighlight>
              )
            }
          }}>
          {issueData.body}
        </ReactMarkdown>
      </S.BodyContainer>
    </div>
  ) : (
    <div>Loading...</div>
  )
}
