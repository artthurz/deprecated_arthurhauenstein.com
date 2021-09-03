import { useEffect, useRef, useState } from 'react'
import * as S from './Card.styles'

export type CardProps = {
  children: React.ReactNode
  shadowColor: string
}

const Card = ({ children, shadowColor, ...props }: CardProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [cardPerspective, setCardPerspective] = useState({})

  useEffect(() => {
    wrapperRef.current?.addEventListener('mousemove', handleMouseMovement)
    wrapperRef.current?.addEventListener('mouseout', () => {
      setCardPerspective({
        transform: 'scale(1) rotateX(0) rotateY(0)'
      })
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleMouseMovement = (event: MouseEvent) => {
    const height = wrapperRef.current?.clientHeight
    const width = wrapperRef.current?.clientWidth

    const xPosition = event.offsetX
    const yPosition = event.offsetY

    const yRotation = 20 * ((xPosition - width! / 2) / width!)
    const xRotation = -20 * ((yPosition - height! / 2) / height!)

    const newStyle = {
      transform:
        `scale(1.1) rotateX(` +
        xRotation +
        `deg) rotateY(` +
        yRotation +
        `deg)`,
      boxShadow:
        -yRotation +
        `px ` +
        xRotation +
        `px 10px ` +
        shadowColor +
        `, inset ` +
        -yRotation +
        `px ` +
        xRotation +
        `px 40px rgba(255, 255, 255, 0.2)`
    }

    setCardPerspective(newStyle)
  }

  return (
    <S.Wrapper ref={wrapperRef} style={cardPerspective} {...props}>
      {children}
    </S.Wrapper>
  )
}

export default Card
