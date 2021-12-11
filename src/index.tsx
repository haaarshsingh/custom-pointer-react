import React from 'react'
import styled from 'styled-components'

type CursorProps = {
  color?: string
  showRing?: boolean
  ringSize?: number
  cursorSize?: number
  ringBorder?: number
}

type MouseContext = {
  cursorType: string
  cursorChangeHandler: (cursorType: string) => void
}

export const MouseContext = React.createContext<MouseContext>({
  cursorType: '',
  cursorChangeHandler: () => {}
})

export const MouseContextProvider: React.FC<{ children: JSX.Element }> = ({
  children
}) => {
  const [cursorType, setCursorType] = React.useState('')

  const cursorChangeHandler = (cursorType: string) => {
    setCursorType(cursorType)
  }

  return (
    <MouseContext.Provider
      value={{
        cursorType: cursorType,
        cursorChangeHandler: cursorChangeHandler
      }}
    >
      {children}
    </MouseContext.Provider>
  )
}

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 })

  React.useEffect(() => {
    const mouseMoveHandler = (event: MouseEvent) => {
      const { clientX, clientY } = event
      setMousePosition({ x: clientX, y: clientY })
    }
    document.addEventListener('mousemove', mouseMoveHandler)

    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler)
    }
  }, [])

  return mousePosition
}

const Ring = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
  border: 2px solid white;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  transition: 0.2s ease-out;
  z-index: 999;
  pointer-events: none;
`

const Dot = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  background-color: #000000;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  z-index: 999;
  pointer-events: none;
`

const CursorContainer = styled.div<{ ringSize: number }>`
  .hovered {
    width: ${({ ringSize }) => ringSize}px !important;
    height: ${({ ringSize }) => ringSize}px !important;
  }
`

export const Cursor: React.FC<CursorProps> = ({
  color,
  showRing = true,
  ringSize = 50,
  ringBorder,
  cursorSize
}) => {
  const { x, y } = useMousePosition()
  const { cursorType, cursorChangeHandler } = React.useContext(MouseContext)

  React.useEffect(() => {
    document.addEventListener('mousedown', () => cursorChangeHandler('hovered'))
    document.addEventListener('mouseup', () => cursorChangeHandler(''))

    const links = Array.from(document.getElementsByTagName('a'))
    links.forEach((element) => {
      element.addEventListener('mouseover', () =>
        cursorChangeHandler('hovered')
      )
      element.addEventListener('mouseout', () => cursorChangeHandler(''))
    })
  })

  return (
    <CursorContainer ringSize={ringSize! + 30}>
      {showRing && (
        <Ring
          className={'ring ' + cursorType}
          style={{
            left: `${x}px`,
            top: `${y}px`,
            background: color,
            borderWidth: ringBorder,
            height: ringSize,
            width: ringSize
          }}
        ></Ring>
      )}
      <Dot
        className={'dot'}
        style={{
          left: `${x}px`,
          top: `${y}px`,
          height: cursorSize,
          width: cursorSize
        }}
      ></Dot>
    </CursorContainer>
  )
}
