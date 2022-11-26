import { useQuery } from 'react-query'

import { getRepoIssues } from '~/services/issues'
import { getUserByUserName } from '~/services/user'

import { HomeHeader } from './components/HomeHeader'
import { PostCard } from './components/PostCard'
import * as S from './styles'

export const Home = () => {
  const { data: userData } = useQuery('user', () => getUserByUserName())
  const { data: issuesData } = useQuery('issues', () => getRepoIssues())

  return userData ? (
    <S.HomeContainer>
      <HomeHeader user={userData} />
      <S.SearchForm action="">
        <div>
          <h2>Publicações</h2>
          <span>
            {issuesData?.length} {issuesData?.length === 1 ? 'publicação' : 'publicações'}
          </span>
        </div>
        <input type="text" placeholder="Buscar conteúdo" />
      </S.SearchForm>
      {issuesData && (
        <S.PostsList>
          {issuesData?.map((issue) => (
            <PostCard key={issue.id} post={issue} />
          ))}
        </S.PostsList>
      )}
    </S.HomeContainer>
  ) : (
    <div>Loading...</div>
  )
}
