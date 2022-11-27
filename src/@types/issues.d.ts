import { UserType } from './user.d'

export interface IssueType {
  url: string
  repository_url: string
  labels_url: string
  comments_url: string
  html_url: string
  id: number
  number: number
  title: string
  user: UserType
  labels: string[]
  comments: number
  created_at: Date
  updated_at: Date
  body: string
}

export type IssuesType = IssueType[]

export interface SearchedIssueList {
  total_count: number
  incomplete_results: boolean
  items: IssuesType
}
