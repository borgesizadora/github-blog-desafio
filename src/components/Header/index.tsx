import { Link } from 'react-router-dom'

import cover from '~/assets/cover.svg'
import logo from '~/assets/logo.svg'

import * as S from './styles'
export const Header = () => {
  return (
    <S.HeaderContainer>
      <S.Cover src={cover} alt="" />
      <Link to="/">
        <S.Logo src={logo} alt="" />
      </Link>
    </S.HeaderContainer>
  )
}
