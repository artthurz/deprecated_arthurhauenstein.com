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

  useEffect(() => {
    wrapperRef.current?.addEventListener('mousemove', handleMouseMovement)
    wrapperRef.current?.addEventListener('mouseout', () => {
      setCardPerspective({
        transform: 'scale(1) rotateX(0) rotateY(0)',
        transition: 'box-shadow 0.3s, transform 0.3s'
      })
      setChildrenPerspective({
        transform: `translate3d(0, 0, 0)`
      })
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleMouseMovement = (event: MouseEvent) => {
    const { clientX, clientY } = event
    const elBoundingClientRect = wrapperRef.current?.getBoundingClientRect()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { top, left, width, height }: any = elBoundingClientRect

    const centerX = width / 2
    const centerY = height / 2

    const coordX = clientX - left
    const coordY = clientY - top

    const rotateY = (15 * (coordX - centerX)) / (width / 2)
    const rotateX = ((30 * (coordY - centerY)) / (height / 2)) * -1

    const rotateXPercentage = (rotateX / 30) * 100
    const rotateYPercentage = (rotateY / 15) * 100

    const cardStyle = {
      transform: `scale(1.1) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      boxShadow: `
        ${-rotateY / 2}px ${rotateX / 2}px 10px ${shadowColor},
        inset ${-rotateY / 3}px ${rotateX / 3}px 40px rgba(255, 255, 255, 0.2)`
    }

    const childrenStyle = {
      transform: `translate3d(${-rotateYPercentage * 0.25}%, ${
        rotateXPercentage * 0.25
      }%, 0)`
    }

    setCardPerspective(cardStyle)
    setChildrenPerspective(childrenStyle)
  }

  return (
    <S.Wrapper ref={wrapperRef} style={cardPerspective} {...props}>
      <div style={childrenPerspective}>{children}</div>
      <h1 style={{ marginLeft: '10px' }}>{title}</h1>
    </S.Wrapper>
  )
}

export default Card
