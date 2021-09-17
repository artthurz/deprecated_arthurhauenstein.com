import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import * as S from './NavItem.styles'

export type NavItemProps = {
  href: string
  title: string
  menuMobileIsOpen: boolean
}

const NavItem = (props: NavItemProps) => {
  const { pathname } = useRouter()
  const { href, title, menuMobileIsOpen } = props

  return (
    <Link href={href}>
      <S.Link
        isActive={pathname === href}
        menuMobileIsOpen={menuMobileIsOpen}
        key={title}
      >
        {title}
      </S.Link>
    </Link>
  )
}

export default NavItem
