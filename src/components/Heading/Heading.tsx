import React from 'react'
import * as S from './Heading.styles'

export type HeadingProps = {
  children: React.ReactNode
  size?: 'xlarge' | 'large'
  textColor?: string
} & React.HTMLAttributes<HTMLHeadingElement>

const Heading = ({
  children,
  size = 'xlarge',
  textColor,
  ...props
}: HeadingProps) => (
  <S.Wrapper size={size} textColor={textColor} {...props}>
    {children}
  </S.Wrapper>
)

export default Heading
