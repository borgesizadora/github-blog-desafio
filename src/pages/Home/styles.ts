import styled from 'styled-components'

export const HomeContainer = styled.div``

export const PostsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 3rem;
`

export const SearchForm = styled.form`
  margin-top: 4.5rem;
  & > div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.75rem;
    & > h2 {
      font-size: 1.125rem;
      color: ${(props) => props.theme['base-subtitle']};
    }
    & > span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }
  input {
    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;
    width: 100%;
    padding: 0.75rem 1rem;
    color: ${(props) => props.theme['base-text']};
    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
export const NoPostsFount = styled.div`
  padding: 4rem 0;
  display: flex;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 700;
`

// MASONRY LAYOUT
//
// export const PostsList = styled.ul`
//   margin-top: 3rem;
//   column-count: 2;
//   column-gap: 1rem;

//   li {
//     width: 150px;
//     margin: 0 1rem 1rem 0;
//     display: inline-block;
//     width: 100%;
//   }
//   @for $i from 1 through 36 {
//     li:nth-child(#{$i}) {
//       $h: (random(400) + 100) + px;
//       height: $h;
//       line-height: $h;
//     }
//   }
// `
