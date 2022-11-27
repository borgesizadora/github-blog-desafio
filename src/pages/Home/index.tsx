import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useQuery } from 'react-query'

import { Loader } from '~/components/Loader'
import { searchIssue } from '~/services/issues'
import { getUserByUserName } from '~/services/user'
import * as zod from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'

import { HomeHeader } from './components/HomeHeader'
import { PostCard } from './components/PostCard'
import * as S from './styles'

const searchFormSchema = zod.object({
  query: zod.string()
})

type SearchFormInputs = zod.infer<typeof searchFormSchema>

export const Home = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const { data: userData } = useQuery('user', () => getUserByUserName())
  const { data: issuesSearchData } = useQuery(['issuesSearch', searchQuery], () =>
    searchIssue(searchQuery)
  )
  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })

  const handleSearchIssues = (data: SearchFormInputs) => {
    setSearchQuery(data.query)
  }

  return userData ? (
    <S.HomeContainer>
      <HomeHeader user={userData} />
      <S.SearchForm onSubmit={handleSubmit(handleSearchIssues)}>
        <div>
          <h2>Publicações</h2>
          {issuesSearchData?.items && (
            <span>
              {issuesSearchData?.items?.length || 'Nenhuma'}
              {issuesSearchData?.items?.length <= 1 ? ' publicação' : ' publicações'}
            </span>
          )}
        </div>
        <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
      </S.SearchForm>
      {issuesSearchData?.items && issuesSearchData?.items.length > 0 ? (
        <S.PostsList>
          {issuesSearchData?.items?.map((issue) => (
            <PostCard key={issue.id} post={issue} />
          ))}
        </S.PostsList>
      ) : (
        <S.NoPostsFount>Nenhum post encontrado</S.NoPostsFount>
      )}
    </S.HomeContainer>
  ) : (
    <Loader />
  )
}
