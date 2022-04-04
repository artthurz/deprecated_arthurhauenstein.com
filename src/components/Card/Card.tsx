import { useEffect, useRef, useState } from 'react'
import * as S from './Card.styles'

export type CardProps = {
  children: React.ReactNode
  shadowColor: string
  title: string
}

const Card = ({ children, shadowColor, title, ...props }: CardProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [cardPerspective, setCardPerspective] = useState({})
  const [childrenPerspective, setChildrenPerspective] = useState({})
  const [highlightPerspective, setHighlightPerspective] = useState({})

  useEffect(() => {
    wrapperRef.current?.addEventListener('pointermove', handlePointerMove)
    wrapperRef.current?.addEventListener('pointerleave', () => {
      setCardPerspective({
        transform: 'scale(1) rotateX(0) rotateY(0)',
        transition: 'box-shadow 0.3s, transform 0.3s'
      })
      setChildrenPerspective({
        transform: 'translate3d(0, 0, 0)'
      })
      setHighlightPerspective({
        transform: 'translate3d(0px, 0px, 0px)',
        transitionDuration: '600ms',
        opacity: 0
      })
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handlePointerMove = (event: PointerEvent) => {
    const pointerTypeIsMouse = event.pointerType === 'mouse'
    if (!pointerTypeIsMouse) {
      event.preventDefault()
    }
    const { clientX, clientY } = event
    const elBoundingClientRect = wrapperRef.current?.getBoundingClientRect()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { top, left, width, height }: any = elBoundingClientRect

    const centerX = width / 2
    const centerY = height / 2

    const coordX = clientX - left
    const coordY = clientY - top

    let rotateY = (40 * (coordX - centerX)) / (width / 2)
    let rotateX = ((40 * (coordY - centerY)) / (height / 2)) * -1

    if (rotateX > 0) {
      rotateX = rotateX > 30 ? 30 : rotateX
    } else {
      rotateX = rotateX < -30 ? -30 : rotateX
    }

    if (rotateY > 0) {
      rotateY = rotateY > 30 ? 30 : rotateY
    } else {
      rotateY = rotateY < -30 ? -30 : rotateY
    }

    const rotateXPercentage = (rotateX / 40) * 100
    const rotateYPercentage = (rotateY / 40) * 100

    const cardStyle = {
      transform: `scale(1.1) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      boxShadow: `
        ${-rotateY / 2}px ${rotateX / 2}px 15px ${shadowColor}`
    }

    const childrenStyle = {
      transform: `translate3d(${rotateYPercentage * 0.25}%, ${
        -rotateXPercentage * 0.25
      }%, 0)`
    }

    const highlightStyle = {
      transform: `translate3d(${-rotateYPercentage * 0.25}%, ${
        rotateXPercentage * 0.25
      }%, 0)`,
      opacity:
        Math.max(Math.abs(rotateXPercentage), Math.abs(rotateYPercentage)) /
        100,
      transitionDuration: '0ms'
    }

    setCardPerspective(cardStyle)
    setChildrenPerspective(childrenStyle)
    setHighlightPerspective(highlightStyle)
  }

  return (
    <S.Wrapper style={cardPerspective} {...props}>
      <S.CardOverlay ref={wrapperRef} />
      <div style={childrenPerspective}>{children}</div>
      <h1 style={{ marginLeft: '10px' }}>{title}</h1>
      <S.Highlight style={highlightPerspective} />
    </S.Wrapper>
  )
}

export default Card
