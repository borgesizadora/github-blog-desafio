import cover from '~/assets/cover.svg'
import logo from '~/assets/logo.svg'

import * as S from './styles'
export const Header = () => {
  return (
    <S.HeaderContainer>
      <S.Cover src={cover} alt="" />
      <S.Logo src={logo} alt="" />
    </S.HeaderContainer>
  )
}
