import styled from 'styled-components'

export const HomeContainer = styled.div``

export const PostsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 3rem;
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
