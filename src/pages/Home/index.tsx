import { HomeHeader } from './components/HomeHeader'
import { PostCard } from './components/PostCard'
import * as S from './styles'

const ISSUES = [
  {
    id: 1,
    date: '2022-11-23T23:37:46.509Z',
    title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    content:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A blanditiis excepturi et quia fugiat laboriosam!Lorem ipsum dolor sit, amet consectetur adipisicing elit. A blanditiis excepturi et quia fugiat laboriosam!Lorem ipsum dolor sit, amet consectetur adipisicing elit. A blanditiis excepturi et quia fugiat laboriosam!Lorem ipsum dolor sit, amet consectetur adipisicing elit. A blanditiis excepturi et quia fugiat laboriosam!Lorem ipsum dolor sit, amet consectetur adipisicing elit. A blanditiis excepturi et quia fugiat laboriosam!Lo'
  },
  {
    id: 2,
    date: '2022-11-23T23:38:39.431Z',
    title: 'Lorem, ipsum.',
    content:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A blanditiis excepturi et quia fugiat laboriosam!'
  },
  {
    id: 3,
    date: '2022-11-20T23:35:39.431Z',
    title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    content:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A blanditiis excepturi et quia fugiat laboriosam!Lorem ipsum dolor sit, amet consectetur adipisicing elit. A blanditiis excepturi et quia fugiat laboriosam!'
  },
  {
    id: 4,
    date: '2022-11-23T23:36:39.431Z',
    title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    content:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A blanditiis excepturelit. A blanditiis excepturelit. A blanditiis excepturelit. A blanditiis excepturelit. A blanditiis excepturi et quia fugiat laboriosam!Lorem ipsum dolor sit, amet consectetur adipisicing elit. A blanditiis excepturi et quia fugiat laboriosam!'
  },
  {
    id: 5,
    date: '2022-11-23T23:36:39.431Z',
    title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    content:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A blanditiis excepturi et quia fugiat laboriosam!Lorem ipsum dolor sit, amet consectetur adipisicing elit. A blanditiis excepturi et quia fugiat laboriosam!'
  },
  {
    id: 6,
    date: '2022-11-23T23:36:39.431Z',
    title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    content:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A blanditiis excepturi et quia fugiat laboriosam!Lorem ipsum dolor sit, amet consectetur adipisicinelit. A blanditiis excepturelit. A blanditiis excepturg elit. A blanditiis excepturi et quia fugiat laboriosam!'
  }
]
export type IssueListType = typeof ISSUES

export const Home = () => {
  const issues = [...ISSUES]
  return (
    <S.HomeContainer>
      <HomeHeader />
      <S.SearchForm action="">
        <div>
          <h2>Publicações</h2>
          <span>6 publicações</span>
        </div>
        <input type="text" placeholder="Buscar conteúdo" />
      </S.SearchForm>
      <S.PostsList>
        {issues.map((issue) => (
          <PostCard key={issue.id} post={issue} />
        ))}
      </S.PostsList>
    </S.HomeContainer>
  )
}
