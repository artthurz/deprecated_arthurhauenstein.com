import React from 'react'
import * as S from './Heading.styles'

export type HeadingProps = {
  children: React.ReactNode
  size?: 'xxlarge' | 'xlarge'
  textColor?: string
} & React.HTMLAttributes<HTMLHeadingElement>

const Heading = ({
  children,
  size = 'xxlarge',
  textColor,
  ...props
}: HeadingProps) => (
  <S.Wrapper size={size} textColor={textColor} {...props}>
    {children}
  </S.Wrapper>
)

export default Heading
