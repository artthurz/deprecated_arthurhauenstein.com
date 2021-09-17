import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import * as S from './MenuItem.styles'

export type MenuItemProps = {
  href: string
  title: string
  menuMobileIsOpen: boolean
}

const MenuItem = (props: MenuItemProps) => {
  const { pathname } = useRouter()
  const { href, title, menuMobileIsOpen } = props

  return (
    <Link href={href}>
      <S.MenuLink
        isActive={pathname === href}
        menuMobileIsOpen={menuMobileIsOpen}
        key={title}
      >
        <h1>{title} </h1>
      </S.MenuLink>
    </Link>
  )
}

export default MenuItem
