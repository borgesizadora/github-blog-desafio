import { IssuesType, IssueType, SearchedIssueList } from '~/@types/issues'

import { api } from './api'

export const getRepoIssues = async () => {
  const response = await api.get('repos/borgesizadora/github-blog-desafio/issues')
  return response.data as IssuesType
}

export const getRepoIssueById = async (id: string) => {
  const response = await api.get('repos/borgesizadora/github-blog-desafio/issues/' + id)
  return response.data as IssueType
}

export const searchIssue = async (query: string) => {
  const response = await api.get(
    `search/issues?q=${encodeURI(query)}repo:borgesizadora/github-blog-desafio`
  )
  return response.data as SearchedIssueList
}
