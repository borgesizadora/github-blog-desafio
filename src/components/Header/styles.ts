import styled from 'styled-components'

export const HeaderContainer = styled.div`
  max-height: 18.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  z-index: -1;
`
export const Cover = styled.img`
  flex-shrink: 0;
  min-width: 100%;
  min-height: 100%;
`
export const Logo = styled.img`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 6rem;
`
