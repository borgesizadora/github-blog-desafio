import ReactMarkdown from 'react-markdown'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

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
  return (
    <div>
      <PostHeader />
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
          {post.body}
        </ReactMarkdown>
      </S.BodyContainer>
    </div>
  )
}

const post = {
  url: 'https://api.github.com/repos/TanStack/query/issues/4487',
  repository_url: 'https://api.github.com/repos/TanStack/query',
  labels_url: 'https://api.github.com/repos/TanStack/query/issues/4487/labels{/name}',
  comments_url: 'https://api.github.com/repos/TanStack/query/issues/4487/comments',
  events_url: 'https://api.github.com/repos/TanStack/query/issues/4487/events',
  html_url: 'https://github.com/TanStack/query/issues/4487',
  id: 1440425665,
  node_id: 'I_kwDODGBpm85V2ybB',
  number: 4487,
  title:
    'TypeScript error in /app/node_modules/@tanstack/react-query-devtools/build/lib/utils.d.ts(40,78):',
  user: {
    login: 'Elwazer007',
    id: 28496859,
    node_id: 'MDQ6VXNlcjI4NDk2ODU5',
    avatar_url: 'https://avatars.githubusercontent.com/u/28496859?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/Elwazer007',
    html_url: 'https://github.com/Elwazer007',
    followers_url: 'https://api.github.com/users/Elwazer007/followers',
    following_url: 'https://api.github.com/users/Elwazer007/following{/other_user}',
    gists_url: 'https://api.github.com/users/Elwazer007/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/Elwazer007/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/Elwazer007/subscriptions',
    organizations_url: 'https://api.github.com/users/Elwazer007/orgs',
    repos_url: 'https://api.github.com/users/Elwazer007/repos',
    events_url: 'https://api.github.com/users/Elwazer007/events{/privacy}',
    received_events_url: 'https://api.github.com/users/Elwazer007/received_events',
    type: 'User',
    site_admin: false
  },
  labels: [
    {
      id: 2313837251,
      node_id: 'MDU6TGFiZWwyMzEzODM3MjUx',
      url: 'https://api.github.com/repos/TanStack/query/labels/needs-info',
      name: 'needs-info',
      color: 'd16087',
      default: false,
      description: ''
    },
    {
      id: 2849861769,
      node_id: 'MDU6TGFiZWwyODQ5ODYxNzY5',
      url: 'https://api.github.com/repos/TanStack/query/labels/package:%20react-query-devtools',
      name: 'package: react-query-devtools',
      color: 'A5CA8E',
      default: false,
      description: ''
    }
  ],
  state: 'open',
  locked: false,
  assignee: null,
  assignees: [],
  milestone: null,
  comments: 1,
  created_at: '2022-11-08T15:30:13Z',
  updated_at: '2022-11-11T18:34:16Z',
  closed_at: null,
  author_association: 'NONE',
  active_lock_reason: null,
  body: '### Describe the bug\n\nIntegrating the react-query devtools with react-query is broken , I followed the instructions in the docs : \r\nhere\'s a sample code \r\n```\r\nconst Application = () => {\r\n\r\n  const queryClient = new QueryClient({\r\n    defaultOptions: {\r\n      queries: {\r\n        refetchOnWindowFocus: false,\r\n        refetchOnMount: false,\r\n      },\r\n    },\r\n  });\r\n\r\n  return (\r\n      <QueryClientProvider client={queryClient}>\r\n        {/* My components tree */ }\r\n        <ReactQueryDevtools initialIsOpen={false} />\r\n      </QueryClientProvider>\r\n  );\r\n};\r\n\r\n``` \r\nresults : \r\nFailed to compile the application with the following log error : \r\n```\r\n    38 |  * Example given `border` and `right` it return `borderRight`\r\n    39 |  */\r\n  > 40 | export declare function getSidedProp<T extends string>(prop: T, side: Side): `${T}Left` | `${T}Right` | `${T}Bottom` | `${T}Top`;\r\n       |                                                                              ^\r\n    41 | export interface SidePanelStyleOptions {\r\n    42 |     /**\r\n    43 |      * Position of the panel\r\nCompiling...\r\nFailed to compile.\r\n```\n\n### Your minimal, reproducible example\n\nasked in stackoverflow https://stackoverflow.com/questions/74362928/react-query-devtools-doesnt-in-a-react-typescript-app\n\n### Steps to reproduce\n\ninstall react query version 4.0.10 \r\ninstall react query devtools 4.14.5 \r\nconfigure react query devtools just as docs description \n\n### Expected behavior\n\nI think it shloud be working as normal but it is failing to compile\n\n### How often does this bug happen?\n\n_No response_\n\n### Screenshots or Videos\n\n<img width="1042" alt="Screenshot 2022-11-08 at 5 24 41 PM" src="https://user-images.githubusercontent.com/28496859/200605454-2967a063-337f-407a-a908-be069d606c64.png">\r\n\n\n### Platform\n\nmacos m1  \r\nchrome browser \r\n\n\n### react-query version\n\n4.0.10\n\n### TypeScript version\n\n3.7.5\n\n### Additional context\n\nreact-query-devtools version is 4.14.5',
  closed_by: null,
  reactions: {
    url: 'https://api.github.com/repos/TanStack/query/issues/4487/reactions',
    total_count: 0,
    '+1': 0,
    '-1': 0,
    laugh: 0,
    hooray: 0,
    confused: 0,
    heart: 0,
    rocket: 0,
    eyes: 0
  },
  timeline_url: 'https://api.github.com/repos/TanStack/query/issues/4487/timeline',
  performed_via_github_app: null,
  state_reason: null
}
