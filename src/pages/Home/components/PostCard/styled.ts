import styled from 'styled-components'

export const CardContainer = styled.li`
  border-radius: 10px;
  background: ${(props) => props.theme['base-post']};
  padding: 2rem;
  width: 100%;
  height: 16rem;
  max-height: 16rem;
  max-width: calc(50% -1rem);
  overflow: hidden;
  border: 2px solid transparent;
  &:hover {
    transition: border 0.1s;
    border: 2px solid ${(props) => props.theme['base-label']};
  }
`
export const CardContent = styled.div`
  overflow: hidden;
  max-height: 100%;
`

export const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.25rem;
  gap: 1rem;
  & > h3 {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-title']};
  }
  & > span {
    white-space: nowrap;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
  }
`
export const Text = styled.div`
  -webkit-line-clamp: 4;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`
