import React from 'react'
import * as S from './CardShelf.styles'

export type CardShelfProps = {
  cards?: React.ReactNode[]
}

const CardShelf = ({ cards = [] }: CardShelfProps) => {
  return (
    <S.Wrapper>
      {!!cards.length && cards.map((card, i) => <div key={i}>{card}</div>)}
    </S.Wrapper>
  )
}

export default React.memo(CardShelf)
