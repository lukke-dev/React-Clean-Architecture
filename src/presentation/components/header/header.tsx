import React from 'react'
import { HeaderContainer } from './styles'
import logo4dev from '@/shared/assets/logo-4dev.svg'

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <div>
        <img src={logo4dev} alt="" height="50px" />
        4Dev - React Clean Architecture
      </div>
    </HeaderContainer>
  )
}
