import styled from 'styled-components'

export const LoaderContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Loader = styled.div`
  width: 100px;
  height: 100px;
  display: inline-block;
  position: relative;

  &::after,
  &::before {
    content: '';
    box-sizing: border-box;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid ${(props) => props.theme['base-text']};
    position: absolute;
    left: 0;
    top: 0;
    animation: animloader 2s linear infinite;
  }
  &::after {
    animation-delay: 1s;
  }

  @keyframes animloader {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
`
