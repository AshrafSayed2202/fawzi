
import React from 'react'
import './CursorStyle.css'
import { useCursor } from './CursorProvider'

function Cursor() {
    const cursorOut = React.useRef(null)
    const { cursorSize } = useCursor()
    React.useEffect(() => {
        const CursorMove = (e) => {
            const posX = e.clientX
            const posY = e.clientY
            cursorOut.current.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" })
        }
        cursorOut.current.animate({
            width: cursorSize,
            height: cursorSize
        }, { duration: 300, fill: "forwards" })
        window.addEventListener("mousemove", CursorMove)
        return () => {
            window.removeEventListener("mousemove", CursorMove)
        }
    }, [cursorSize])
    return (
        <>
            <div ref={cursorOut} className='cursor-outline'></div>
        </>
    )
}

export default Cursor