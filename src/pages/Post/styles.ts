import styled from 'styled-components'

export const BodyContainer = styled.main`
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  pre {
    pre,
    code,
    code span {
      background: ${(props) => props.theme['base-post']} !important;
    }
  }
`
